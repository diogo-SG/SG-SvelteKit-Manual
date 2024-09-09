<script lang="ts">
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

<p>
	Svelte also provides several mouse events that can be used to listen for mouse interactions. Some
	of the most common mouse events are:
</p>

<ul>
	<li><code>on:mouseover</code>: Fires when the mouse pointer moves over an element.</li>
	<li><code>on:mouseout</code>: Fires when the mouse pointer moves out of an element.</li>
	<li><code>on:mouseenter</code>: Fires when the mouse pointer enters an element.</li>
	<li><code>on:mouseleave</code>: Fires when the mouse pointer leaves an element.</li>
</ul>
