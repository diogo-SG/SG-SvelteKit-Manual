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
	$: doubled = count * 2;
	$: {
		console.log('Count is now', count);
	}

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

<CodeBlock>
	{`
	<script>
	let count = 0;
	$: doubled = count * 2;
<\/script>`}
</CodeBlock>

<h4>Example</h4>
<button on:click={increment}>Increment count </button>
<p>Doubled: {doubled}</p>

<h2>Reactive Statements</h2>
<p>
	Reactive statements are similar to reactive declarations, but they are used when we need to run
	some code when a value changes. They look like this:
</p>

<CodeBlock>
	{`
	<script>
	let count = 0;
	$: {
		console.log('Count is now', count);
	}
<\/script>`}
</CodeBlock>

<p>
	The example above has been implemented on this page, so open the console and click the button to
	see it in action.
</p>

<h2>Updating arrays and objects</h2>

<p>
	When updating arrays and objects, we need to be careful to ensure that the reference to the array
	or object is updated, so that Svelte can detect the change and update the DOM. This is because
	Svelte uses reference equality to determine if a value has changed.
</p>
<p>
	In other words, when working with array methods like push or splice, we need to be aware that they
	won't update state.
</p>
<p>Instead, we should use the spread operator to create a new array or object, like so:</p>

<CodeBlock>
	{`
	<script>
	let items = ['a', 'b', 'c'];
	function addItem() {
		items = [...items, 'd'];
	}
<\/script>`}
</CodeBlock>

<p>Or we could simply do a redundant assignment, like so:</p>

<CodeBlock>
	{`
	<script>
	let items = ['a', 'b', 'c'];
	function addItem() {
		items.push('d');
		items = items;
	}
<\/script>`}
</CodeBlock>

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
