<script lang="ts">
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { CODE } from './constants';
</script>

<h1>Logic</h1>
<p>
	Unlike React, Svelte doesn't use JSX/TSX to render logic in HTML. Instead, it provides
	several block types that can be used for common operations.
</p>

<h2>Conditional blocks</h2>
<p>
	An <code>if</code>
	block is used to conditionally render content. It can be used with an
	<code>else</code>
	block to render different content based on a condition, or you can use
	<code>else if</code>
	blocks to provide additional conditions.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		showHeader={false}
		code={CODE.ELSE_IF} />
</div>

<h2>Block rules</h2>
<ul>
	<p>An easy way to remember this syntax is as follows:</p>
	<li>
		<code>#if</code>
		- A hashtag indicates a block-opening tag;
	</li>
	<li>
		<code>/if</code>
		- A slash indicates a block-closing tag;
	</li>
	<li>
		<code>:else</code>
		- Colons indicate a block continuation tag.
	</li>
</ul>

<h2>Each blocks</h2>

<p>
	An each block is used to iterate over an array and render content for each item in the
	array, similar to how you'd map over an array in React.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		showHeader={false}
		code={CODE.EACH} />
</div>

<div class="flex flex-col gap-2">
	<p>
		Also like mapping in react, you can get the iteration number as the second param like
		so:
	</p>
	<CodeWrapper
		showHeader={false}
		code={CODE.KEYED_EACH} />
</div>

<div class="flex flex-col gap-2">
	<p>You could even immediately destructure the object in the each block:</p>
	<CodeWrapper
		showHeader={false}
		code={CODE.EACH_DESTRUCTURING} />
</div>
<h2>Keyed each blocks</h2>

<p>
	By default, Svelte uses the index of the array as the key for each item. This can lead
	to performance issues if the array is reordered. To avoid this, you can specify a key
	for each item.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		showHeader={false}
		code={CODE.KEYED_EACH_2} />
</div>
<h2>Await blocks</h2>

<p>
	An await block is used to wait for a promise to resolve before rendering content. This
	is useful for fetching data from an API or performing other asynchronous operations.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		showHeader={false}
		code={CODE.AWAIT} />
</div>

<div class="flex flex-col gap-2 rounded-lg border-2 border-primary-600 px-4 py-4 text-sm">
	<h5 class="text-sm text-primary-600">Note</h5>
	<p class="text-sm">
		The first block - <em>"Loading..."</em>
		- is displayed while the promise is resolving, which is a nice and convenient way to add
		placeholders directly in the HTML.
	</p>
</div>
