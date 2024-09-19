<script lang="ts">
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { Code } from 'lucide-svelte';
	import { CODE, MEDIA_BINDS_LIST } from './constants';
	const headerText = 'App.svelte';
	const counterHeader = 'Counter.svelte';
</script>

<h1>Advanced Bindings</h1>

<h2>Contenteditable bindings</h2>

<p>
	Elements with a <code>contenteditable</code>
	attribute support
	<code>textContent</code>
	and
	<code>innerHTML</code>
	bindings:
</p>

<CodeWrapper
	{headerText}
	code={CODE.CONTENTEDITABLE} />

<h2>Each block bindings</h2>

<p>
	You can also bind properties inside an <code>each</code>
	block.
</p>

<CodeWrapper
	{headerText}
	code={CODE.EACH_BLOCK} />

<h2>Media elements</h2>

<p>
	In Svelte it's possible to bind properties to <code>audio</code>
	and
	<code>video</code>
	elements, which improves drastically the way we create a custom media player (audio or video).
</p>

<CodeWrapper
	{headerText}
	code={CODE.MEDIA} />

<ul>
	<p class="font-bold">
		Here's the complete set of available bindings for <code class="font-normal">
			video
		</code>
		and
		<code class="font-normal">audio</code>
		elements:
	</p>
	{#each MEDIA_BINDS_LIST as { attribute, description, readOnly, videoOnly }}
		<li>
			-
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

<CodeWrapper
	{headerText}
	code={CODE.DIMENSIONS} />

<h2>This</h2>

<p>
	You can bind the readonly
	<code>this</code>
	to get a reference to a DOM node.
</p>

<CodeWrapper
	{headerText}
	code={CODE.THIS} />

<p>
	It's also possible to <code>bind:this</code>
	to component instances.
</p>

<CodeWrapper
	{headerText}
	code={CODE.THIS_COMPONENT_PARENT} />

<CodeWrapper
	headerText={counterHeader}
	code={CODE.THIS_COMPONENT_CHILD} />

<h2>Component bindings</h2>

<p>
	You can bind to component props using the same syntax as for elements. For example, you
	can bind
	<code>value</code>
	to a component prop called
	<code>count</code>
	like so:
</p>

<CodeWrapper
	{headerText}
	code={CODE.COMPONENT_PARENT} />

<CodeWrapper
	headerText={counterHeader}
	code={CODE.COMPONENT_CHILD} />

<p>
	While Svelte props are reactive without binding, that reactivity only flows downward
	into the component by default. Using <code>bind:property</code>
	allows changes to the property from within the component to flow back up out of the component.
	Because it can be challenging to track where a property is being modified, it's advisable
	to use
	<code>bind:property</code>
	with caution.
</p>
