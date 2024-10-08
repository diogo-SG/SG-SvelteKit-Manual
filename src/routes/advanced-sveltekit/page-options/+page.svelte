<script>
	import Link from '$lib/components/ui/link/link.svelte';
	import { PAGE_OPTION_ITEMS } from './constants';
</script>

<h1 class="text-primary-700">Page options</h1>
<p>
	Besides the
	<code>load</code>
	function that we can export in
	<code>+page.ts</code>
	,
	<code>+page.server.ts</code>
	,
	<code>+layout.ts</code>
	and
	<code>+layout.server.ts</code>
	files, we can also export several page options.
</p>

<ul>
	<p>Here's a list of the page options:</p>
	{#each PAGE_OPTION_ITEMS as { title, description }}
		<li>
			<code>{title}</code>
			- {description}
		</li>
	{/each}
</ul>

<p>
	Page options can be applied to individual pages or whole routes, depending on if they're
	exported from <code>page.ts</code>
	or
	<code>page.server.ts</code>
	vs
	<code>layout.ts</code>
	or
	<code>layout.server.ts</code>
	. This allows us to clearly define which pages should be prerendered or rendered on the server,
	on a case by case basis.
</p>

<h2>SSR</h2>
<p>
	SvelteKit does server-side rendering by default. However, you can disable it by adding: <code>
		export const ssr = false;
	</code>
	in a
	<code>page/layout.server.ts</code>
	file.
</p>

<h2>CSR</h2>
<p>
	CSR or client-side rendering is what makes our page interactive, and allows SvelteKit to
	update the page on navigation without a full page reload. We can also disable this
	altogether by adding <code>export const csr = false;</code>
	to a
	<code>+page/layout.server.ts</code>
	file. This ensures that no client-side JavaScript is sent to the browser, which can be helpful
	for testing whether the application remains functional for users who, for any reason, cannot
	use JavaScript.
</p>

<h2>Prerendering</h2>
<p>
	Prerendering is the process of generating static HTML files for our pages at build time,
	rather than dynamically for each request. We can enable this by adding <code>
		export const prerender = true;
	</code>
	to a
	<code>+page/layout.server.ts</code>
	file. This improves SEO, performance and accessibility by allowing us to serve pages faster
	and support users with JavaScript disabled. However, the tradeoff is a longer build process
	and prerendered pages can only be updated by building and deploying a new version of the
	app.
</p>

<p>
	Keep in mind that for pages to be prerenderable, any two users visiting them directly
	must get the same content from the server and the page must not contain any form
	actions.
</p>

<p>
	You can prerender page with dynamic route parameters, but only as long as they are
	specified in the <Link href="https://kit.svelte.dev/docs/configuration#prerender">
		prerender.entries
	</Link> configuration, or they can be reached by following links in pages that are in
	<code>prerender.entries</code>
	.
</p>

<h2>Trailing slashes</h2>
<p>
	By default, SvelteKit will skip trailing slashes, aka, a request for <code>
		/hello/
	</code>
	will be redirected to
	<code>/hello</code>
	. But you can also ensure that a trailing slash is always present by specifying the
	<code>trailingSlash</code>
	option with
	<code>export const trailingSlash = 'always';</code>
</p>
<p>
	Or you could tell Svelte to ignore trailing slashes by using: <code>
		export const trailingSlash = 'ignore';
	</code>
	. The choice will also affect prerendering. A url like
	<code>/hello/</code>
	will be saved as
	<code>hello/index.html</code>
	, while
	<code>/hi</code>
	will be saved as just
	<code>hi.html</code>
	.
</p>
