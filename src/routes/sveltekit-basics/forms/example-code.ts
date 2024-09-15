export const actionExampleCode = `
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
	`;

export const actionExampleCode2 = `
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
    `;

export const actionExampleCode3 = `validate: async ({ request }) => {
		const formData = await request.formData();
		const number = Number(formData.get('number'));
		console.log('number', number);
		if (!number) {
			return fail(418, { error: 'Number is required' });
		}
		if (typeof number === 'number') {
			if (number < 0) {
				return fail(418, { error: 'Number must be greater than 0' });
			}
			if (number > 10) {
				return fail(418, { error: 'Number must be less than 10' });
			}
		}
		return { number };
	}`;
