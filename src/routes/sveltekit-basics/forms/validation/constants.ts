export const EXAMPLE_CODE = {
	form: `
<form
			method="POST"
			action="?/validate">
			<label>Enter a number between 1 and 9:</label>
			<input
				name="number"
				type="number" />
			<Button type="submit">Submit</Button>
		</form>
		{#if form?.error}
			<p style="color: red;">{form.error}</p>
		{/if}

		{#if form?.number}
			<p>Number entered: {form.number}</p>
		{/if}
`,
	form_action: `
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

`
};
