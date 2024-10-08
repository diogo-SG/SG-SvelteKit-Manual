<script>
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import Link from '$lib/components/ui/link/link.svelte';
	import Note from '$lib/components/ui/note/note.svelte';
	import { CODE_EXAMPLES } from './constants';
</script>

<h1 class="text-primary-700">Link options</h1>

<p>
	SvelteKit can speed up app navigation by anticipating them. When an <code>{'<a>'}</code>
	element has a
	<code>data-sveltekit-preload-data</code>
	attribute, SvelteKit will begin the navigation as soon as the user hovers over the link (or
	taps it, if on mobile).
</p>

<Note title="Try it">
	<p class="text-center text-sm">
		Try hovering the first link for two seconds before clicking it, and contrast by
		clicking immediately on the second one.
	</p>
	<div class="flex justify-center gap-3">
		<a
			class="internal_link"
			href="./link-options/slow-route1"
			data-sveltekit-preload-data>
			With preloading
		</a>
		<Link
			isInternal
			href="./link-options/slow-route2">
			Without preloading
		</Link>
	</div>
</Note>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText="+page.svelte"
		code={CODE_EXAMPLES.preloading} />
</div>

<Note>
	<p class="text-sm">
		You can put this attribute on individual links, or on any element that contains links.
		In fact, the default project template includes this on the <code>{'<body>'}</code>
		element.
	</p>
</Note>

<p>You can customise this further by specifying values for the attribute.</p>

<ul>
	<p>It's possible to specify the following values:</p>
	<li>
		<code>hover</code>
		- default, falls back to "tap" on mobile;
	</li>
	<li>
		<code>tap</code>
		- only begin preloading on tap;
	</li>
	<li>
		<code>off</code>
		- disable preloading.
	</li>
</ul>

<p>
	Using this attribute can sometimes result in false positives, like loading data in
	anticipation of a navigation that doesn't end up happening. As an alternative, you can
	use <code>data-sveltekit-preload-code</code>
	to preload the JavaScript needeed by a given route without eagerly loading its data.
</p>

<ul>
	<p>This attribute can have the following values:</p>
	<li>
		<code>eager</code>
		- preload everything on the page following a navigation;
	</li>
	<li>
		<code>viewport</code>
		- preload everything as it appears in the viewport;
	</li>
	<li>
		<code>hover</code>
		- default, same as with the first preload attribute above;
	</li>
	<li>
		<code>tap</code>
		- same as above;
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
	.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText="+page.svelte"
		code={CODE_EXAMPLES.preloading2} />
</div>

<h2>Reloading the page</h2>
<p>
	SvelteKit will usually navigate between pages without refreshing the page. But if we
	want to disable this behaviour, we can easily do so by adding <code>
		data-sveltekit-reload
	</code>
	to an individual link, or any element which contains links.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText="+layout.svelte"
		code={CODE_EXAMPLES.reloading} />
</div>

<Note>
	<p class="text-sm">
		You can read more about available link options and their values in the SvelteKit
		documentation for link options <Link href="https://kit.svelte.dev/docs/link-options">
			here
		</Link>.
	</p>
</Note>

<style>
	.internal_link {
		width: fit-content;
		padding: 0.5rem 1rem;
		color: #fff;
		border-radius: 0.5rem;
		background-color: black;
	}
	.internal_link:hover {
		background-color: #fff;
		color: black;
		outline: 2px solid black;
	}
	/* .internal_link {
		width: fit-content;
		padding: 0.5rem 1rem;
		color: #fff;
		border-radius: 0.5rem;
		background-color: #eb4f27;
	}
	.internal_link:hover {
		background-color: #fff;
		color: #eb4f27;
		outline: 2px solid #eb4f27;
	} */
</style>
