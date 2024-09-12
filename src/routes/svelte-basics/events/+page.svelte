<script lang="ts">
	import CodeBlock from '$lib/components/ui/code-block/code-block.svelte';
	const mouseEventsList = [
		{ event: 'on:mouseover', description: 'Fires when the mouse pointer moves over an element.' },
		{ event: 'on:mouseout', description: 'Fires when the mouse pointer moves out of an element.' },
		{ event: 'on:mouseenter', description: 'Fires when the mouse pointer enters an element.' },
		{ event: 'on:mouseleave', description: 'Fires when the mouse pointer leaves an element.' }
	];

	const keyboardEventsList = [
		{ event: 'on:keydown', description: 'Fires when a key is pressed down.' },
		{ event: 'on:keyup', description: 'Fires when a key is released.' },
		{ event: 'on:keypress', description: 'Fires when a key is pressed and released.' }
	];

	const eventModifiersList = [
		{ modifier: '|preventDefault', description: 'Prevents the default behavior of the event.' },
		{ modifier: '|stopPropagation', description: 'Stops the event from propagating.' },
		{
			modifier: '|self',
			description: 'Only triggers the event if the event was dispatched from the element itself.'
		},
		{ modifier: '|once', description: 'Only triggers the event once.' },
		{ modifier: '|capture', description: 'Use capture phase instead of bubbling phase.' },
		{ modifier: '|passive', description: 'Use passive event listener.' },
		{ modifier: '|nonpassive', description: 'Use non-passive event listener.' },
		{
			modifier: '|trusted',
			description: 'Only trigger the event if it was dispatched by a user action.'
		}
	];
</script>

<h1>Events</h1>

<p>
	Events in Svelte are used to handle user interactions. They can be used to listen for events such
	as clicks, mouseovers, and keypresses. In this section, we'll cover some of the most common events
	in Svelte.
</p>

<h2>Click events</h2>
<p>
	The most common event in Svelte is the click event. It's used to listen for clicks on an element.
</p>

<CodeBlock>
	{`<button on:click={handleClick}>Click me</button>`}
</CodeBlock>

<p>
	In the example above, the <code>on:click</code> directive is used to listen for a click event on
	the button element. When the button is clicked, the <code>handleClick</code> function is called.
</p>

<h2>Mouse events</h2>
<ul>
	{#each mouseEventsList as { event, description }}
		<li><code>{event}</code> - {description}</li>
	{/each}
</ul>

<h2>Keyboard events</h2>
<ul>
	{#each keyboardEventsList as { event, description }}
		<li><code>{event}</code> - {description}</li>
	{/each}
</ul>

<h2>Inline handlers</h2>
<p>
	Svelte also allows us to declare events handlers inline. In some other JS frameworks, you may see
	recommendations to avoid inline event handlers due to performance issues, particularly inside
	loops. In Svelte, since the compiler will always do the right thing, this advice really
	<span class="underline">doesn't make a difference</span>. You can use inline event handlers like
	this:
</p>

<CodeBlock>
	{`<button on:mouseover={() => {console.log('Mouse is hovering me')}}>Hover me</button>`}
</CodeBlock>

<h2>Event modifiers</h2>
<p>
	Event modifiers are used to modify the behavior of an event. They can be used to prevent the
	default behavior of an event, stop the event from propagating, or pass additional data to the
	event handler. In the following example, we use the <code>|preventDefault</code> modifier to prevent
	the default behavior of the click event:
</p>
<CodeBlock>
	{`<button on:click|preventDefault={handleSubmit}>Submit</button>`}
</CodeBlock>

<ul>
	{#each eventModifiersList as { modifier, description }}
		<li><code>{modifier}</code> - {description}</li>
	{/each}
</ul>

<p>
	You can even chain modifiers together. For example:
	<code>on:click|preventDefault|stopPropagation=&#123;handleClick&#125;</code>
</p>
