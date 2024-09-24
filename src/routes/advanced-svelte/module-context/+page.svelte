<script lang="ts">
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { CODE, MODULE_CONTEXT_STEPS } from './constants';
	const headerText = 'App.svelte';
	const cardHeaderText = 'Card.svelte';
</script>

<h1>Module Context</h1>

<p>
	A <code>script</code>
	tag with
	<code>context="module"</code>
	attribute runs once when the module is first evaluates, not for each component instance.
	Values declared here are accessible to a regular
	<code>script</code>
	and the component markup, but not the other way around. You can export bindings, but not
	a default, since the default export is the component itself. Variables in module scripts
	are not reactive, so reassigning them won’t trigger a rerender. For sharing values across
	components, use a
	<code>store</code>
	.
</p>

<CodeWrapper
	headerText={cardHeaderText}
	code={CODE.MODULE_CONTEXT_CARD} />

<CodeWrapper
	{headerText}
	code={CODE.MODULE_CONTEXT_APP} />

<ul>
	<strong>Let's break it into small steps:</strong>
	{#each MODULE_CONTEXT_STEPS as { page, step, description }}
		<li>
			<p>
				{step} -
				<code>{page}</code>
				- {description}
			</p>
		</li>
	{/each}
</ul>
