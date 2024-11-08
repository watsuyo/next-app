export interface Post {
	id: string;
	title: string;
	imageUrl?: string;
	iconUrl?: string;
	comment: string;
	description: string;
	url: string;
	tweetData?: {
		user: {
			profile_image_url_https: string;
		};
		text: string;
		video?: {
			variants: { src: string }[];
			captionsUrl: string;
		};
		photos?: { url: string }[];
	};
	youtubeEmbedUrl?: string;
	xId?: string;
}
