import { redirect } from '@sveltejs/kit';

export function load({ cookies, url }) {
	if (!cookies.get('login')) {
		throw redirect(
			303,
			`/advanced-sveltekit/advanced-routing/login?redirectTo=${url.pathname}`
		);
	}
}
