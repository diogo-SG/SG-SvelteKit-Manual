export const actions = {
	default: async ({ request, fetch }) => {
		const formData = await request.formData();
		const movieTitle = formData.get('movieTitle');

		return fetch(`https://freetestapi.com/api/v1/movies?search=${movieTitle}`)
			.then((response) => response.json())
			.then((data) => {
				return {
					searchResults: data
				};
			});
	}
};
