import type { Post } from "app/types";
import { Suspense } from "react";
import { TweetSkeleton } from "react-tweet";
import TweetPage from "../tweet-page";

export const PostList = () => {
	const posts: Post[] = [];

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
