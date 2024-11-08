import { parse } from "node-html-parser";

const allowedTags = [
	"og:title",
	"twitter:title",
	"og:description",
	"description",
	"og:image",
	"twitter:image",
	"apple-touch-icon",
	"icon",
	"shortcut icon",
];

const setImagePath = (url: string, imageUrl: string) => {
	if (!imageUrl) return "";
	const { protocol, host } = new URL(url);
	return new URL(imageUrl, `${protocol}//${host}`).toString();
};

const setIconPath = (url: string, iconUrl: string) => {
	if (!iconUrl) return "";
	const { protocol, host } = new URL(url);
	return new URL(iconUrl, `${protocol}//${host}`).toString();
};

export async function extractMetatag(html: string, url: string) {
	const root = parse(html);
	const objectMap: { [key: string]: string } = {};

	const metaTags = root.querySelectorAll("meta");
	for (const { attributes } of metaTags) {
		const property = attributes.property || attributes.name || attributes.rel;
		if (property && !objectMap[property] && allowedTags.includes(property)) {
			objectMap[property] = attributes.content || "";
		}
	}

	const linkTags = root.querySelectorAll("link");
	for (const { attributes } of linkTags) {
		const { rel, href } = attributes;
		if (rel && href && allowedTags.includes(rel)) {
			objectMap[rel] = href;
		}
	}

	const title =
		objectMap["og:title"] ||
		objectMap["twitter:title"] ||
		root.querySelector("title")?.text ||
		url;

	const description =
		objectMap["og:description"] || objectMap.description || "";

	const imageSrc =
		objectMap["twitter:image"] ||
		objectMap["og:image"] ||
		objectMap["apple-touch-icon"] ||
		objectMap.icon ||
		objectMap["shortcut icon"];

	const iconSrc =
		objectMap["apple-touch-icon"] ||
		objectMap.icon ||
		objectMap["shortcut icon"];

	const image = setImagePath(url, imageSrc);
	const icon = setIconPath(url, iconSrc);

	return {
		title,
		description,
		image,
		icon,
	};
}
