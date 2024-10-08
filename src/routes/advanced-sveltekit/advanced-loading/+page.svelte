<script>
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import Link from '$lib/components/ui/link/link.svelte';
	import { CODE_EXAMPLES } from './constants';
	import { page } from '$app/stores';
	import { Accordion, AccordionItem } from 'flowbite-svelte';
	import Note from '$lib/components/ui/note/note.svelte';
</script>

<h1 class="text-primary-700">Advanced Loading</h1>

<h2>Universal load functions</h2>
<p>
	Previously, we've loaded data from the server using <code>+page.server.ts</code>
	and
	<code>+layout.server.ts</code>
	files, which is very convenient for getting data directly from a database or reading cookies.
	But sometimes it doesn't make sense to load data from the server when doing a client-side
	navigation.
</p>

<ul>
	<p class="font-bold">Here's a small list of the most common use cases:</p>
	<li>When loading data from an external API;</li>
	<li>If we want to use in-memory data if it's available;</li>
	<li>Delay navigation until an image has been preloaded, to avoid pop-in;</li>
	<li>
		Return something from load that can't be serialized, like a component or a store.
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
	. Here's how we can use a universal load function to fetch the very first example component
	we've made and return it to this page.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText="+page.ts"
		code={CODE_EXAMPLES.universalLoad1} />

	<CodeWrapper
		headerText="+page.svelte"
		code={CODE_EXAMPLES.universalLoad2} />
</div>

<div class="flex flex-col items-center gap-2">
	{#if $page.data.component}
		<p>Component fetched from server:</p>
		<svelte:component this={$page.data.component} />
	{/if}
</div>

<Note>
	<p class="text-sm">
		You can even use a server load function and a universal load function together - for
		example, when returning data from the server, but also a value that can't be
		serialized. The order of execution will be first on the server, then on the universal
		load function in <code>+page.ts</code>
		. You can read more about the differences between each type of
		<code>load</code>
		function in the official SvelteKit documentation <Link
			href="https://kit.svelte.dev/docs/load#universal-vs-server">
			here
		</Link>.
	</p>
</Note>

<h2>Using parent data</h2>
<p>
	As we've seen previously, <code>+page.svelte</code>
	and
	<code>+layout.svelte</code>
	files can access everything that's returned from their parent
	<code>load</code>
	functions. Sometimes we want the
	<code>load</code>
	functions to be able to access the data from their parents themselves, which it's possible
	to do with
	<code>await parent()</code>
	.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText="+layout.server.ts"
		code={CODE_EXAMPLES.parentLoad1} />

	<CodeWrapper
		headerText="/joke/+layout.ts"
		code={CODE_EXAMPLES.parentLoad2} />

	<Note title="Try it">
		<div class="flex justify-center">
			<Link
				isInternal
				href="./advanced-loading/joke">
				Click here for jokes
			</Link>
		</div>
	</Note>
</div>

<Note>
	<p class="text-sm">
		While a universal <code>load</code>
		function can access data from a parent server
		<code>load</code>
		function, the reverse is not possible. A server
		<code>load</code>
		function can only retrieve data from its parent server
		<code>load</code>
		functions.
	</p>
</Note>

<div class="flex flex-col gap-2">
	<p>
		For a somewhat more intricate example, here's something you could use to dynamically
		generate breadcrumbs for the different sections of this manual:
	</p>

	<Accordion flush>
		<AccordionItem>
			<span slot="header">Root +layout.server.ts</span>
			<div class="flex flex-col gap-4">
				<p>
					We start by importing a list of all svelte files, formatting them into an object
					with title and link, and identifying the current route and its title.
				</p>
				<CodeWrapper
					headerText="src/routes/+layout.server.ts"
					code={CODE_EXAMPLES.BREADCRUMBS_LAYOUT_ROOT} />
			</div>
		</AccordionItem>
		<AccordionItem>
			<span slot="header">+layout.server.ts for each section</span>
			<div class="flex flex-col gap-4">
				<p>
					Then each section has its own <code>+layout.server.ts</code>
					file, which uses the data from the root layout to generate the breadcrumbs.
				</p>

				<CodeWrapper
					headerText="src/routes/advanced-sveltekit/+layout.server.ts"
					code={CODE_EXAMPLES.BREADCRUMBS_LAYOUT_SECTION} />

				<CodeWrapper
					headerText="$lib/helpers/helpers"
					code={CODE_EXAMPLES.BREADCRUMBS_GET_BREADCRUMBS_PROPS} />
			</div>
		</AccordionItem>
		<AccordionItem>
			<span slot="header">+layout.svelte</span>
			<div class="flex flex-col gap-4">
				<p>
					Finally, the svelte file for the layout receives the data from the server file,
					and passes it on to the Breadcrumbs component.
				</p>

				<CodeWrapper
					headerText="src/routes/advanced-sveltekit/+layout.svelte"
					code={CODE_EXAMPLES.BREADCRUMBS_LAYOUT_SVELTE} />

				<p>
					As a final note, since this is handled on the server, issues can arise when the
					app transitions from SSR to CSR (after hydration), causing breadcrumbs to go out
					of sync with the actual page. This is partly why this approach was abandoned,
					but it serves as a useful example. To resolve this, you can add the <code>
						data-sveltekit-reload
					</code>
					attribute to other navigation elements, like Navbar items. This forces the page to
					reload data from the server, ensuring the breadcrumbs stay updated.
				</p>
			</div>
		</AccordionItem>
	</Accordion>
</div>

<h2>Invalidation</h2>
<p>
	When users navigate from one page to another, SvelteKit calls our <code>load</code>
	functions, but only if it thinks something has changed. If we need to force a reload, we
	can use the
	<code>invalidate(...)</code>
	method, which takes an URL and re-runs any
	<code>load</code>
	functions that depend on it. Here's an example that invalidates an API endpoint every 5 seconds.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText="+page.svelte"
		code={CODE_EXAMPLES.invalidate} />
</div>

<p>
	You can even pass a function to the <code>invalidate</code>
	, in case you want to do it based on a pattern instead of specific URLs. It's also possible
	to specify custom dependencies for the invalidation (see an example <Link
		href="https://learn.svelte.dev/tutorial/custom-dependencies">
		here
	</Link>). SvelteKit also has a built-in
	<code>invalidateAll()</code>
	method that invalidates all the
	<code>load</code>
	functions on the current page.
</p>
