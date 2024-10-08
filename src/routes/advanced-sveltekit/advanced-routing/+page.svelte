<script>
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import Link from '$lib/components/ui/link/link.svelte';
	import Note from '$lib/components/ui/note/note.svelte';
	import { CODE_EXAMPLES } from './constants';
</script>

<h1 class="text-primary-700">Advanced routing</h1>

<h2>Optional route parameters</h2>
<p>
	We can make route parameters optional in SvelteKit. An example of when this is useful is
	when we use the pathname to determine the locale (e.g. /pt, /en, etc), but we also want
	to have a default locale. To do so, we use double square brackets. For example, <code>
		src/routes/[[lang]]/+page.svelte
	</code>
	will match any locale, like a route parameter normally would.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText="advanced-routing/optional-params/[[lang]]/+page.server.ts"
		code={CODE_EXAMPLES.optionalRouteParams} />

	<Note title="Try it">
		<div class="flex items-center justify-center gap-3">
			<Link
				isInternal
				href="./advanced-routing/optional-params/">
				Default 🏳️
			</Link>
			<Link
				isInternal
				href="./advanced-routing/optional-params/en/">
				English 🇬🇧
			</Link>
			<Link
				isInternal
				href="./advanced-routing/optional-params/pt/">
				Portuguese 🇵🇹
			</Link>
			<Link
				isInternal
				href="./advanced-routing/optional-params/hi/">
				Hindi 🇮🇳
			</Link>
		</div>
	</Note>
</div>

<h2>Rest parameters</h2>
<p>
	A <code>[...rest]</code>
	parameter allows us to match an unknown number of path segments. For example,
	<code>src/routes/[...path]</code>
	will match any route in the application. Since other, more specific routes are checked first,
	these rest parameters are especially useful for "catch-all" pages inside a particular route
	group, eg: an error message specifically for a
	<code>/blog-posts</code>
	route group when a specific post can't be found.
</p>
<p>
	Additionally, rest parameters do not need to go at the end. A route like
	<code>/items/[...path]/edit</code>
	or
	<code>/items/[...path].json</code>
	is totally valid.
</p>

<h2>Param matchers</h2>
<p>
	To prevent the router from matching on invalid inputs, we can specify a matcher. To
	achieve this, you can create a route using the pattern <code>[param=matcher]</code>
	, then add a file named
	<code>matcher.ts</code>
	in the
	<code>src/params</code>
	directory.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText="src/params/[color=hex].ts"
		code={CODE_EXAMPLES.paramMatchers} />
</div>

<p>
	Now whenever someone navigates to these routes, SvelteKit will first check if the color
	is a valid <code>hex</code>
	value. If it isn't, it'll try to match other hardcoded routes, and if none can be found it'll
	return a 404. Also useful to keep in mind is that matchers run on both the server and in
	the browser. Click on the links below to see the different results.
</p>

<Note title="Try it">
	<div class="flex items-center justify-center gap-3">
		<Link
			isInternal
			href="./advanced-routing/colors/ff0000">
			Red
		</Link>
		<Link
			isInternal
			href="./advanced-routing/colors/123456">
			Deep Sea Blue
		</Link>
		<Link
			isInternal
			href="./advanced-routing/colors/abcdef">
			Pale Blue
		</Link>
		<Link
			isInternal
			href="./advanced-routing/colors/ghijkl">
			???
		</Link>
	</div>
</Note>

<h2>Route groups</h2>
<p>
	Route groups allow us to use layouts without affecting the route. For example, we might
	want some routes in the same hierarchical level to be protected by authentication, while
	others are completely open. Route groups are defined by a directory in parentheses.
</p>

<p>
	For example, we can set up a <code>(restricted)/account-settings</code>
	page that will only be accessible when the user is logged in. Then we can control access
	to those restricted pages by using a layout.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText="src/routes/(restricted)/account-settings/+page.svelte"
		code={CODE_EXAMPLES.routeGroupsLayout} />

	<Note title="Try it">
		<div class="flex justify-center">
			<Link
				isInternal
				href="./advanced-routing/account-settings">
				Account settings
			</Link>
		</div>
	</Note>
</div>

<h2>Breaking out of layouts</h2>
<p>
	Usually a page inherits all the layouts above it in the hierarchy, so a <code>
		src/routes/a/b/+page.svelte
	</code>
	page would inherit three layouts: the root one, plus the ones for
	<code>/a/</code>
	and
	<code>/b/</code>
	. If we want to break out of the current layout hierarchy, we can do that by adding the
	<code>@</code>
	sign in the page's file name, followed by the name of the parent route segment to reset to.
</p>

<ul>
	<p>For example:</p>
	<li>
		<code>+page@a.svelte</code>
		- this makes the route use the layouts in the root and in
		<code>/a/</code>
		directory;
	</li>
	<li>
		<code>+page@.svelte</code>
		- this makes the route use only the root layout.
	</li>
</ul>

<Note>
	<p class="text-sm">
		Keep in mind that the root layout applies to every page in our app and it cannot be
		broken out of.
	</p>
</Note>
