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

		return fetch(`https://restcountries.com/v3.1/name/${countryName}`)
			.then((response) => response.json())
			.then((data) => {
				return {
					searchResults: data
				};
			});
	}
};
