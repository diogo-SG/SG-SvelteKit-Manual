<script>
	import Card from '$lib/components/ui/card/card.svelte';
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import Link from '$lib/components/ui/link/link.svelte';
	import { Code } from 'lucide-svelte';
	import { href } from '../../svelte-basics/component-anatomy/constants';
	import { CODE_EXAMPLES, REQUEST_EVENT_ITEMS } from './constants';
</script>

<h1>SvelteKit hooks</h1>

<p>
	SvelteKit provides several hooks, which are ways to intercept and modify the default
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

<h2>The RequestEvent object</h2>

<p>
	The <code>event</code>
	object passed into
	<code>handle</code>
	is the same object (an instance of a <Link
		href="https://kit.svelte.dev/docs/types#public-types-requestevent">
		RequestEvent
	</Link>) that is passed into API routes in
	<code>+server.ts</code>
	files, form actions in
	<code>+page.server.ts</code>
	files, and
	<code>load</code>
	functions in
	<code>+page.server.ts</code>
	and
	<code>+layout.server.ts</code>
	files.
</p>

<p>Here's a list of the properties and methods the RequestEvent contains:</p>

<ul>
	{#each REQUEST_EVENT_ITEMS as { title, description, link }}
		<li>
			<code>{title}</code>
			- {#if link}<Link href={link}>{description}</Link>
			{:else}{description}
			{/if}
		</li>
	{/each}
</ul>

<p>
	As an example, you could add some data to <code>event.locals</code>
	so it could be used in all
	<code>load</code>
	functions.
</p>

<CodeWrapper
	headerText="src/hooks.server.ts"
	code={CODE_EXAMPLES.handleEventLocals1} />

<CodeWrapper
	headerText="src/routes/+page.server.ts"
	code={CODE_EXAMPLES.handleEventLocals2} />

<h2>handleFetch</h2>

<p>
	The <code>event</code>
	object has a
	<code>fetch</code>
	method which behaves like the standard
	<Link href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">fetch api</Link>
	but with some additional features.
</p>
<ul>
	<li>
		It can be used to make credentialed requests on the server, since it inherits the <code>
			cookie
		</code>
		and
		<code>authorization</code>
		headers from the incoming request.
	</li>
	<li>
		It can make relative requests on the server (usually, fetch requires a URL with an
		origin when used in a server context).
	</li>
	<li>
		Internal requests (like for +server.ts routes) go directly to the handler function
		when running on the server, skipping having to do a HTTP call.
	</li>
</ul>

<p>
	You can modify the behaviour of the <code>fetch</code>
	method with the
	<code>handleFetch</code>
	hook. By default, it looks like this:
</p>

<CodeWrapper
	headerText="src/hooks.server.ts"
	code={CODE_EXAMPLES.handleFetch1} />

<p>
	You could use it to respond to requests for one route with responses from another one,
	for example:
</p>

<CodeWrapper
	headerText="src/hooks.server.ts"
	code={CODE_EXAMPLES.handleFetch2} />

<p>
	<code>event.fetch</code>
	can also be called in the browser (which will be covered later), and in that scenario you
	could also use
	<code>handleFetch</code>
	to redirect requests to a public URL to an internal one when running on the server.
</p>

<h2>handleError</h2>

<p>
	The <code>handleError</code>
	is useful for intercepting unexpected errors and triggering some behaviour, like pinging
	a Slack channel or sending data to an error logging service. Here's the default code for
	that hook:
</p>

<CodeWrapper
	headerText="src/hooks.server.ts"
	code={CODE_EXAMPLES.handleError1} />
