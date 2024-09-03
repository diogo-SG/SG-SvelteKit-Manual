<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import CodeBlock from '$lib/components/ui/code-block/code-block.svelte';
	import { Code } from 'lucide-svelte';
</script>

<h1>Logic</h1>
<p>
	Unlike React, Svelte doesn't use JSX/TSX to render logic in HTML. Instead, it provides several
	block types that can be used for common operations.
</p>

<h2>If blocks</h2>
<p>
	An if block is used to conditionally render content. It can be used with an else block to render
	different content based on a condition.
</p>
<CodeBlock>
	{`{#if condition}
    <p>Render this content if the condition is true</p>
{:else}
    <p>Render this content if the condition is false</p>
{/if}`}
</CodeBlock>

<h2>Else blocks</h2>

<p>
	An else block is used in conjunction with an if block to render different content based on a
	condition.
</p>

<CodeBlock>
	{`{#if condition}
    <p>Render this content if the condition is true</p>
{:else}
    <p>Render this content if the condition is false</p>
{/if}`}
</CodeBlock>

<p>It's also possible to use else-if:</p>

<CodeBlock>
	{`{#if condition1}
    <p>Render this content if condition1 is true</p>
{:else if condition2}
    <p>Render this content if condition2 is true</p>
{:else}
    <p>Render this content if neither condition1 nor condition2 is true</p>
{/if}`}
</CodeBlock>

<h2>Block rules</h2>
<p>An easy way to remember this syntax is as follows:</p>
<ul>
	<li>A hashtag indicates a block-opening tag. E.G: #if</li>
	<li>A slash indicates a block-closing tag. E.G: /if</li>
	<li>Colons indicate a block continuation tag. E.G: :else</li>
</ul>

<h2>Each blocks</h2>

<p>
	An each block is used to iterate over an array and render content for each item in the array,
	similar to how you'd map over an array in React.
</p>

<CodeBlock>
	{`{#each array as item}
	<p>{item}</p>
{/each}`}
</CodeBlock>

<p>Also like mapping in react, you can get the iteration number as the second param like so:</p>

<CodeBlock>
	{`{#each array as item, i}
	<p>{i}: {item}</p>
{/each}`}
</CodeBlock>

<h2>Keyed each blocks</h2>

<p>
	By default, Svelte uses the index of the array as the key for each item. This can lead to
	performance issues if the array is reordered. To avoid this, you can specify a key for each item
	like so:
</p>

<CodeBlock>
	{`{#each array as item (item.id)}
	<p>{item}</p>
{/each}`}
</CodeBlock>

<h2>Await blocks</h2>

<p>
	An await block is used to wait for a promise to resolve before rendering content. This is useful
	for fetching data from an API or performing other asynchronous operations.
</p>

<CodeBlock>
	{`{#await promise}
	<p>Loading...</p>
{:then data}
	<p>{data}</p>
{:catch error}
	<p>{error}</p>
{/await}`}
</CodeBlock>

<p>
	The first block ("Loading...") is displayed while the promise is resolving, which is a nice and
	convenient way to add placeholders directly in the HTML.
</p>
