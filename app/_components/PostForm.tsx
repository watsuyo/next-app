"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { addPost } from "../actions";

export const PostForm = () => {
	const [url, setUrl] = useState("");
	const [comment, setComment] = useState("");

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				const formData = new FormData(e.currentTarget);
				addPost(formData);
			}}
			className="mb-6 p-4 bg-white rounded-lg shadow-md"
		>
			<div className="mb-4">
				<label
					htmlFor="url"
					className="block text-sm font-medium text-gray-700"
				>
					URL:
				</label>
				<input
					type="text"
					id="url"
					name="url"
					value={url}
					onChange={(e) => setUrl(e.target.value)}
					placeholder="https://example.com"
					className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
					required
				/>
			</div>

			<div className="mb-4">
				<label
					htmlFor="comment"
					className="block text-sm font-medium text-gray-700"
				>
					コメント:
				</label>
				<input
					type="text"
					id="comment"
					name="comment"
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					placeholder="Enter your comment here"
					className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
					required
				/>
			</div>

			<button
				type="submit"
				className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
			>
				投稿
			</button>
		</form>
	);
};
