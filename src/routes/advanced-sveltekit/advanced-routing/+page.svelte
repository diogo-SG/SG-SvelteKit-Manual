<script>
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import Link from '$lib/components/ui/link/link.svelte';
	import { href } from '../../svelte-basics/component-anatomy/constants';
	import { CODE_EXAMPLES } from './constants';
</script>

<h1>Advanced routing</h1>

<h2>Optional route parameters</h2>
<p>
	We can make route parameters optional in SvelteKit. An example of when this is useful is
	when we use the pathname to determine the locale (e.g. /pt, /en, etc), but we also want
	to have a default locale. To do so, we use double brackets. For example, <code>
		src/routes/[[lang]]/+page.svelte
	</code>
	will match any locale, like a route parameter normally would.
</p>

<CodeWrapper
	headerText="advanced-routing/optional-params/[[lang]]/+page.server.ts"
	code={CODE_EXAMPLES.optionalRouteParams} />

<Link href="./advanced-routing/optional-params/">Go to /[[lang]] page</Link>
<Link href="./advanced-routing/optional-params/en/">Go to /en page</Link>
<Link href="./advanced-routing/optional-params/pt/">Go to /pt page</Link>
<Link href="./advanced-routing/optional-params/hi/">Go to /hi page</Link>

<h2>Rest parameters</h2>
<p>
	A [...rest] parameter allows us to match an unknown number of path segments. For
	example, <code>src/routes/[...path]</code>
	will match any route in the application. Since other, more specific routes are checked first,
	these rest parameters are especially useful for "catch-all" pages inside a particular route
	group, eg: an error message specifically for a
	<code>/blog-posts</code>
	route group when a specific post can't be found.
</p>
<p>
	Additionally, rest parameters do not need to go at the end — a route like
	/items/[...path]/edit or /items/[...path].json is totally valid.
</p>
