<script lang="ts">
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { CODE, MODULE_CONTEXT_STEPS } from './constants';
	const headerText = 'App.svelte';
	const cardHeaderText = 'Card.svelte';
</script>

<h1 class="text-primary-700">Module Context</h1>

<p>
	A <code>script</code>
	tag with
	<code>context="module"</code>
	attribute runs once when the module is first evaluated, not for each component instance.
	Values declared here are accessible to a regular
	<code>script</code>
	and the component markup, but not the other way around. You can export bindings, but not
	a default, since the default export is the component itself. Variables in module scripts
	are not reactive, so reassigning them won’t trigger a rerender. For sharing values across
	components, use a
	<code>store</code>
	.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText={cardHeaderText}
		code={CODE.MODULE_CONTEXT_CARD} />

	<CodeWrapper
		{headerText}
		code={CODE.MODULE_CONTEXT_APP} />
</div>

<ul>
	<p>Let's break it into small steps:</p>
	{#each MODULE_CONTEXT_STEPS as { page, step, description }}
		<li>
			<em>{page}</em>
			-
			{description}
		</li>
	{/each}
</ul>
