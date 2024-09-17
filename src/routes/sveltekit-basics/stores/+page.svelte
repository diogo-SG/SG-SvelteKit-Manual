<script lang="ts">
	import Link from '$lib/components/ui/link/link.svelte';
	import { LIST_ITEMS, CODE_EXAMPLES } from './constants';

	import { page } from '$app/stores';
	import { Accordion } from '$lib/components/ui/accordion';
	import AccordionItem from '$lib/components/ui/accordion/accordion-item.svelte';
	import AccordionTrigger from '$lib/components/ui/accordion/accordion-trigger.svelte';
	import AccordionContent from '$lib/components/ui/accordion/accordion-content.svelte';
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
</script>

<h1>Sveltekit stores</h1>

<p>
	Like in Svelte, you can use stores in SvelteKit to share state between components.
	SvelteKit provides three readonly stores via the <code>$app/stores</code>
	module:
</p>
<ul>
	{#each LIST_ITEMS.STORES as { title, desc }}
		<li>
			<code>{title}</code>
			- {desc}
		</li>
	{/each}
</ul>

<h2>
	<code>The page store</code>
</h2>

<p>
	The page store is probably the most often use, and provides (you've guessed it)
	information about the current page:
</p>
<ul>
	{#each LIST_ITEMS.PAGE as { title, desc, link }}
		<li>
			<code>{title}</code>
			-
			{#if link}
				<Link href={link}>{desc}</Link>
			{:else}
				{desc}
			{/if}
		</li>
	{/each}
</ul>
<p>
	Like any other store, we can reference its value in a component by prefixing its name
	with <code>$</code>
	.
</p>
<Accordion>
	<AccordionItem value="example">
		<AccordionTrigger>Example</AccordionTrigger>
		<AccordionContent>
			<p>This is the current url!</p>
			<code>{$page.url.pathname}</code>

			<CodeWrapper
				headerText="+page.svelte"
				code={CODE_EXAMPLES.REFERENCING_PAGE} />
		</AccordionContent>
	</AccordionItem>
</Accordion>

<h2>The navigating store</h2>
<p>
	The navigating store represents the current navigation. When a navigation starts, due to
	a link click, a back/forward navigation, or a programatting goto, the value of <code>
		navigating
	</code>
	will become an object with these properties:
</p>
<ul>
	<li>
		<code>from</code>
		and
		<code>to</code>
		- objects with
		<code>params</code>
		,
		<code>route</code>
		, and
		<code>url</code>
		properties.
	</li>
	<li>
		<code>type</code>
		- the type of navigation, such as
		<code>lin</code>
		,
		<code>popstate</code>
		or
		<code>goto</code>
		.
	</li>
</ul>

<h2>The updated store</h2>
<p>
	The updated store contains true or false depending on whether a new version of the app
	has been deployed since the page was first opened. For this to work, your
	<code>svelte.config.js</code>
	must specify
	<code>kit.version.pollInterval</code>
	.
</p>
<p>
	You can also manually check for new versions by calling <code>updated.check()</code>
	.
</p>
