<script lang="ts">
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { Checkbox, Input, Label } from 'flowbite-svelte';
	import { CODE, MEDIA_BINDS_LIST } from './constants';
	const headerText = 'App.svelte';
	const counterHeader = 'Counter.svelte';

	let todos = [
		{ done: true, text: 'Learn Svelte' },
		{ done: false, text: 'Do the macarena' },
		{ done: false, text: 'Take Jyo out for some spicy ramen' }
	];

	$: console.log('todos', todos);
</script>

<h1>Advanced Bindings</h1>

<h2>Contenteditable bindings</h2>

<p>
	Elements with a <code>contenteditable</code>
	attribute support
	<code>textContent</code>
	and
	<code>innerHTML</code>
	bindings.
</p>
<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		showHeader={false}
		code={CODE.CONTENTEDITABLE} />
</div>

<h2>Each block bindings</h2>

<p>
	You can also bind properties inside an <code>each</code>
	block.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		showHeader={false}
		code={CODE.EACH_BLOCK} />
</div>

<div class="flex flex-wrap justify-center gap-4">
	{#each todos as todo}
		<div class="flex w-1/4 flex-col gap-5 rounded-sm border-2 border-primary-700 p-5">
			<Checkbox
				class="mr-auto"
				bind:checked={todo.done}>
				Done?
			</Checkbox>
			<div class="flex flex-col">
				<Label for="todo">Task:</Label>
				<Input
					id="todo"
					bind:value={todo.text} />
			</div>
		</div>
	{/each}
</div>
<p>
	Check out the console.logs to see the values of "todos" being updated as you edit them!
</p>
<h2>Media elements</h2>

<p>
	In Svelte it's possible to bind properties to <code>audio</code>
	and
	<code>video</code>
	elements, which improves drastically the way we create a custom media player (audio or video).
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		showHeader={false}
		code={CODE.MEDIA} />
</div>

<ul>
	<p>
		Here's the complete set of available bindings for <code class="font-normal">
			video
		</code>
		and
		<code class="font-normal">audio</code>
		elements:
	</p>
	{#each MEDIA_BINDS_LIST as { attribute, description, readOnly, videoOnly }}
		<li>
			<code>{attribute}</code>
			{#if readOnly}
				<em>(readonly)</em>
			{/if}
			{#if videoOnly}
				<em>(video only)</em>
			{/if}
			- {description}
		</li>
	{/each}
</ul>

<h2>Dimensions</h2>

<p>
	You can bind the <code>clientWidth</code>
	,
	<code>clientHeight</code>
	,
	<code>offsetWidth</code>
	and
	<code>offsetHeight</code>
	properties of every
	<span class="underline">block-level</span>
	element to a variable. These bindings are readonly, so changing the
	<code>clientWidth</code>
	or
	<code>clientHeight</code>
	won't have any affect the element itself.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		showHeader={false}
		code={CODE.DIMENSIONS} />
</div>

<h2>This</h2>

<p>
	You can bind the readonly
	<code>this</code>
	to get a reference to a DOM node.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		showHeader={false}
		code={CODE.THIS} />
</div>

<p>
	It's also possible to <code>bind:this</code>
	to component instances.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		{headerText}
		code={CODE.THIS_COMPONENT_PARENT} />

	<CodeWrapper
		headerText={counterHeader}
		code={CODE.THIS_COMPONENT_CHILD} />
</div>

<h2>Component bindings</h2>

<p>
	You can bind to component props using the same syntax as for elements. For example, you
	can bind
	<code>value</code>
	to a component prop called
	<code>count</code>
	in case you want to create a counter component.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		{headerText}
		code={CODE.COMPONENT_PARENT} />

	<CodeWrapper
		headerText={counterHeader}
		code={CODE.COMPONENT_CHILD} />
</div>

<div class="flex flex-col gap-2 rounded-lg border-2 border-primary-600 px-4 py-4 text-sm">
	<h5 class="text-sm text-primary-600">Note</h5>
	<p class="text-sm">
		While Svelte props are reactive without binding, that reactivity only flows downward
		into the component by default. Using <code>bind:property</code>
		allows changes to the property from within the component to flow back up out of the component.
		Because it can be challenging to track where a property is being modified, it's advisable
		to use
		<code>bind:property</code>
		with caution.
	</p>
</div>
