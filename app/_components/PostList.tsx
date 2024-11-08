import type { Post } from "app/types";
import { Suspense } from "react";
import { TweetSkeleton } from "react-tweet";
import TweetPage from "../tweet-page";

export const PostList = () => {
	const posts: Post[] = [
		{
			id: "1",
			url: "https://x.com/baseballczech_/status/1854110486637502663",
			title: "Baseball Czech",
			description: "Baseball Czech",
			imageUrl:
				"https://pbs.twimg.com/profile_images/1372659287973312000/5M0Z1yK9_400x400.jpg",
			comment: "Baseball Czech",
			likes: 0,
		},
		{
			id: "2",
			url: "https://www.youtube.com/watch?v=dC6w8X8NsQ4",
			title: "YouTube",
			description: "YouTube",
			imageUrl: "https://i.ytimg.com/vi/dC6w8X8NsQ4/hqdefault.jpg",
			comment: "YouTube",
			likes: 0,
		},
		{
			id: "3",
			url: "https://note.com/urimu_czech_bb/n/n60d761815525",
			title: "note",
			description: "note",
			imageUrl: "https://note.com/urimu_czech_bb/n/n60d761815525",
			comment: "note",
			likes: 0,
		},
	];

	return (
		<ul>
			{posts.map((post) => {
				const isYouTube = post.url.includes("youtube.com");
				const isTwitter = post.url.includes("x.com");

				if (isYouTube) {
					post.youtubeEmbedUrl = post.url.replace("watch?v=", "embed/");
				}

				if (isTwitter) {
					post.xId = post.url.split("/").pop();
				}

				return (
					<li
						key={post.id}
						style={{
							border: "1px solid #ccc",
							padding: "10px",
							margin: "10px 0",
						}}
					>
						<a href={post.url} target="_blank" rel="noopener noreferrer">
							<h2>{post.title}</h2>
							<p>{post.description}</p>
							{post.imageUrl && (
								<img
									src={post.imageUrl}
									alt={post.title}
									style={{ width: "100px", height: "auto" }}
								/>
							)}
						</a>

						{post.youtubeEmbedUrl && (
							<div>
								<h3>YouTube</h3>
								<iframe
									width="560"
									height="315"
									src={post.youtubeEmbedUrl}
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									title="YouTube Video"
								/>
							</div>
						)}

						{post.xId && (
							<div>
								<h3>X (Twitter)</h3>
								<Suspense fallback={<TweetSkeleton />}>
									<TweetPage id={post.xId} />
								</Suspense>
							</div>
						)}

						<p>{post.comment}</p>
					</li>
				);
			})}
		</ul>
	);
};
