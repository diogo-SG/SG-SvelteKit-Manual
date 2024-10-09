export const actions = {
	default: async ({ request, fetch }) => {
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
