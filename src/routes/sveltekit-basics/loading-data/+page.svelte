<script lang="ts">
	import Link from '$lib/components/ui/link/link.svelte';

	import CodeBlock from '$lib/components/ui/code-block/code-block.svelte';

	export let data: any;

	const loadFunctionParams = [
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
</script>

<h1>Loading data</h1>

<h2>The +page.server.ts file</h2>

<p>
	When you navigate to a page, SvelteKit will first render the page on the server, and then hydrate
	it on the client. This means that you can fetch data on the server and pass it to the client,
	which can be useful for SEO, performance, and other reasons.
</p>

<p>
	To fetch data on the server, you can create a file with the same name as the page, but with a
	<code>.server.ts</code> extension. This file should export a <code>load</code> function that returns
	an object with the data you want to pass to the client.
</p>

<p>
	Here's an example of a <code>load</code> function that fetches some jokes from an API:
</p>

<CodeBlock>
	{`
import axios from 'axios';

export async function load() {
	const jokes = await axios.get('https://api.sampleapis.com/jokes/goodJokes');
	return {
		props: {
			jokes: jokes.data.slice(0, 5)
		}
	};
}
`}
</CodeBlock>

<p>
	On the corresponding component file, you can then access the data returned by the <code>load</code
	> function via the data prop, which you declare like any other prop:
</p>

<CodeBlock>
	{`
<script lang="ts">
	export let data: any;
	console.log(data);
<\/script>
`}
</CodeBlock>

<p>And here's a selection of (somewhat) funny jokes fetched from that load function.</p>
{#if data?.props.jokes?.length === 0}
	<p>Loading jokes...</p>
{:else}
	{#each data.props.jokes as joke}
		<p>
			<span class="setup">
				{joke.setup}
			</span> <span class="punchline">{joke.punchline}</span>
		</p>
	{/each}
{/if}

<h3>Where can load functions be used?</h3>
<p>
	Load functions declared in <code>+page.server.ts</code> files run exclusively on the server, which
	is the usual desired behaviour. However, you can also create them in +page.ts, which will make the
	load function run on both the client and the server. If for some reason you want to run it in the
	client only, you can add <code>export const ssr = false</code> to script tag in the file.
</p>

<h2>+layout.server.ts files</h2>

<p>
	You can also fetch data in a <code>+layout.server.ts</code> file, which will be run for every page
	that uses the layout. This can be useful for fetching data that is shared across multiple pages.
	For instance, if you access <Link href="./loading-data/loading-data-layout-example"
		>/sveltekit-basics/loading-data/loading-data-layout-example</Link
	>, you'll see that the jokes are the same.
</p>

<h2>Load function params</h2>

<p>The load function makes several params available, including:</p>
<ul>
	{#each loadFunctionParams as { param, description }}
		<li><code>{param}</code> - {description}</li>
	{/each}
</ul>

<style>
	.setup {
		font-weight: bold;
	}
	.punchline {
		font-style: italic;
	}
</style>
