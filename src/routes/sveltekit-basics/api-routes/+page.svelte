<script>
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { AccordionItem, Accordion } from 'flowbite-svelte';
	import { CODE } from './constants';
	import Link from '$lib/components/ui/link/link.svelte';

	function fetchResponse() {
		return fetch('./api-routes/example').then((res) => res.json());
	}
</script>

<h2>API Routes</h2>

<div>
	<p>
		API routes are a way to create serverless functions in SvelteKit. They are similar to
		<Link href="https://nextjs.org/docs/api-routes/introduction">Next.js API routes</Link>
		and
		<Link href="https://vercel.com/docs/serverless-functions/introduction">
			Vercel serverless functions
		</Link>.
	</p>
	<p>
		API routes are created in the <code>src/routes</code>
		directory as
		<code>server.(js/ts)</code>
		files. They work by exporting functions with names corresponding to the HTTP methods they
		handle (GET, POST, PUT, DELETE or PATCH).
	</p>
</div>

<Accordion flush>
	<AccordionItem>
		<span slot="header">GET</span>

		<p>Here's an example of a simple GET route:</p>
		<CodeWrapper
			headerText="example/+server.js"
			code={CODE.getExample1} />

		<p>
			Since returning JSON is a pretty common use case, SvelteKit provides a helper
			function called
			<code>json</code>
			that can be used to return JSON responses. Here's an example:
		</p>

		<CodeWrapper
			headerText="example/+server.js"
			code={CODE.getExample2} />

		<p>And here's the response being fetched in this component:</p>

		{#await fetchResponse()}
			<p>Loading...</p>
		{:then response}
			<pre>{response}</pre>
		{/await}

		<CodeWrapper
			headerText="+page.svelte.ts"
			code={CODE.getExampleFetch} />
	</AccordionItem>
	<AccordionItem>
		<span slot="header">POST & other handlers</span>
		<p>
			We can also add handlers that mutate data, like POST, though the SvelteKit team
			recommends using form actions instead in most cases, since they require less code to
			be written and can work without JavaScript, which makes them more resilient. Here's
			an example of a simple POST route which receives a number and returns it doubled
			(yes, incredibly useful):
		</p>
		<CodeWrapper
			headerText="example/+server.js"
			code={CODE.postExample} />

		<p>
			The same logic also works for other HTTP handlers, such as DELETE, PUT or PATCH.
		</p>
	</AccordionItem>
</Accordion>

<p>
	You can read the full SvelteKit documentation for <code>+server</code>
	files and API routes <Link href="https://kit.svelte.dev/docs/routing#server">here</Link>
</p>

<style>
	p {
		padding: 1rem 0;
	}
</style>
