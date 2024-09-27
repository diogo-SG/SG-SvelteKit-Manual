<script>
	import { AccordionItem, Accordion } from 'flowbite-svelte';
	import CodeWrapper from '../code-wrapper/code-wrapper.svelte';
	export let data;
</script>

<Accordion flush>
	{#each data as { open, header, content, code, headerText }}
		<AccordionItem {open}>
			<span slot="header">{header}</span>
			<p>{content}</p>
			<CodeWrapper
				{headerText}
				{code} />
		</AccordionItem>
	{/each}
</Accordion>
