<script lang="ts">
	import Link from '$lib/components/ui/link/link.svelte';

	import CodeBlock from '$lib/components/ui/code-block/code-block.svelte';

	export let data: any;
	console.log(data);
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
</script>
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

<h2>+layout.server.ts files</h2>

<p>
	You can also fetch data in a <code>+layout.server.ts</code> file, which will be run for every page
	that uses the layout. This can be useful for fetching data that is shared across multiple pages.
	For instance, if you access <Link href="./loading-data/loading-data-layout-example"
		>/sveltekit-basics/loading-data/loading-data-layout-example</Link
	>, you'll see that the jokes are the same.
</p>

<style>
	.setup {
		font-weight: bold;
	}
	.punchline {
		font-style: italic;
	}
</style>
