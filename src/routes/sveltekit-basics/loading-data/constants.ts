export const LOAD_FUNCTIONS_PARAMS = [
	{
		param: 'url',
		description:
			'An instance of URL, which provides properties like origin, hostname, pathname and searchParams'
	},
	{
		param: 'route',
		description: 'The name of the current route directory, relative to src/routes'
	},
	{ param: 'params', description: 'Derived from url.pathname and route.id' },
	{
		param: 'fetch',
		description:
			'A function which behaves identically to the native fetch API, but with a few additional features. See: https://kit.svelte.dev/docs/load#making-fetch-requests'
	},
	{ param: 'cookies', description: 'Provides getters and setters for cookies' },
	{
		param: 'setHeaders',
		description: 'Sets headers for the response (available when running on the server only)'
	},
	{ param: 'parents', description: 'Allows for accessing data from a parent load function' }
];

export const HEADER = {
	LOADING: '+page.server.ts',
	COMPONENT: '+page.svelte'
};

export const CODE = {
	FETCH_JOKES: `
import axios from 'axios';

export async function load() {
	const jokes = await axios.get('https://api.sampleapis.com/jokes/goodJokes');
	return {
		props: {
			jokes: jokes.data.slice(0, 5)
		}
	};
}
`,
	COMPONENT: `
	<script lang="ts">
		export let data: any;
		console.log(data);
	</script>
`
};
