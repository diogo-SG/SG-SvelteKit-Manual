import { fail } from '@sveltejs/kit';

export const actions = {
	validate: async ({ request }) => {
		const formData = await request.formData();
		const number = Number(formData.get('number'));

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
	}
};
