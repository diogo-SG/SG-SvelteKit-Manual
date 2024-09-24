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
	.
</p>

<!-- Example here -->

<p>
	You can read more about the differences between each type of <code>load</code>
	function in the official SvelteKit documentation <Link
		href="https://kit.svelte.dev/docs/load#universal-vs-server">
		here
	</Link>.
</p>

<h2>Using both load functions</h2>
<p>
	In some cases we might need to use a server load function and a universal load function
	together - for example, when returning data from the server, but also a value that can't
	be serialized.
</p>
