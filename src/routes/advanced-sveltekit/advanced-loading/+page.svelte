<script>
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import Link from '$lib/components/ui/link/link.svelte';
	import { CODE_EXAMPLES } from './constants';
	import { page } from '$app/stores';
</script>

<h1>Advanced Loading</h1>

<h2>Universal load functions</h2>
<p>
	Previously, we've loaded data from the server using <code>+page.server.ts</code>
	and
	<code>+layout.server.ts</code>
	files, which is very convenient for getting data directly from a database or reading cookies.
	But sometimes it doesn't make sense to load data from the server when doing a client-side
	navigation. For example:
</p>

<ul>
	<li>When loading data from an external API;</li>
	<li>If we want to use in-memory data if it's available;</li>
	<li>
		If we want to delay navigation until an image has been preloaded, to avoid pop-in;
	</li>
	<li>
		If we need to return something from load that can't be serialized, like a component or
		a store.
	</li>
</ul>

<p>
	The solution is using universal <code>load</code>
	functions, which run on the server during SSR, but also in the browser when the app hydrates,
	or when the user performs a client-side navigation. We do this by renaming the
	<code>+page.server.ts</code>
	file to
	<code>+page.ts</code>
	, or for layouts, renaming
	<code>+layout.server.ts</code>
	to
	<code>+layout.ts</code>
	. For example, here's how we can use a universal load function to fetch the very first example
	component we've made and return it to this page:
</p>

<CodeWrapper
	headerText="+page.ts"
	code={CODE_EXAMPLES.universalLoad1} />

{#if $page.data.component}
	<p>Here's the component we fetched from the server:</p>
	<svelte:component this={$page.data.component} />
{/if}

<CodeWrapper
	headerText="+page.svelte"
	code={CODE_EXAMPLES.universalLoad2} />

<p>
	You can even use a server load function and a universal load function together - for
	example, when returning data from the server, but also a value that can't be serialized.
	The order of execution will be first on the server, then on the universal load function
	in <code>+page.ts</code>
	.
</p>
<p>
	You can read more about the differences between each type of <code>load</code>
	function in the official SvelteKit documentation <Link
		href="https://kit.svelte.dev/docs/load#universal-vs-server">
		here
	</Link>.
</p>

<h2>Using parent data</h2>
<p>
	As we've seen previously, <code>+page.svelte</code>
	and
	<code>+layout.svelte</code>
	files can access everything that's returned from their parent
	<code>load</code>
	functions. And sometimes, we want the
	<code>load</code>
	functions themselves to be able to access the data from their parents, which we can do with
	<code>await parent()</code>
	. For example:
</p>

<CodeWrapper
	headerText="+layout.server.ts"
	code={CODE_EXAMPLES.parentLoad1} />

<CodeWrapper
	headerText="/joke/+layout.ts"
	code={CODE_EXAMPLES.parentLoad2} />

<Link href="./advanced-loading/joke">Go to the joke page</Link>

<p>
	Keep in mind though that while a universal load function can get data from a parent
	server <code>load</code>
	function, the reverse is not true - a server load function can only get data from their parent
	server load functions.
</p>

<h2>Invalidation</h2>
<p>
	When users navigate from one page to another, SvelteKit calls our <code>load</code>
	functions, but only if it thinks something has changed. If we need to force a reload, we
	can use the
	<code>invalidate(...)</code>
	function, which takes a URL and re-runs any
	<code>load</code>
	functions that depend on it. Here's an example that invalidates an API endpoint every second:
</p>

<CodeWrapper
	headerText="+page.svelte"
	code={CODE_EXAMPLES.invalidate} />

<p>
	You can also pass a function to invalidate if you want to do it based on a pattern, and
	not specific URLs, and even specify custom dependencies for the invalidation (see an
	example <Link href="https://learn.svelte.dev/tutorial/custom-dependencies">here</Link>).
	You can also tell SvelteKit to indiscriminately invalidate all load functions for the
	current page, regardless of dependencies, with
	<code>invalidateAll()</code>
	.
</p>
