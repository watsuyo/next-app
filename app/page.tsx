import { unstable_cache } from "next/cache";
import { PostForm } from "./_components/PostForm";
import { getPosts } from "./getPosts";

import Image from "next/image";
import type { TwitterComponents } from "react-tweet";
import { PostList } from "./_components/PostList";
import { extractMetatag } from "./extractMetatag";
import type { Post } from "./types";

export const components: TwitterComponents = {
	AvatarImg: (props) => <Image {...props} />,
	MediaImg: (props) => <Image {...props} fill unoptimized />,
};

export const revalidate = 86400;

const Page = async () => {
	const posts = await getPosts();

	const getTweet = unstable_cache(
		async (id: string) =>
			await import("react-tweet/api").then((api) => api.getTweet(id)),
		["tweet"],
		{ revalidate: 3600 * 24 },
	);

	const postsWithMetaData = await Promise.all(
		posts.map(async (post) => {
			const html = await fetch(post.url).then((res) => res.text());
			const meta = await extractMetatag(html, post.url);

			post.title = meta.title;
			post.description = meta.description;
			post.imageUrl = meta.image;
			post.iconUrl = meta.icon;

			if (post.xId) {
				const tweetData = await getTweet(post.xId);
				const formattedTweetData = tweetData
					? {
							...tweetData,
							video: tweetData.video
								? {
										...tweetData.video,
									}
								: undefined,
						}
					: undefined;
				return {
					...post,
					tweetData: formattedTweetData as Post["tweetData"],
				};
			}
			return post as Post;
		}),
	);

	return (
		<div className="max-w-2xl mx-auto p-4 bg-gray-100">
			<PostForm />
			<PostList posts={postsWithMetaData} />
		</div>
	);
};

export default Page;
