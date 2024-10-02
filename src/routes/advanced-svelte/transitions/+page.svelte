<script lang="ts">
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { CODE, TRANSITION_FUNCTION_LIST } from './constants';
	import Link from '$lib/components/ui/link/link.svelte';
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

<div class="flex flex-col gap-2">
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
</div>

<p>
	The <code>fade</code>
	function creates a fade-in and fade-out effect and its very easy to use.
</p>

<h2>Fly</h2>

<p>Transition functions can accept parameters as well.</p>

<div class="flex flex-col gap-2">
	<p>
		Let's replace the <code>fade</code>
		transition with
		<code>fly</code>
		:
	</p>
	<CodeWrapper
		headerText={fileTitle}
		code={CODE.TRANSITION_FLY_SCRIPT} />
</div>
<div class="flex flex-col gap-2">
	<p>
		And apply it to the <code>&ltp&gt</code>
		along with some options:
	</p>

	<CodeWrapper
		headerText={fileTitle}
		code={CODE.TRANSITION_FLY_HTML} />
</div>

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
	directive, or both together.
</p>

<div class="flex flex-col gap-2">
	<p>
		Import
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
</div>

<div class="flex flex-col gap-2 rounded-lg border-2 border-primary-600 px-4 py-4 text-sm">
	<h5 class="text-sm text-primary-600">Note</h5>
	<p class="text-sm">
		The
		<code>svelte/transition</code>
		module has a handful of built-in transitions. We recommend that you check all of them
		<Link {href}>here</Link>.
	</p>
</div>

<h2>Custom transitions</h2>

<p>
	By making use of the <code>svelte/transition</code>
	module we already saw that it's very easy to create transitions, but we can also create our
	own custom transitions. For that purpose, we will create a function that accepts two arguments
	- the node to which the transition is applied and the options object - and returns a transition
	object.
</p>
<ul>
	<p>The transition object can have the following properties:</p>
	{#each TRANSITION_FUNCTION_LIST as { property, description }}
		<li>
			<em>{property}</em>
			- {description}
		</li>
	{/each}
</ul>

<div class="flex flex-col gap-2 rounded-lg border-2 border-primary-600 px-4 py-4 text-sm">
	<h5 class="text-sm text-primary-600">Note</h5>
	<p class="text-sm">
		Most of the time you should return the <code>css</code>
		instead of the
		<code>tick</code>
		, as CSS animations run off the main thread to prevent jank where possible.
	</p>
</div>

<div class="flex flex-col gap-2">
	<p>
		Here's an example of how you can create a custom transition using the
		<code>css</code>
		property. Let's update our
		<code>script</code>
		:
	</p>
	<CodeWrapper
		headerText={fileTitle}
		code={CODE.TRANSITION_CUSTOM_CSS_SCRIPT} />
</div>
<div class="flex flex-col gap-2">
	<p>And now let's update our HTML code:</p>
	<CodeWrapper
		headerText={fileTitle}
		code={CODE.TRANSITION_CUSTOM_CSS_HTML} />
</div>

<p>
	It's also possible to create custom transitions using plain JavaScript instead of CSS.
	Let's create a typewriter effect using the
	<code>tick</code>
	property.
</p>

<div class="flex flex-col gap-2">
	<p>
		Update the
		<code>script</code>
		:
	</p>
	<CodeWrapper
		headerText={fileTitle}
		code={CODE.TRANSITION_CUSTOM_TICK_SCRIPT} />
</div>
<div class="flex flex-col gap-2">
	<p>Finally, let's update the HTML:</p>

	<CodeWrapper
		headerText={fileTitle}
		code={CODE.TRANSITION_CUSTOM_TICK_HTML} />
</div>
<p>
	Really cool right? You'll probably use some cool packages to create these effects, but
	if you need to achieve something more unique, you already know how to do it!
</p>

<h2>Transition events</h2>

<p>
	Sometimes it can be useful to know when a transition has started or ended. Svelte
	provides a set of events that you can listen to like any other DOM event.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText={fileTitle}
		code={CODE.TRANSITION_EVENTS} />
</div>
<h2>Global transitions</h2>

<p>
	You can also define global transitions that will be applied to all elements inside a
	block that use the
	<code>transition</code>
	directive.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText={fileTitle}
		code={CODE.GLOBAL_TRANISITONS} />
</div>

<h2>Key blocks</h2>

<p>
	Key blocks destroy and recreate their contents when the value of an expression changes.
	This is useful if you want an element to play its transition whenever a value changes
	instead of only when the element enters or leaves the DOM.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText={fileTitle}
		code={CODE.KEY_BLOCKS} />
</div>

<p>
	In the previous example, the <code>fade</code>
	transition will always run whenever the
	<code>i</code>
	variable changes.
</p>
