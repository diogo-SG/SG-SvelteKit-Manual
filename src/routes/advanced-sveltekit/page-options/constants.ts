export const PAGE_OPTION_ITEMS = [
	{ title: 'ssr', description: 'If pages should be server-rendered' },
	{ title: 'csr', description: 'If the SvelteKit client should be loaded' },
	{
		title: 'prerender',
		description: 'If pages should be prerendered at build time, instead of on request'
	},
	{
		title: 'trailingSlash',
		description: 'If trailing slashes should be stripped, added, or ignored in URLs'
	}
];
