<script lang="ts">
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { CODE, SVELTE_OPTIONS_LIST } from './constants';

	const headerText = 'App.svelte';
	const redSquareHeaderText = 'RedSquare.svelte';
	const blueSquareHeaderText = 'BlueSquare.svelte';
	const cardHeaderText = 'Card.svelte';
</script>

<h1>Special Elements</h1>

<p>Svelte provides a variety of built-in special elements.</p>

<h2>svelte:self</h2>

<p>
	The <code>svelte:self</code>
	allows a component to contain itself recursively. This must be used inside an
	<code>if</code>
	or
	<code>each</code>
	block to prevent an infinte loop. Imagine that you have an array with strings and several
	nested arrays inside of it, you can use
	<code>svelte:self</code>
	to render both the strings and the nested array elements.
</p>

<CodeWrapper
	{headerText}
	code={CODE.SVELTE_SELF} />

<h2>svelte:component</h2>

<p>
	The <code>svelte:component</code>
	allows you to dynamically switch between components. This can be very useful when you want
	to render different components based on a condition. To demonstrate this we'll use a very
	simple example where we have two components, a
	<code>RedSquare.svelte</code>
	and a
	<code>BlueSquare.svelte</code>
	. On the
	<code>App.svelte</code>
	we'll have a button that toggles between the two components.
</p>

<CodeWrapper
	{headerText}
	code={CODE.SVELTE_COMPONENT_APP} />

<CodeWrapper
	headerText={redSquareHeaderText}
	code={CODE.SVELTE_COMPONENT_RED_SQUARE} />

<CodeWrapper
	headerText={blueSquareHeaderText}
	code={CODE.SVELTE_COMPONENT_BLUE_SQUARE} />

<h2>svelte:element</h2>

<p>
	The <code>svelte:element</code>
	is similar to
	<code>svelte:component</code>
	but instead of switching between components, you
	<em>switch between elements</em>
	. You can use this when you want to render different elements based on a condition. Let's
	see an example where we have a button that toggles between a
	<code>&lt;h1&gt;</code>
	and a
	<code>&lt;p&gt;</code>
	tag.
</p>

<CodeWrapper
	{headerText}
	code={CODE.SVELTE_ELEMENT} />

<h2>svelte:window</h2>

<p>
	The <code>svelte:window</code>
	allows you to listen to window events. You can listen to events like
	<code>scroll</code>
	,
	<code>resize</code>
	,
	<code>focus</code>
	,
	<code>blur</code>
	,
	<code>innerWidth</code>
	, etc. Let's see an example where we listen to the
	<code>scrollY</code>
	event and update the value saved on a variable.
</p>

<CodeWrapper
	{headerText}
	code={CODE.SVELTE_WINDOW} />

<h2>svelte:body</h2>

<p>
	This element allows you to listen for events that fire on <code>document.body</code>
	. This is useful when you want to listen to events that are not available on the window object,
	such as
	<code>mouseenter</code>
	and
	<code>mouseleave</code>
	events. Let's create an example where we listen to the
	<code>mouseenter</code>
	and
	<code>mouseleave</code>
	events.
</p>

<CodeWrapper
	{headerText}
	code={CODE.SVELTE_BODY} />

<h2>svelte:document</h2>

<p>
	This element allows you to listen for events that fire on <code>document</code>
	. This is useful when you want to listen to events that are not available on the window object,
	such as
	<code>selectionchange</code>
	. Here's a simple example.
</p>

<CodeWrapper
	{headerText}
	code={CODE.SVELTE_DOCUMENT} />

<h2>svelte:head</h2>

<p>
	The <code>svelte:head</code>
	element allows you to insert elements inside the
	<code>&lt;head&gt;</code>
	. You can use this special element when you want to add meta tags, title tags, link tags
	or script tags to the
	<code>&lt;head&gt;</code>
	of the document . We'll create an example where we add a title tag to the document.
</p>

<CodeWrapper
	{headerText}
	code={CODE.SVELTE_HEAD} />

<p>
	In server-side rendering (SSR), contents of <code>svelte:head</code>
	are returned separately from the rest of your HTML.
</p>

<h2>svelte:options</h2>

<p>
	The <code>svelte:options</code>
	element allows users to specify compiler options. This element must be the first element
	in the component.
</p>

<CodeWrapper
	{headerText}
	code={CODE.SVELTE_OPTIONS} />

<ul>
	<strong>Here's a list of some options you can use:</strong>

	{#each SVELTE_OPTIONS_LIST as { name, description }}
		<li>
			<code>{name}</code>
			- {description}
		</li>
	{/each}
</ul>

<h2>svelte:fragment</h2>

<p>
	The <code>svelte:fragment</code>
	element allows you to place content in a named slot without wrapping it in a container DOM
	element.
</p>

<CodeWrapper
	{headerText}
	code={CODE.SVELTE_FRAGMENT_PARENT} />

<CodeWrapper
	headerText={cardHeaderText}
	code={CODE.SVELTE_FRAGMENT_CHILD} />
