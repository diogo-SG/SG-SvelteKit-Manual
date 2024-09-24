import { redirect } from '@sveltejs/kit';

export const actions = {
	default: ({ cookies, url }) => {
		console.log('url.pathname', url);
		// we set path to '/' to make sure the cookie is available in all routes
		cookies.set('login', 'true', { path: '/' });
		throw redirect(303, `/advanced-sveltekit/advanced-routing/account-settings`);
	}
};
