<script>
	import CodeBlock from '$lib/components/ui/code-block/code-block.svelte';

	const sampleCode1 = `<script>
    let count = 0;

    function increment() {
        count += 1;
    }
<\/script>

<button on:click={increment}>This was clicked {count} times </button>`;

	let count = 0;

	function increment() {
		count += 1;
	}
</script>

<h1>Reactivity</h1>
<h2>Assignments</h2>
<p>
	Reactivity in Svelte is achieved by using the <code>let</code> keyword to declare a variable that can
	be updated. This is effectively the same as useState in React, and the DOM will be kept in sync with
	updates to values declared with let.
</p>
<p>
	Svelte also provides event handler directives for html elements and components. For instance, we
	can use the <code>on:click</code> directive to do something when a button is clicked.
</p>
<h4>Example</h4>
<CodeBlock>
	{sampleCode1}
</CodeBlock>
<button on:click={increment}>This was clicked {count} times </button>
<h5>Notes</h5>
<p>
	As a follow up to the previous page - if you inspect this button's attributes, you'll notice that
	Svelte has assigned a unique class to it, since it's styles are declared in this page.
</p>

<h2>Declarations</h2>
<p>
	When we need some parts of a component's state to be derived from other parts, and react to
	changes in the original state, we can use reactive declarations, which look like this:
</p>

<style>
	button {
		background-color: #333;
		color: white;
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 0.25rem;
		cursor: pointer;
		width: 300px;
	}
</style>
