<script lang="ts">
	import CodeBlock from '$lib/components/ui/code-block/code-block.svelte';
	const href = '/svelte-basics/stores';
</script>

<h1>Component lifecycle</h1>

<p>
	Similar to React, every component has a lifecycle that starts when it is created, and ends when it
	is destroyed. There are a handful of functions that allow you to run code at key moments during
	that lifecycle. The one you'll use most frequently is <code>onMount</code>.
</p>

<h2>onMount</h2>

<p>
	<code>onMount</code> is a function that runs after the component is first rendered to the DOM. It is
	a good place to run code that interacts with the DOM, such as setting up event listeners or manipulating
	the DOM directly. You can also pass a cleanup function so that it runs when the component is removed
	from the DOM.
</p>

<CodeBlock>
	{`<script>
				import { onMount } from 'svelte';

				onMount(() => {
					console.log('The component has been rendered to the DOM');

					// Return a cleanup function
					return () => {
						console.log('The component has been removed from the DOM');
						};
					});
			<\/script>

`}
</CodeBlock>

<h2>beforeUpdate and afterUpdate</h2>

<p>
	The <code>beforeUpdate</code> function runs
	<span class="underline">before the component is updated</span>. While in the other hand,
	<code>afterUpdate</code> runs <span class="underline">after the component is updated</span>.
	Together, they're useful for doing things imperatively that are difficult to achieve in a purely
	state-driven way.
</p>

<CodeBlock>
	{`<script>
				import { beforeUpdate, afterUpdate } from 'svelte';

				beforeUpdate(() => {
					console.log('The component is about to be updated');
					});

				afterUpdate(() => {
					console.log('The component has been updated');
					});
			<\/script>

`}
</CodeBlock>

<p>
	Bare in mind that <code>beforeUpdate</code> will first run before the component has mounted, so you'll
	need to check if the component is mounted before running any code that interacts with the DOM.
</p>

<h2>tick</h2>

<p>
	<code>tick</code> is a function that returns a promise that resolves as soon as any pending state changes
	have been applied to the DOM. You can use it to wait for the DOM to update before running code that
	depends on the updated DOM. When you update component state in Svelte, it doesn't update the DOM immediately.
	Instead, it waits until the next microtask to see if there are any other changes that need to be applied,
	including in other components. Doing so avoids unnecessary work and allows the browser to batch things
	more effectively.
</p>

<CodeBlock>
	{`<script>
				import { tick } from 'svelte';

				let count = 0;

				const handleClick = async () => {
					count ++;
					await tick();
					console.log('The DOM has been updated');
					};
			<\/script>

`}
</CodeBlock>

<p>
	<code>tick</code> is useful when you need to interact with the DOM after updating component state,
	such as manipulating the DOM directly or focusing an input element.
</p>

<p>
	Now that we covered component lifecycles in Svelte, let's move on to the next <a {href}>section</a
	>.
</p>
