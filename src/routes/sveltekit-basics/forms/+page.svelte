<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { CodeBlock } from 'svhighlight';

	export let form;
	$: console.log(form);
</script>

<h1>Forms</h1>

<p>
	Forms are a fundamental part of web development. They allow users to input data and submit it to
	the server. In this section, we'll cover how to work with forms to submit data in SvelteKit.
</p>

<h2>Example form</h2>

<form method="POST">
	<label> Search for a movie: </label>
	<input name="movieTitle" type="text" placeholder="Enter a movie title" />
	<Button type="submit">Search</Button>
</form>

{#if form?.searchResults}
	<h2>Search results</h2>
	<div class="results">
		{#each form.searchResults as result}
			<div class="search-result">
				<p class="movie-title">{result.title}</p>
				<p><b>Year:</b> {result.year}</p>
				<p><b>Rating:</b> {result.rating}</p>
				<p><b>Plot:</b> {result.plot}</p>
			</div>
		{/each}
	</div>
{/if}

<h2>How it works</h2>

<p>
	A Svelte form is just like a regular HTML form. When we define its method as POST, it'll make a
	post request to the current page. We can then create a server-side <code>action</code> to handle the
	form submission. Here's the code for the form above:
</p>

<CodeBlock
	language="svelte"
	code={`
	export const actions = {
	default: async ({ request, fetch }) => {
		const formData = await request.formData();
		const movieTitle = formData.get('movieTitle');

		return fetch(\`https://freetestapi.com/api/v1/movies?search=\${movieTitle}\`)
			.then((response) => response.json())
			.then((data) => {
				return {
					searchResults: data
				};
			});
	}
};
	`}
></CodeBlock>

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

	button {
		padding: 0.5rem;
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
