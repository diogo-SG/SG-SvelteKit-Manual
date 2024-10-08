<script>
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import Note from '$lib/components/ui/note/note.svelte';
	import { REACTIVE_CODE } from './constants';

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
	Reactivity in Svelte is achieved by using the <code>let</code>
	keyword to declare a variable that can be updated. This is effectively the same as useState
	in React, and the DOM will be kept in sync with updates to values declared with let.
</p>
<p>
	Svelte also provides event handler directives for html elements and components. For
	instance, we can use the <code>on:click</code>
	directive to do something when a button is clicked.
</p>
<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		showHeader={false}
		code={REACTIVE_CODE.EXAMPLE} />

	<div class="flex justify-center">
		<button
			class="rounded-lg border-none bg-[#333] px-[1rem] py-[0.5rem] font-normal text-[#fff]"
			on:click={increment}>
			Clicks: {count}
			{count === 1 ? 'time' : 'times'}
		</button>
	</div>
</div>

<Note>
	<p class="text-sm">
		As a follow up to the previous page - if you inspect this button's attributes, you'll
		notice that Svelte has assigned a unique class to it, since it's styles are declared
		in this page.
	</p>
</Note>

<h2>Declarations</h2>

<p>
	When we need some parts of a component's state to be derived from other parts, and react
	to changes in the original state, we can use reactive declarations.
</p>
<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		showHeader={false}
		code={REACTIVE_CODE.DECLARATIONS} />

	<div class="flex items-center justify-center gap-3">
		<button
			class="rounded-lg border-none bg-[#333] px-[1rem] py-[0.5rem] font-normal text-[#fff]"
			on:click={increment}>
			Increment
		</button>
		<div
			class="rounded-lg bg-[#fff] px-[1rem] py-[0.5rem] font-normal text-[##333] outline outline-[#333]">
			<p>Count: {count}</p>
		</div>
		<div
			class="rounded-lg bg-[#fff] px-[1rem] py-[0.5rem] font-normal text-[##333] outline outline-[#333]">
			<p>Doubled: {doubled}</p>
		</div>
	</div>
</div>

<h2>Reactive Statements</h2>
<p>
	Reactive statements are similar to reactive declarations, but they are used when we need
	to run some code when a value changes.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		showHeader={false}
		code={REACTIVE_CODE.STATEMENTS} />
</div>
<p>
	The example above has been implemented on this page, so open the console and click the
	button to see it in action.
</p>

<h2>Updating arrays and objects</h2>

<p>
	When updating arrays and objects, we need to be careful to ensure that the reference to
	the array or object is updated, so that Svelte can detect the change and update the DOM.
	This is because Svelte uses reference equality to determine if a value has changed.
</p>
<p>
	In other words, when working with array methods like push or splice, we need to be aware
	that they won't update state. Instead, we should use the spread operator to create a new
	array or object.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		showHeader={false}
		code={REACTIVE_CODE.UPDATING_ARRAYS} />
</div>

<div class="flex flex-col gap-2">
	<p>Or we could simply do a redundant assignment, like so:</p>
	<CodeWrapper
		showHeader={false}
		code={REACTIVE_CODE.UPDATING_ARRAYS_1} />
</div>
