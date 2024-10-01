<script lang="ts">
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { CODE, HEADER } from './constants';
</script>

<h1>Logic</h1>
<p>
	Unlike React, Svelte doesn't use JSX/TSX to render logic in HTML. Instead, it provides
	several block types that can be used for common operations.
</p>

<h2>If and else blocks</h2>
<p>
	An if block is used to conditionally render content. It can be used with an else block
	to render different content based on a condition.
</p>

<CodeWrapper
	headerText={HEADER.LOGIC}
	code={CODE.IF_ELSE} />

<h2>Else if blocks</h2>

<p>It's also possible to use else-if:</p>

<CodeWrapper
	headerText={HEADER.LOGIC}
	code={CODE.ELSE_IF} />

<h2>Block rules</h2>
<p>An easy way to remember this syntax is as follows:</p>
<ul>
	<li>
		A hashtag indicates a block-opening tag. E.G: <code>#if</code>
	</li>
	<li>
		A slash indicates a block-closing tag. E.G: <code>/if</code>
	</li>
	<li>
		Colons indicate a block continuation tag. E.G: <code>:else</code>
	</li>
</ul>

<h2>Each blocks</h2>

<p>
	An each block is used to iterate over an array and render content for each item in the
	array, similar to how you'd map over an array in React.
</p>

<CodeWrapper
	headerText={HEADER.LOGIC}
	code={CODE.EACH} />

<p>
	Also like mapping in react, you can get the iteration number as the second param like
	so:
</p>

<CodeWrapper
	headerText={HEADER.LOGIC}
	code={CODE.KEYED_EACH} />

<p>You could even immediately destructure the object in the each block like so:</p>

<CodeWrapper
	headerText={HEADER.LOGIC}
	code={CODE.EACH_DESTRUCTURING} />

<h2>Keyed each blocks</h2>

<p>
	By default, Svelte uses the index of the array as the key for each item. This can lead
	to performance issues if the array is reordered. To avoid this, you can specify a key
	for each item like so:
</p>

<CodeWrapper
	headerText={HEADER.LOGIC}
	code={CODE.KEYED_EACH_2} />

<h2>Await blocks</h2>

<p>
	An await block is used to wait for a promise to resolve before rendering content. This
	is useful for fetching data from an API or performing other asynchronous operations.
</p>

<CodeWrapper
	headerText={HEADER.LOGIC}
	code={CODE.AWAIT} />

<p>
	The first block ("Loading...") is displayed while the promise is resolving, which is a
	nice and convenient way to add placeholders directly in the HTML.
</p>
