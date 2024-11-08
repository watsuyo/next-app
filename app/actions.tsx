"use server";

import { redirect } from "next/navigation";
import redis from "./redis";

export async function addPost(formData: FormData) {
	await redis.set(
		new Date().toISOString(),
		JSON.stringify({
			comment: formData.get("comment"),
			title: formData.get("title"),
			url: formData.get("url"),
		}),
	);

	redirect("/");
}
