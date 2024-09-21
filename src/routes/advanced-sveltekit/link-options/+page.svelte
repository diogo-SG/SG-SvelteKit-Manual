<script>
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { CODE_EXAMPLES } from './constants';
</script>

<h1>Link options</h1>

<p>
	SvelteKit can speed up app navigation by anticipating them. When an <code>{'<a>'}</code>
	element has a
	<code>data-sveltekit-preload-data</code>
	attribute, SvelteKit will begin the navigation as soon as the user hovers over the link (or
	taps it, if on mobile).
</p>

<p>
	For instance, try hovering over the first link for two seconds before clicking it, and
	contrast with clicking the second one:
</p>

<a
	href="./link-options/slow-route1"
	data-sveltekit-preload-data>
	Slow route with preloading
</a>
<a href="./link-options/slow-route2">Slow route without preloading</a>

<CodeWrapper
	headerText="+page.svelte"
	code={CODE_EXAMPLES.preloading} />

<p>
	You can put this attribute on individual links, or on any element that contains links.
	In fact, the default project template includes this on the <code>{'<body>'}</code>
	element.
</p>
<p>
	You can customise this further by specifying one of the following values for the
	attribute:
</p>

<ul>
	<li>
		<code>hover</code>
		- default, falls back to "tap" on mobile.
	</li>
	<li>
		<code>tap</code>
		- only begin preloading on tap
	</li>
	<li>
		<code>off</code>
		- disable preloading
	</li>
</ul>

<p>
	Using this attribute can sometimes result in false positives, like loading data in
	anticipation of a navigation that doesn't end up happening. As an alternative, you can
	use <code>data-sveltekit-preload-code</code>
	to preload the JavaScript needeed by a given route without eagerly loading its data. This
	attribute can have the following values:
</p>

<ul>
	<li>
		<code>eager</code>
		- preload everything on the page following a navigation.
	</li>
	<li>
		<code>viewport</code>
		- preload everything as it appears in the viewport
	</li>
	<li>
		<code>hover</code>
		- default, same as with the first preload attribute above
	</li>
	<li>
		<code>tap</code>
		- same as above.
	</li>
	<li>
		<code>off</code>
		- same as above.
	</li>
</ul>

<p>
	Finally, you can initiate preloading programmatically with <code>preloadCode</code>
	and
	<code>preloadData</code>
	, imported from
	<code>$app/navigation</code>
	:
</p>

<CodeWrapper
	headerText="+page.svelte"
	code={CODE_EXAMPLES.preloading2} />

<h2>Reloading the page</h2>
<p>
	SvelteKit will usually navigate between pages without refreshing the page. But if we
	want to disable this behaviour, we can easily do so by adding <code>
		data-sveltekit-reload
	</code>
	to an individual link, or any element which contains links, such as in the example below:
</p>

<CodeWrapper
	headerText="+layout.svelte"
	code={CODE_EXAMPLES.reloading} />

<h2>More about link options</h2>
<p>
	You can read more about available link options and their values in the SvelteKit
	documentation for link options <Link href="https://kit.svelte.dev/docs/link-options">
		here
	</Link>.
</p>
