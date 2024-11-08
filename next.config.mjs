/** @type {import('next').NextConfig} */
export const nextConfig = {
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
	images: {
		domains: ["pbs.twimg.com"], // 外部ドメインを指定
	},
	experimental: {
		appDir: true,
	},
};
