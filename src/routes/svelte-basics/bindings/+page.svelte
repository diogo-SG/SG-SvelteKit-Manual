<script lang="ts">
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { CODE, HEADER } from './constants';
	let age = 0;
	let selectedOptions: number[] = [];
</script>

<h1>Bindings</h1>

<p>
	Bindings in Svelte are used to create a two-way data binding between a parent component
	and a child component. They allow you to pass data from a parent component to a child
	component and update that data in both components. In this section, we'll cover how to
	use bindings in Svelte.
</p>

<h2>Text inputs</h2>

<p>
	To create a binding on a text input element, you can use the <code>bind:value</code>
	directive. This will create a two-way binding between the input element and a variable in
	your component.
</p>
<CodeWrapper
	headerText={HEADER.BINDINGS}
	code={CODE.TEXT_INPUTS} />

<p>
	This means that not only will changes to the value of <code>name</code>
	update the input value, but changes to the input value will update
	<code>name</code>
	.
</p>

<h2>Numeric inputs</h2>

<p>
	For numeric inputs, you can use the <code>bind:value</code>
	directive as well. This will ensure that the value of the input is always a number since
	Svelte takes care of the type conversion for you.
</p>

<CodeWrapper
	headerText={HEADER.BINDINGS}
	code={CODE.NUMERIC_INPUTS} />

<b>Example:</b>
<input
	type="number"
	bind:value={age}
	min="0"
	max="10" />
<input
	type="range"
	bind:value={age}
	min="0"
	max="10" />

<h2>Checkbox inputs</h2>

<p>
	For checkbox inputs, you can use the <code>bind:checked</code>
	directive. This will create a two-way binding between the checkbox input and a variable in
	your component.
</p>

<CodeWrapper
	headerText={HEADER.BINDINGS}
	code={CODE.CHECKBOXES} />

<h2>Select bindings</h2>

<p>
	We can also use <code>bind:value</code>
	with
	<span class="font-bold">select</span>
	elements.
</p>

<CodeWrapper
	headerText={HEADER.BINDINGS}
	code={CODE.SELECT} />

<h2>Select multiple</h2>

<p>
	For <span class="font-bold">select</span>
	elements with the
	<code>multiple</code>
	attribute, the options selected will populate an array rather than selecting a single value.
</p>

<CodeWrapper
	headerText={HEADER.BINDINGS}
	code={CODE.MULTI_SELECT} />

<p>
	Press and hold the <kbd>Ctrl</kbd>
	key or the
	<kbd>command</kbd>
	key on MacOS to select multiple options.
</p>

<select
	multiple
	bind:value={selectedOptions}>
	<option value="1">Option 1</option>
	<option value="2">Option 2</option>
	<option value="3">Option 3</option>
</select>
<p>
	<b>Selected options:</b>
	{selectedOptions.length ? selectedOptions.join(', ') : 'None'}
</p>

<h2>Group inputs</h2>

<p>
	When you have a group of radio or checkbox inputs relating to the same value, you can
	use the <code>bind:group</code>
	directive along with the
	<code>value</code>
	attribute to create a two-way binding between the inputs and a variable in your component.
	Radio inputs in the same group are mutually exclusive and checkbox inputs in the same group
	form an array of selected values.
</p>

<CodeWrapper
	headerText={HEADER.BINDINGS}
	code={CODE.GROUP} />

<p>
	Now, when you select a radio option, the value of <code>radioOption</code>
	will be updated. When you select a checkbox option, the value of
	<code>checkboxOptions</code>
	will be updated.
</p>

<h2>Textarea inputs</h2>

<p>
	The <code>textarea</code>
	element behaves similarly to text inputs in Svelte. So you can use
	<code>bind:value</code>
	.
</p>

<CodeWrapper
	headerText={HEADER.BINDINGS}
	code={CODE.TEXTAREA} />

<p>
	A really cool feature of Svelte is that, since the name of the variable is equal to the
	name of the input property (value), you can use the shorthand syntax:
</p>

<CodeWrapper
	headerText={HEADER.BINDINGS}
	code={CODE.SHORTHAND} />

<p>
	<span class="underline">This trick applies to all bindings, not just textareas.</span>
	<br />
	And that's it! Now you know how to use bindings in Svelte. They are a powerful feature that
	can help you create more interactive components with less code.
</p>
