/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
		// Encontre a regra existente para imagens e exclua SVGs dela
		const fileLoaderRule = config.module.rules.find(
			(rule) => rule.test && rule.test.test(".svg")
		);
		fileLoaderRule.exclude = /\.svg$/;

		// Adicione uma nova regra para processar SVGs usando @svgr/webpack
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};

export default nextConfig;
