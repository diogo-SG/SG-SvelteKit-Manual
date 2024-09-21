<script>
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import Link from '$lib/components/ui/link/link.svelte';
	import { href } from '../../svelte-basics/component-anatomy/constants';
	import { CODE_EXAMPLES } from './constants';
</script>

<h1>Sveltekit hooks</h1>

<p>
	Sveltekit provides several hooks, which are ways to intercept and modify the default
	behaviour of the framework. You can use hooks to add custom behaviour to your
	application, by writing them in the <code>src/hook.server.ts</code>
	file.
</p>

<h2>The handle hook</h2>

<p>
	The
	<code>handle</code>
	hook is the most basic and multi-purpose hook. It receives an
	<code>event</code>
	object and a
	<code>resolve</code>
	function, and returns a <Link
		href="https://developer.mozilla.org/en-US/docs/Web/API/Response">
		response
	</Link> object.
</p>

<p>
	In the resolve function, SvelteKit matches the incoming request URL to a route in our
	app, imports all the relevant code (+page.server.ts files, +page.svelte files, etc),
	loads the data needed by the route, and generates the response. The default handle hook
	is as follows:
</p>

<CodeWrapper
	headerText="src/hooks.server.ts"
	code={CODE_EXAMPLES.handleHook1} />

<p>
	From there, we can start modifying the response in different ways. For example, we could
	modify the resolved HTML with the <code>transformPageChunk</code>
	method:
</p>

<CodeWrapper
	headerText="src/hooks.server.ts"
	code={CODE_EXAMPLES.handleHook2} />

To try this out, paste in this link into your browser:
<code>/advanced-sveltekit/hooks/hotpink</code>

<p>Or you could also create new routes by modifying the response:</p>

<CodeWrapper
	headerText="src/hooks.server.ts"
	code={CODE_EXAMPLES.handleHook3} />

<Link href={'./hooks/hijacked'}>Go to the hijacked page</Link>
