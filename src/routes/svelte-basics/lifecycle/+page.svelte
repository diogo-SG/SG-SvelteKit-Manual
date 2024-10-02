<script lang="ts">
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { CODE } from './constants';
</script>

<h1>Component lifecycle</h1>

<p>
	Similar to React, every component has a lifecycle that starts when it is created, and
	ends when it is destroyed. There are a handful of functions that allow you to run code
	at key moments during that lifecycle. The one you'll use most frequently is <code>
		onMount
	</code>
	.
</p>

<h2>onMount</h2>

<p>
	The <code>onMount</code>
	function runs after the component is first rendered to the DOM. It is a good place to run
	code that interacts with the DOM, such as setting up event listeners or manipulating the
	DOM directly. You can also pass a cleanup function so that it runs when the component is
	removed from the DOM.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		showHeader={false}
		code={CODE.ON_MOUNT} />
</div>

<h2>beforeUpdate and afterUpdate</h2>

<p>
	The <code>beforeUpdate</code>
	function runs
	<span class="underline">before the component is updated</span>
	. While in the other hand,
	<code>afterUpdate</code>
	runs
	<span class="underline">after the component is updated</span>
	. Together, they're useful for doing things imperatively that are difficult to achieve in
	a purely state-driven way.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		showHeader={false}
		code={CODE.BEFORE_AND_AFTER_UPDATE} />
</div>

<div class="flex flex-col gap-2 rounded-lg border-2 border-primary-600 px-4 py-4 text-sm">
	<h5 class="text-sm text-primary-600">Note</h5>
	<p class="text-sm">
		Bare in mind that <code>beforeUpdate</code>
		will first run before the component has mounted, so you'll need to check if the component
		is mounted before running any code that interacts with the DOM.
	</p>
</div>

<h2>onDestroy</h2>

<p>
	<code>onDestroy</code>
	is a function that runs when the component is removed from the DOM. It is useful to clean
	up any resources that the component is using, such as event listeners, timers or store subsctiptions.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		showHeader={false}
		code={CODE.ON_DESTROY} />
</div>

<h2>tick</h2>

<p>
	<code>tick</code>
	is a function that returns a promise that resolves as soon as any pending state changes have
	been applied to the DOM. You can use it to wait for the DOM to update before running code
	that depends on the updated DOM. When you update component state in Svelte, it doesn't update
	the DOM immediately. Instead, it waits until the next microtask to see if there are any other
	changes that need to be applied, including in other components. Doing so avoids unnecessary
	work and allows the browser to batch things more effectively.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		showHeader={false}
		code={CODE.TICK} />
</div>

<div class="flex flex-col gap-2 rounded-lg border-2 border-primary-600 px-4 py-4 text-sm">
	<h5 class="text-sm text-primary-600">Note</h5>
	<p class="text-sm">
		<code>tick</code>
		is useful when you need to interact with the DOM after updating component state, such as
		manipulating the DOM directly or focusing an input element.
	</p>
</div>
