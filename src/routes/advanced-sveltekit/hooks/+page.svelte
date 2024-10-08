<script>
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import Link from '$lib/components/ui/link/link.svelte';
	import { CODE_EXAMPLES, REQUEST_EVENT_ITEMS } from './constants';
</script>

<h1 class="text-primary-700">SvelteKit hooks</h1>

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
	</Link> object. In the resolve function, SvelteKit matches the incoming request URL to a
	route in our app, imports all the relevant code (+page.server.ts files, +page.svelte files,
	etc), loads the data needed by the route and generates the response.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText="src/hooks.server.ts"
		code={CODE_EXAMPLES.handleHook1} />
</div>

<p>
	From there, we can start modifying the response in different ways. For example, we could
	modify the resolved HTML with the <code>transformPageChunk</code>
	method.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText="src/hooks.server.ts"
		code={CODE_EXAMPLES.handleHook2} />
</div>

<p>
	To try this out, copy and paste the following link into your browser -
	<code>/advanced-sveltekit/hooks/hotpink</code>
</p>

<p>Or you could also create new routes by modifying the response.</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText="src/hooks.server.ts"
		code={CODE_EXAMPLES.handleHook3} />
</div>

<div class="flex justify-center">
	<Link
		isInternal
		href={'./hooks/hijacked'}>
		Hijacked page
	</Link>
</div>

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

<ul>
	<p>Here's a list of the properties and methods the RequestEvent contains:</p>
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

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText="src/hooks.server.ts"
		code={CODE_EXAMPLES.handleEventLocals1} />

	<CodeWrapper
		headerText="src/routes/+page.server.ts"
		code={CODE_EXAMPLES.handleEventLocals2} />
</div>

<h2>handleFetch</h2>

<p>
	The <code>event</code>
	object includes a
	<code>fetch</code>
	method that works like the standard
	<Link href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">
		fetch API
	</Link>, but with added functionality.
</p>

<ul>
	<p>Added functionalities:</p>
	<li>
		It can make credentialed requests on the server, inheriting <code>cookie</code>
		and
		<code>authorization</code>
		headers from the incoming request;
	</li>
	<li>
		Allows relative requests on the server, without needing a full URL with an origin;
	</li>
	<li>
		Internal requests (such as for <code>+server.ts</code>
		routes) directly call the handler function on the server, bypassing the need for an HTTP
		request.
	</li>
</ul>

<p>
	You can modify the behaviour of the <code>fetch</code>
	method with the
	<code>handleFetch</code>
	hook.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText="src/hooks.server.ts"
		code={CODE_EXAMPLES.handleFetch1} />
</div>
<p>
	You could use it to respond to requests for one route with responses from another one.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText="src/hooks.server.ts"
		code={CODE_EXAMPLES.handleFetch2} />
</div>

<p>
	The <code>event.fetch</code>
	can also be called in the browser (which will be covered later). In that scenario you could
	also use
	<code>handleFetch</code>
	if you have requests to a public URL that should be redirected to an internal URL when running
	on the server.
</p>

<h2>handleError</h2>

<p>
	The <code>handleError</code>
	is useful for intercepting unexpected errors and triggering some behaviour, like pinging
	a Slack channel or sending data to an error logging service.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText="src/hooks.server.ts"
		code={CODE_EXAMPLES.handleError1} />
</div>
