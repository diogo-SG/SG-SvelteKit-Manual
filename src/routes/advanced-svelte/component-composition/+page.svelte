<script lang="ts">
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { CODE, SLOT_PROPS_LIST } from './constants';

	const headerText = 'App.svelte';
	const buttonHeaderText = 'Button.svelte';
	const cardHeaderText = 'Card.svelte';
</script>

<h1 class="text-primary-700">Component Composition</h1>

<h2>Slots</h2>

<p>
	Such as elements can have children, components can have slots. Before a component can
	accept children, it needs to know where to put them. For this, you'll need to use the <code>
		slot
	</code>
	element.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText={buttonHeaderText}
		code={CODE.SLOTS_CHILD} />

	<CodeWrapper
		{headerText}
		code={CODE.SLOTS_PARENT} />
</div>

<h2>Named slots</h2>

<p>
	In the last example you learned how to use a default <code>slot</code>
	element, but most of the times you'll need more control over the placement. For that you
	can use
	<em>named slots.</em>
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText={buttonHeaderText}
		code={CODE.NAMED_SLOTS_CHILD} />

	<CodeWrapper
		{headerText}
		code={CODE.NAMED_SLOTS_PARENT} />
</div>

<h2>Slot fallbacks</h2>

<p>
	You can also provide a fallback for a slot, in case it's not filled or for slots that
	are left empty. For that purpose, you just need to add content inside the <code>
		slot
	</code>
	element.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText={buttonHeaderText}
		code={CODE.SLOTS_FALLBACK} />
</div>

<h2>Slot props</h2>

<p>
	<code>slot</code>
	elements can also receive props. Here's an example of how you can pass props to a slot.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText={cardHeaderText}
		code={CODE.SLOTS_PROPS_CHILD} />

	<CodeWrapper
		{headerText}
		code={CODE.SLOTS_PROPS_PARENT} />
</div>

<ul>
	<p>Let's review the code above:</p>
	{#each SLOT_PROPS_LIST as { page, description }}
		<li>
			<p>
				<em>{page}</em>
				- {description}
			</p>
		</li>
	{/each}
</ul>

<h2>Checking for slot content</h2>

<p>
	You can also check if a slot has content or not. For that, you can use the <code>
		$$slots
	</code>
	object.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText={cardHeaderText}
		code={CODE.SLOTS_CHECK} />
</div>

<p>
	In the example above, if a <code>lastName</code>
	slot is not provided by the parent component, the code inside the
	<code>if</code>
	block won’t run, giving us greater control over the UI.
</p>
