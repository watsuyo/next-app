import type { Post } from "app/types";
import React from "react";

const ProfileImage = ({ url, alt }: { url: string; alt: string }) => (
	<div className="w-12 h-12 mr-4 flex-shrink-0">
		{url ? (
			<img
				src={url}
				alt={alt}
				className="w-full h-full object-cover rounded-lg"
			/>
		) : (
			<div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
				<span className="text-gray-400">No Image</span>
			</div>
		)}
	</div>
);

const ContentMedia = ({ post }: { post: Post }) => {
	if (post.tweetData?.video) {
		return (
			<video
				src={post.tweetData?.video?.variants?.[4]?.src || ""}
				controls
				className="h-72 w-full rounded-lg object-contain"
			>
				<track
					kind="captions"
					srcLang="en"
					src={post.tweetData?.video?.captionsUrl || ""}
					label="English captions"
				/>
			</video>
		);
	}

	if (post.tweetData?.photos?.[0]?.url) {
		return (
			<img
				src={post.tweetData.photos[0].url}
				alt={post.title}
				className="h-72 w-full rounded-lg object-contain"
			/>
		);
	}

	if (post.youtubeEmbedUrl) {
		return (
			<iframe
				width="560"
				height="315"
				src={post.youtubeEmbedUrl}
				title={post.title}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				className="h-72 w-full rounded-lg object-contain"
			/>
		);
	}

	if (post.imageUrl && post.imageUrl !== post.iconUrl) {
		return (
			<img
				src={post.imageUrl}
				alt={post.title}
				className="h-72 w-full rounded-lg object-contain"
			/>
		);
	}

	return null;
};

export const PostList = ({ posts }: { posts: Post[] }) => {
	return (
		<div>
			{posts.map((post) => (
				<div
					key={post.id}
					className="flex items-start p-4 mb-4 bg-white rounded-lg shadow-md"
				>
					<ProfileImage
						url={
							post.tweetData?.user.profile_image_url_https || post.iconUrl || ""
						}
						alt={post.title}
					/>

					<div className="flex-grow">
						<h2 className="text-lg font-semibold text-gray-800 mb-2">
							{post.comment}
						</h2>
						<p className="text-gray-600 mb-2">
							{post.tweetData?.text.slice(0, 80) || post.title} ... -{" "}
							{new URL(post.url).hostname} ↗
						</p>

						<ContentMedia post={post} />

						<a
							href={post.url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 hover:underline"
						>
							View Post
						</a>
					</div>
				</div>
			))}
		</div>
	);
};
