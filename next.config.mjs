/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination:
					"https://us-central1-plucky-cascade-440013-j0.cloudfunctions.net/:path*"
			},
		];
	},
};

export default nextConfig;
