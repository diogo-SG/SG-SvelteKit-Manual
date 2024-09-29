export const EXAMPLE_CODE = {
	form: `
<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { enhance } from '$app/forms';
	export let form;
	$: console.log(form);
</script>
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
`,
	form_action: `
export const actions = {
    getAll: async ({ fetch }) => {
        return fetch('https://freetestapi.com/api/v1/movies')
            .then((response) => response.json())
            .then((data) => {
                return {
                    movies: data
                };
            });
    },
    search: async ({ request, fetch }) => {
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
`
};
