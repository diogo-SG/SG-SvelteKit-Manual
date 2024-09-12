<script lang="ts">
	import CodeBlock from '$lib/components/ui/code-block/code-block.svelte';
</script>

<h1>Bindings</h1>

<p>
	Bindings in Svelte are used to create a two-way data binding between a parent component and a
	child component. They allow you to pass data from a parent component to a child component and
	update that data in both components. In this section, we'll cover how to use bindings in Svelte.
</p>

<h2>Text inputs</h2>

<p>
	To create a binding on a text input element, you can use the <code>bind:value</code> directive. This
	will create a two-way binding between the input element and a variable in your component.
</p>

<CodeBlock>
	{`<script>
				let name;
			<\/script>

				<input bind:value={name} />
	`}
</CodeBlock>

<p>
	This means that not only will changes to the value of <code>name</code> update the input value,
	but changes to the input value will update <code>name</code>.
</p>

<h2>Numeric inputs</h2>

<p>
	For numeric inputs, you can use the <code>bind:value</code> directive as well. This will ensure that
	the value of the input is always a number since Svelte takes care of the type conversion for you.
</p>

<CodeBlock>
	{`<script>
				let age;
			<\/script>

				<input type="number" bind:value={age} min="0" max="10" />
				<input type="range" bind:value={age} min="0" max="10" />
	`}
</CodeBlock>
