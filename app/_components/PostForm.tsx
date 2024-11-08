"use client";

import type { Post } from "app/types";
import type React from "react";
import { useState } from "react";

export const PostForm = () => {
	const [url, setUrl] = useState("");
	const [title, setTitle] = useState("");
	const [comment, setComment] = useState("");
	const [posts, setPosts] = useState<Post[]>(
		JSON.parse(window?.localStorage?.getItem("posts") || "[]"),
	);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const newPost: Post = {
			id: String(Date.now()),
			url,
			title,
			comment,
			likes: 0,
		};

		setPosts([...posts, newPost]);
		window?.localStorage?.setItem("posts", JSON.stringify([...posts, newPost]));

		setUrl("");
		setTitle("");
		setComment("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>
					WebサイトのURL:
					<input
						type="url"
						value={url}
						onChange={(e) => setUrl(e.target.value)}
						required
					/>
				</label>
			</div>
			<div>
				<label>
					タイトル:
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</label>
			</div>
			<div>
				<label>
					一言コメント:
					<input
						type="text"
						value={comment}
						onChange={(e) => setComment(e.target.value)}
						required
					/>
				</label>
			</div>
			<button type="submit">投稿</button>
		</form>
	);
};
