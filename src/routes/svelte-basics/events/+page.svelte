<script lang="ts">
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { CODE, EVENTS_LIST, HEADER } from './constants';
</script>

<h1>Events</h1>

<p>
	Events in Svelte are used to handle user interactions. They can be used to listen for
	events such as clicks, mouseovers, and keypresses. In this section, we'll cover some of
	the most common events in Svelte.
</p>

<h2>Click events</h2>
<p>
	The most common event in Svelte is the click event. It's used to listen for clicks on an
	element.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText={HEADER.EVENTS}
		code={CODE.CLICK} />
</div>
<p>
	In the example above, the <code>on:click</code>
	directive is used to listen for a click event on the button element. When the button is clicked,
	the
	<code>handleClick</code>
	function is called.
</p>

<div class="flex flex-col gap-2">
	<h2>Mouse events</h2>
	<ul>
		{#each EVENTS_LIST.MOUSE as { event, description }}
			<li>
				<code>{event}</code>
				- {description}
			</li>
		{/each}
	</ul>
</div>

<div class="flex flex-col gap-2">
	<h2>Keyboard events</h2>
	<ul>
		{#each EVENTS_LIST.KEYBOARD as { event, description }}
			<li>
				<code>{event}</code>
				- {description}
			</li>
		{/each}
	</ul>
</div>

<h2>Inline handlers</h2>
<p>
	Svelte also allows us to declare events handlers inline. In some other JS frameworks,
	you may see recommendations to avoid inline event handlers due to performance issues,
	particularly inside loops. In Svelte, since the compiler will always do the right thing,
	this advice really
	<span class="underline">doesn't make a difference.</span>
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText={HEADER.EVENTS}
		code={CODE.INLINE_HANDLERS} />
</div>

<h2>Event modifiers</h2>
<p>
	Event modifiers are used to modify the behavior of an event. They can be used to prevent
	the default behavior of an event, stop the event from propagating, or pass additional
	data to the event handler. In the following example, we use the <code>
		|preventDefault
	</code>
	modifier to prevent the default behavior of the click event.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText={HEADER.EVENTS}
		code={CODE.MODIFIERS} />
</div>

<ul>
	<p>Here are some of the most common event modifiers in Svelte:</p>
	{#each EVENTS_LIST.MODIFIERS as { modifier, description }}
		<li>
			<code>{modifier}</code>
			- {description}
		</li>
	{/each}
</ul>

<div class="flex flex-col gap-2">
	<h5>Note</h5>
	<p>
		You can even chain modifiers together. For example:
		<code>on:click|preventDefault|stopPropagation=&#123;handleClick&#125;</code>
	</p>
</div>

<h2>Component events</h2>

<p>
	Components can also dispatch events. In order to do so, the component has to create an
	event dispatcher.
</p>

<div class="flex flex-col gap-2">
	<p>
		On our <span class="font-bold">parent</span>
		component:
	</p>

	<CodeWrapper
		headerText={HEADER.EVENTS}
		code={CODE.COMPONENTS_PARENT} />
</div>

<div class="flex flex-col gap-2">
	<p>
		On our <span class="font-bold">child</span>
		component:
	</p>

	<CodeWrapper
		headerText={HEADER.EVENTS}
		code={CODE.COMPONENTS_CHILD} />
</div>

<p>
	In the example above, the child component dispatches a <code>:message</code>
	event with the text
	<code>Hello from child component!</code>
	when the button is clicked. The parent component listens for the
	<code>:message</code>
	event and logs the text to the console.
	<span class="underline">The name of the event can be anything</span>
	, just have in mind that it's a good practice to use a descriptive name.
</p>

<h2>Event forwarding</h2>

<p>
	Unlike DOM events, component events don't bubble. If you want to listen to an event on
	some deeply nested component, the intermediate components must forward the event. <br />
	Let's say we have a
	<code>GrandChild</code>
	component that dispatches a
	<code>:message</code>
	event and we want to listen to it in the
	<code>Parent</code>
	component. We need to forward the event from the
	<code>GrandChild</code>
	to the
	<code>Parent</code>
	through the
	<code>Child</code>
	component.
</p>

<div class="flex flex-col gap-2">
	<p>
		On our <span class="font-bold">parent</span>
		component:
	</p>
	<CodeWrapper
		headerText={HEADER.EVENTS}
		code={CODE.FORWARDING_PARENT} />
</div>
<div class="flex flex-col gap-2">
	<p>
		On our <span class="font-bold">child</span>
		component:
	</p>
	<CodeWrapper
		headerText={HEADER.EVENTS}
		code={CODE.FORWARDING_CHILD} />
</div>
<div class="flex flex-col gap-2">
	<p>
		On our <span class="font-bold">grandchild</span>
		component:
	</p>
	<CodeWrapper
		headerText={HEADER.EVENTS}
		code={CODE.FORWARDING_GRANDCHILD} />
</div>

<p>
	In the example above, an <code>on:message</code>
	event directive is passed to the
	<span class="font-bold">grandchild</span>
	component without a value, which means 'forward all message events'. Again,
	<span class="underline">the name of the event can be anything</span>
	, just have in mind that it's a good practice to use a descriptive name.
</p>

<h2>DOM event forwarding</h2>

<p>
	Event forwarding works for DOM events too. Imagine that we want to get notified of
	clicks on our <span class="font-bold">child</span>
	component, to do that we just need to forward click events to the button element in our
	<span class="font-bold">child</span>
	component.
</p>

<div class="flex flex-col gap-2">
	<p>
		On our <span class="font-bold">parent</span>
		component:
	</p>
	<CodeWrapper
		headerText={HEADER.EVENTS}
		code={CODE.DOM_PARENT} />
</div>
<div class="flex flex-col gap-2">
	<p>
		On our <span class="font-bold">child</span>
		component:
	</p>
	<CodeWrapper
		headerText={HEADER.EVENTS}
		code={CODE.DOM_CHILD} />
</div>
