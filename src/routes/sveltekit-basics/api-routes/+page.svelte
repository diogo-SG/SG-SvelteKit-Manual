<script>
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { Accordion } from '$lib/components/ui/accordion/index';
	import AccordionItem from '$lib/components/ui/accordion/accordion-item.svelte';
	import AccordionTrigger from '$lib/components/ui/accordion/accordion-trigger.svelte';
	import AccordionContent from '$lib/components/ui/accordion/accordion-content.svelte';
	import { CODE } from './constants';

	function fetchResponse() {
		return fetch('./api-routes/example').then((res) => res.json());
	}
</script>

<h2>API Routes</h2>

<p>
	API routes are a way to create serverless functions in SvelteKit. They are similar to
	<a href="https://nextjs.org/docs/api-routes/introduction">Next.js API routes</a> and
	<a href="https://vercel.com/docs/serverless-functions/introduction">Vercel serverless functions</a
	>.
</p>

<p>
	API routes are created in the <code>src/routes</code> directory as
	<code>server.(js/ts)</code> files. They work by exporting functions with names corresponding to the
	HTTP methods they handle (GET, POST, PUT, DELETE, etc).
</p>

<Accordion>
	<AccordionItem value="GET">
		<AccordionTrigger>GET</AccordionTrigger>
		<AccordionContent>
			<p>Here's an example of a simple GET route:</p>
			<CodeWrapper headerText="example/+server.js" code={CODE.getExample1} />

			<p>
				Since returning JSON is a pretty common use case, SvelteKit provides a helper function
				called
				<code>json</code> that can be used to return JSON responses. Here's an example:
			</p>

			<CodeWrapper headerText="example/+server.js" code={CODE.getExample2} />

			<p>And here's the response being fetched in this component:</p>

			{#await fetchResponse()}
				<p>Loading...</p>
			{:then response}
				<pre>{response}</pre>
			{/await}

			<CodeWrapper headerText="+page.svelte.ts" code={CODE.getExampleFetch} />
		</AccordionContent>
	</AccordionItem>
	<AccordionItem value="POST">
		<AccordionTrigger>POST</AccordionTrigger>
		<AccordionContent>
			<p>
				We can also add handlers that mutate data, like POST, though the Sveltekit team recommends
				using form actions instead in most cases, since they require less code to be written and can
				work without Javascript, which makes them more resilient.
			</p>
		</AccordionContent>
	</AccordionItem>
</Accordion>

<style>
	p {
		padding: 1rem 0;
	}
</style>
