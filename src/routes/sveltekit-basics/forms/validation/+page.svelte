<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { Accordion, AccordionItem } from 'flowbite-svelte';
	import { EXAMPLE_CODE } from './constants.js';
	import { enhance } from '$app/forms';
	import Link from '$lib/components/ui/link/link.svelte';
	import { ChevronLeftOutline } from 'flowbite-svelte-icons';

	export let form;
	$: console.log(form);
</script>

<Link href="../forms">
	<div class="flex items-center text-xs">
		<ChevronLeftOutline /> Back to the Forms section
	</div>
</Link>

<h1 class="text-primary-700">Form Validation</h1>
<Accordion flush>
	<AccordionItem open>
		<span slot="header">Example</span>
		<form
			method="POST"
			use:enhance
			action="?/validate">
			<label>Enter a number between 1 and 9:</label>
			<input
				name="number"
				type="number" />
			<Button type="submit">Submit</Button>
		</form>
		<div class="py-5">
			{#if form?.error}
				<p style="color: red;">{form.error}</p>
			{/if}

			{#if form?.number}
				<p>Number entered: {form.number}</p>
			{/if}
		</div>
	</AccordionItem>
	<AccordionItem>
		<span slot="header">Code</span>
		<CodeWrapper
			headerText="+page.svelte"
			code={EXAMPLE_CODE.form} />

		<CodeWrapper
			headerText="+page.server.ts"
			code={EXAMPLE_CODE.form_action} />
	</AccordionItem>
</Accordion>

<style>
	form {
		display: flex;
		border: 1px solid #ccc;
		padding: 1rem;
		flex-direction: column;
	}

	label {
		margin-bottom: 0.5rem;
		font-weight: bold;
	}

	input {
		padding: 0.5rem;
		margin-bottom: 1rem;
	}

	.results {
		margin-top: 1rem;
		display: flex;
		justify-content: left;
		flex-wrap: wrap;
	}

	.movie-title {
		font-size: 1.5rem;
		font-weight: bold;
	}

	.search-result {
		margin-top: 1rem;
		border: 1px solid #ccc;
		padding: 1rem;
		max-width: 24%;
		margin-right: 1%;
	}

	.search-result p {
		margin-bottom: 0.5rem;
	}

	.search-result p b {
		font-weight: bold;
	}

	.search-result p:last-child {
		margin-bottom: 0;
	}
</style>
