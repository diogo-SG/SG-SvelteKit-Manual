<script lang="ts">
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import Link from '$lib/components/ui/link/link.svelte';
	import { CODE, COMMON_CASES_LIST } from './constants';
	const headerText = 'App.svelte';
	const href = 'https://github.com/swyxio/svelte-actions?tab=readme-ov-file#readme';
</script>

<h1>Actions</h1>

<p>
	In Svelte, actions provide a way to interact with the DOM. They are functions invoked
	when an element is created using the <code>use</code>
	directive. These functions can return an object with a
	<code>destroy</code>
	method, which is called when the element is removed from the DOM, and an
	<code>update</code>
	method, which is triggered whenever the parameters passed to the action function change.
</p>

<CodeWrapper
	{headerText}
	code={CODE.USE_WITH_PARAMS} />

Here's a simple example that fades-in an element when it is created:

<CodeWrapper
	{headerText}
	code={CODE.USE} />

<ul>
	<p class="font-bold">Most common use cases for actions are:</p>
	{#each COMMON_CASES_LIST as item}
		<li>- {item}</li>
	{/each}
</ul>

<p>
	Svelte actions are a very powerful feature that allows you to interact with the DOM in a
	very simple way. If you want to check some examples and how you can apply them in your
	future Svelte project, click <Link {href}>here</Link>
	.
</p>
