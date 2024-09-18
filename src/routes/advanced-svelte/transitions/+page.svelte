<script lang="ts">
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { Code } from 'lucide-svelte';
	import { CODE, TRANSITION_FUNCTION_LIST } from './constants';

	const href = 'https://svelte.dev/docs/svelte-transition';
	const fileTitle = 'App.svelte';
</script>

<h1>Transitions</h1>

<p>
	Transitions in Svelte are a way to animate elements when they are added or removed from
	the DOM. They are created using the <code>transition</code>
	directive.
</p>

<h2>Fade</h2>

<p>
	Let's import the
	<code>fade</code>
	function from
	<code>svelte/transition</code>
	into our
	<code>App.svelte</code>
	file and create a small example:
</p>

<CodeWrapper
	headerText={fileTitle}
	code={CODE.TRANSITION_FADE} />

<p>
	The <code>fade</code>
	function creates a fade-in and fade-out effect and its very easy to use.
</p>

<h2>Fly</h2>

<p>
	Transition functions can accept parameters as well. Let's replace the <code>fade</code>
	transition with
	<code>fly</code>
	:
</p>

<CodeWrapper
	headerText={fileTitle}
	code={CODE.TRANSITION_FLY_SCRIPT} />

<p>
	And apply it to the <code>&ltp&gt</code>
	along with some options:
</p>

<CodeWrapper
	headerText={fileTitle}
	code={CODE.TRANSITION_FLY_HTML} />

<p>
	Now the <code>&ltp&gt</code>
	will fly out to the bottom and fly in to the top. The transition is
	<span class="underline">reversible,</span>
	so once you click the checkbox again, the
	<code>&ltp&gt</code>
	will come back to its original place.
</p>

<h2>In and out</h2>

<p>
	Instead of the <code>transition</code>
	directive, an element can have an
	<code>in</code>
	or an
	<code>out</code>
	directive, or both together. Import
	<code>fade</code>
	alongside with
	<code>fly</code>
	and replace the
	<code>transition</code>
	directive with separate
	<code>in</code>
	and
	<code>out</code>
	directives:
</p>

<CodeWrapper
	headerText={fileTitle}
	code={CODE.TRANSITION_IN_OUT} />

<p>
	The
	<code>svelte/transition</code>
	module has a handful of built-in transitions. We recommend that you check all of them
	<a
		{href}
		class="text-[blue] underline">
		here.
	</a>
</p>

<h2>Custom transitions</h2>

<p>
	By making use of the <code>svelte/transition</code>
	module we already saw that it's very easy to create transitions, but we can also create our
	own custom transitions. For that purpose, we will create a function that accepts two arguments
	- the node to which the transition is applied and the options object - and returns a transition
	object which can have the following properties:
</p>
<ul>
	{#each TRANSITION_FUNCTION_LIST as { property, description }}
		<li>
			<strong>{property}</strong>
			- {description}
		</li>
	{/each}
</ul>

<p>
	Most of the time you should return the <code>css</code>
	instead of the
	<code>tick</code>
	, as CSS animations run off the main thread to prevent jank where possible.
	<br />
	Here's an example of how you can create a custom transition using the
	<code>css</code>
	property. Let's update our
	<code>script</code>
	:
</p>

<CodeWrapper
	headerText={fileTitle}
	code={CODE.TRANSITION_CUSTOM_CSS_SCRIPT} />

<p>And now let's update our HTML code:</p>

<CodeWrapper
	headerText={fileTitle}
	code={CODE.TRANSITION_CUSTOM_CSS_HTML} />

<p>
	It's also possible to create custom transitions using plain JavaScript instead of CSS.
	Let's create a typewriter effect using the
	<code>tick</code>
	property. Update the
	<code>script</code>
	:
</p>

<CodeWrapper
	headerText={fileTitle}
	code={CODE.TRANSITION_CUSTOM_TICK_SCRIPT} />

<p>Finally, let's update the HTML:</p>

<CodeWrapper
	headerText={fileTitle}
	code={CODE.TRANSITION_CUSTOM_TICK_HTML} />

<p>
	Really cool right? You'll probably use some cool packages to create these effects, but
	if you need to achieve something more unique, you already know how to do it!
</p>

<h2>Transition events</h2>

<p>
	Sometimes it can be useful to know when a transition has started or ended. Svelte
	provides a set of events that you can listen to like any other DOM event:
</p>

<CodeWrapper
	headerText={fileTitle}
	code={CODE.TRANSITION_EVENTS} />

<h2>Global transitions</h2>

<p>
	You can also define global transitions that will be applied to all elements inside a
	block that use the
	<code>transition</code>
	directive. Here's a simple example:
</p>

<CodeWrapper
	headerText={fileTitle}
	code={CODE.GLOBAL_TRANISITONS} />

<h2>Key blocks</h2>

<p>
	Key blocks destroy and recreate their contents when the value of an expression changes.
	This is useful if you want an element to play its transition whenever a value changes
	instead of only when the element enters or leaves the DOM.
</p>

<CodeWrapper
	headerText={fileTitle}
	code={CODE.KEY_BLOCKS} />

<p>
	In the previous example, the <code>fade</code>
	transition will always run whenever the
	<code>i</code>
	variable changes.
</p>
