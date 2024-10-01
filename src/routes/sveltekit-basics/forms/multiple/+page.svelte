<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { Accordion, AccordionItem } from 'flowbite-svelte';
	import { EXAMPLE_CODE } from './constants.js';
	import { enhance } from '$app/forms';
	import Link from '$lib/components/ui/link/link.svelte';
	export let form;
	$: console.log(form);
</script>

<h1>Multiple actions in a form example</h1>
<Accordion flush>
	<AccordionItem open>
		<span slot="header">Example</span>
		<form
			method="POST"
			use:enhance
			action="?/search">
			<label for="movieInput">Search for a movie:</label>
			<input
				id="movieInput"
				name="movieInput"
				type="text"
				placeholder="Enter a movie title" />
			<Button type="submit">Search</Button>
		</form>

		<form
			method="POST"
			use:enhance
			action="?/getAll">
			<Button
				type="submit"
				name="getAll">
				Get all
			</Button>
		</form>

		<div class="py-5">
			{#if form?.searchResults}
				<h2>Search results</h2>
				<div class="results">
					{#each form.searchResults as result}
						<div class="search-result">
							<p class="movie-title">{result.title}</p>
							<p>
								<b>Year:</b>
								{result.year}
							</p>
							<p>
								<b>Rating:</b>
								{result.rating}
							</p>
							<p>
								<b>Plot:</b>
								{result.plot}
							</p>
						</div>
					{/each}
				</div>
			{/if}

			{#if form?.movies}
				<h2>All movies</h2>
				<div class="results">
					{#each form.movies.splice(-12) as movie}
						<div class="search-result">
							<p class="movie-title">{movie.title}</p>
							<p>
								<b>Year:</b>
								{movie.year}
							</p>
							<p>
								<b>Rating:</b>
								{movie.rating}
							</p>
							<p>
								<b>Plot:</b>
								{movie.plot}
							</p>
						</div>
					{/each}
				</div>
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

<Link href="../forms">Back to the Forms section</Link>

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
