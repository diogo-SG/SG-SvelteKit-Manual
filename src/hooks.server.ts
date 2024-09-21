export async function handle({ event, resolve }) {
	if (event.url.pathname === '/advanced-sveltekit/hooks/hijacked') {
		return new Response(
			'This is a brand new route, not listed anywhere in the routes folder structure!'
		);
	}

	return await resolve(
		event,
		event.url.pathname === '/advanced-sveltekit/hooks/hotpink'
			? {
					transformPageChunk: ({ html }) =>
						html.replace('<body', '<body style="background: hotpink"')
				}
			: {}
	);
}
