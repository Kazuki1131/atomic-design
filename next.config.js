/**  @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: (() => {
		if (process.env.NODE_ENV === 'production') {
			return {
				// 本番環境ではReact Testing Libraryで使用するdata-testid属性を削除
				reactRemoveProperties: { properties: ['^data-testid$'] },
			};
		}
	})(),
};

module.exports = nextConfig;
