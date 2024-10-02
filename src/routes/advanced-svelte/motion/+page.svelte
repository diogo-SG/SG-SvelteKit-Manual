<script lang="ts">
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import Link from '$lib/components/ui/link/link.svelte';
	import { CODE, OPTIONS } from './constants';
	const fileTitle = 'App.svelte';
	const href = 'https://svelte.dev/docs/svelte-easing';
</script>

<h1>Motion</h1>

<p>
	The <code>svelte/motion</code>
	module provides two functions,
	<code>tweened</code>
	and
	<code>spring</code>
	, which create writable stores that transition their values gradually over time when using
	<code>set</code>
	and
	<code>update</code>
	, instead of changing them instantly.
</p>

<h2>Tweened</h2>

<p>
	Tween is a function that creates a tweened value. Tweened stores update their values
	over a fixed duration.
</p>
<ul>
	<p>The following options can be used:</p>
	{#each OPTIONS.TWEENED as { option, description }}
		<li>
			<em>{option}</em>
			- {description}
		</li>
	{/each}
</ul>

<div class="flex flex-col gap-2">
	<p>
		Let's create a simple example in our <code>App.svelte</code>
		file:
	</p>

	<CodeWrapper
		headerText={fileTitle}
		code={CODE.TWEENED} />
</div>

<div class="flex flex-col gap-2">
	<p>
		Clicking the buttons causes the progress bar to animate to its new value. To really
		take advantage of our <code>tweened</code>
		function, we need to add an easing function:
	</p>

	<CodeWrapper
		headerText={fileTitle}
		code={CODE.TWEENED_CUBIC} />
</div>

<div class="flex flex-col gap-2 rounded-lg border-2 border-primary-600 px-4 py-4 text-sm">
	<h5 class="text-sm text-primary-600">Note</h5>
	<p class="text-sm">
		The <code>svelte/easing</code>
		module contains some cool options that you can use out of the box. You can check them by
		clicking <Link {href}>here</Link>. You can also create your own easing functions
		<code>p =&gt t</code>
		, where
		<code>p</code>
		and
		<code>t</code>
		are both values between 0 and 1.
	</p>
</div>

<h2>Spring</h2>

<p>
	<code>spring</code>
	function is an alternative to
	<code>tweened</code>
	that often works better for values that are frequently changing.
</p>
<ul>
	<p>The following options are available:</p>
	{#each OPTIONS.SPRING as { option, description }}
		<li>
			<em>{option}</em>
			- {description}
		</li>
	{/each}
</ul>

<div class="flex flex-col gap-2">
	<p>
		Let's create another example using <code>spring</code>
		in our
		<code>App.svelte</code>
		file:
	</p>

	<CodeWrapper
		headerText={fileTitle}
		code={CODE.SPRING} />
</div>

<p>
	In this example we have two stores, one representing the circle's coordinates and
	another one representing its size. Both springs have default <code>stiffness</code>
	and
	<code>damping</code>
	values, but we can specify our own initial values.
</p>
<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText={fileTitle}
		code={CODE.SPRING_CUSTOM} />
</div>
<p>
	Feel free to try the previous example in your local machine for a better understanding
	of these Svelte techniques.
</p>
