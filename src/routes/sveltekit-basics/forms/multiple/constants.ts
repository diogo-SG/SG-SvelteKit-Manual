export const EXAMPLE_CODE = {
	form: `
	<script lang="ts">
        import Button from '$lib/components/ui/button/button.svelte';
		import { enhance } from '$app/forms';

        export let form;
        $: console.log(form);
    </script>

    <form 
	method="POST"
	use:enhance
	action="?/search">
		<label for="country">Search for a country:</label>
		<input
			id="country"
			name="country"
			type="text"
			placeholder="Enter a country name" />
                
		<Button type="submit">Search</Button>
	</form>

	<form
	method="POST"
    use:enhance
	action="?/getTenCountries">
		<Button
			type="submit"
			name="getTenCountries">
			Get 10 countries
		</Button>
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

	{#if form?.countries}
		<h2>10 countries</h2>
		<div>
			{#each form.countries as country}
				<div>
					<p>{country.name.common}</p>
				    <p>capital:{country.capital}</p>
				    <p>region:{country.region}</p>
				    <p>flag:{country.flag}</p>
				</div>
			{/each}
		</div>
	{/if}
`,
	form_action: `
export const actions = {
	getTenCountries: async ({ fetch }) => {
		return fetch('https://restcountries.com/v3.1/all')
			.then((response) => response.json())
			.then((data) => {
				return {
					countries: data.slice(0, 10)
				};
			});
	},
	search: async ({ request, fetch }) => {
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
