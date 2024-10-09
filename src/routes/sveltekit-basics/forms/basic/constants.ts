export const EXAMPLE_CODE = {
	form: `
    <script lang="ts">
        import Button from '$lib/components/ui/button/button.svelte';

        export let form;
        $: console.log(form);
    </script>

    <form method="POST">
		<label for="country">Search for a country:</label>
			<input
				id="country"
				name="country"
				type="text"
				placeholder="Enter a country name" />
                
		    <Button type="submit">Search</Button>
	</form>

    {#if form?.searchResults}
		<h2>Search results</h2>
		<div>
			{#each form.searchResults as result}
			    <div>
				    <p>{result.name.common}</p>
				    <p>capital:{result.capital}</p>
				    <p>region:{result.region}</p>
				    <p>flag:{result.flag}</p>
                </div>
			{/each}
		</div>
	{/if}
`,
	form_action: `
export const actions = {
	default: async ({ request, fetch }) => {
		const formData = await request.formData();
		const countryName = formData.get('country');

		return fetch(\`https://restcountries.com/v3.1/name/\${countryName}\`)
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
