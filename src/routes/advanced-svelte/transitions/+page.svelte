<script lang="ts">
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { CODE } from './constants';

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
	own custom transitions. Let's create a custom transition that will make the element grow
	in size:
</p>
