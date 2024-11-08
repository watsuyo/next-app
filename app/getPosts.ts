import redis from "./redis";
import type { Post } from "./types";

export const getPosts = async (): Promise<Post[]> => {
	const keys = await redis.keys("*");
	if (keys.length === 0) {
		return [];
	}
	const result = (await redis.mget(keys)) as Post[];
	const posts = result.map((post) => {
		const isYouTube =
			post.url.startsWith("https://www.youtube.com/") ||
			post.url.startsWith("https://youtu.be/");
		const isX = post.url.startsWith("https://x.com/");
		if (isYouTube) {
			const youtubeId = new URL(post.url).searchParams.get("v");
			return {
				...post,
				youtubeEmbedUrl: `https://www.youtube.com/embed/${youtubeId}`,
			};
		}

		if (isX) {
			const xId = new URL(post.url).pathname.split("/").pop();
			return {
				...post,
				xId,
			};
		}
		return post;
	});
	return posts;
};
