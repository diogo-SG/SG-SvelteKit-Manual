<script lang="ts">
	//TODO: Break this into separate pages or sections

	import Button from '$lib/components/ui/button/button.svelte';
	import { CodeBlock } from 'svhighlight';
	import { actionExampleCode, actionExampleCode2, actionExampleCode3 } from './example-code.js';

	export let form;
	$: console.log(form);
</script>

<h1>Forms</h1>

<p>
	Forms are a fundamental part of web development. They allow users to input data and submit it to
	the server. In this section, we'll cover how to work with forms to submit data in SvelteKit.
</p>

<h2>Example form</h2>

<form method="POST" action="?/search">
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
	form submission. Here's the code in +page.server.ts for the form above:
</p>

<CodeBlock language="svelte" headerText="+page.server.ts" code={actionExampleCode} />

<p>
	The request here is a standard <a href="https://developer.mozilla.org/en-US/docs/Web/API/Request"
		>Request</a
	>
	object, and
	<code>await request.formData()</code> returns a
	<a href="https://developer.mozilla.org/en-US/docs/Web/API/FormData">FormData</a> instance
</p>

<p>
	We can also handle multiple actions by naming them. Let's add a "Get all" button to the form
	above:
</p>

<form method="POST" action="?/search">
	<label> Search for a movie: </label>
	<input name="movieTitle" type="text" placeholder="Enter a movie title" />
	<Button type="submit">Search</Button>
</form>

<form method="POST" action="?/getAll">
	<Button type="submit" name="getAll">Get all</Button>
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

{#if form?.movies}
	<h2>All movies</h2>
	<div class="results">
		{#each form.movies.splice(-12) as movie}
			<div class="search-result">
				<p class="movie-title">{movie.title}</p>
				<p><b>Year:</b> {movie.year}</p>
				<p><b>Rating:</b> {movie.rating}</p>
				<p><b>Plot:</b> {movie.plot}</p>
			</div>
		{/each}
	</div>
{/if}

<p>
	In the form itself, in the +page.svelte file, we just need to specify the action. For example: <code
		>{'<form method="POST" action="?/search"></form>'}</code
	>
</p>
<p>Then, in the server file, we add a new action as such:</p>

<CodeBlock language="svelte" headerText="+page.server.ts" code={actionExampleCode2} />

<h2>Form validation</h2>

<p>
	In SvelteKit, we can use the built-in form validation functionality to validate form data. Here's
	an example of how to validate a form in SvelteKit:
</p>

<form method="POST" action="?/validate">
	<label> Enter a number between 1 and 9: </label>
	<input name="number" type="number" />
	<Button type="submit">Submit</Button>
</form>
{#if form?.error}
	<p style="color: red;">{form.error}</p>
{/if}

{#if form?.number}
	<p>Number entered: {form.number}</p>
{/if}

<p>
	To validate the form, we can use the <code>validate</code> function from the <code>kit</code> module.
	Here's the code in +page.server.ts that handles the validation for the form above:
</p>

<CodeBlock language="svelte" headerText="+page.server.ts" code={actionExampleCode3} />

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
