export const getOGPData = async (url: string) => {
	try {
		const response = await fetch(url);
		const html = await response.text();

		const titleMatch = html.match(
			/<meta property="og:title" content="([^"]*)"/,
		);
		const descriptionMatch = html.match(
			/<meta property="og:description" content="([^"]*)"/,
		);
		const imageUrlMatch = html.match(
			/<meta property="og:image" content="([^"]*)"/,
		);

		return {
			title: titleMatch ? titleMatch[1] : "",
			description: descriptionMatch ? descriptionMatch[1] : "",
			imageUrl: imageUrlMatch ? imageUrlMatch[1] : "",
		};
	} catch (error) {
		console.error(`Failed to fetch OGP data for ${url}:`, error);
		return {
			title: "",
			description: "",
			imageUrl: "",
		};
	}
};
