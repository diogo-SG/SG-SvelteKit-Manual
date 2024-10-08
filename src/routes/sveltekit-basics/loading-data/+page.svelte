<script lang="ts">
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import Link from '$lib/components/ui/link/link.svelte';
	import { CODE, HEADER, LOAD_FUNCTIONS_PARAMS } from './constants';

	export let data: any;
</script>

<h1 class="text-primary-700">Loading data</h1>

<h2>The +page.server.ts file</h2>

<p>
	When you navigate to a page, SvelteKit will first render the page on the server, and
	then hydrate it on the client. This means that you can fetch data on the server and pass
	it to the client, which can be useful for SEO, performance, and other reasons.
</p>

<p>
	To fetch data on the server, you can create a file with the same name as the page, but
	with a
	<code>.server.ts</code>
	extension. This file should export a
	<code>load</code>
	function that returns an object with the data you want to pass to the client.
</p>

<p>
	Here's an example of a <code>load</code>
	function that fetches some jokes from an API.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText={HEADER.LOADING}
		code={CODE.FETCH_JOKES} />
</div>

<p>
	On the corresponding component file, you can then access the data returned by the <code>
		load
	</code>
	function via the
	<code>data</code>
	prop, which you declare like any other prop.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText={HEADER.COMPONENT}
		code={CODE.COMPONENT} />
</div>

<div class="flex flex-col gap-2">
	<p>And here's a selection of (somewhat) funny jokes fetched from that load function.</p>
	{#if data?.props.jokes?.length === 0}
		<p>Loading jokes...</p>
	{:else}
		{#each data.props.jokes as joke}
			<p>
				<span class="font-bold">
					{joke.setup}
				</span>
				<span class="italic">{joke.punchline}</span>
			</p>
		{/each}
	{/if}
</div>

<h3>Where can load functions be used?</h3>
<p>
	Load functions declared in <code>+page.server.ts</code>
	files run exclusively on the server, which is the usual desired behaviour. However, you can
	also create them in +page.ts, which will make the load function run on both the client and
	the server. If for some reason you want to run it in the client only, you can add
	<code>export const ssr = false</code>
	to script tag in the file.
</p>

<h2>+layout.server.ts files</h2>

<p>
	You can also fetch data in a <code>+layout.server.ts</code>
	file, which will be run for every page that uses the layout. This can be useful for fetching
	data that is shared across multiple pages. For instance, if you access <Link
		href="./loading-data/loading-data-layout-example">
		/sveltekit-basics/loading-data/loading-data-layout-example
	</Link>, you'll see that the jokes are the same.
</p>

<h2>Load function params</h2>

<ul>
	<p>The load function makes several params available, including:</p>
	{#each LOAD_FUNCTIONS_PARAMS as { param, description, link }}
		<li>
			<code>{param}</code>
			- {#if link}<Link href={link}>{description}</Link>
			{:else}{description}
			{/if}
		</li>
	{/each}
</ul>
