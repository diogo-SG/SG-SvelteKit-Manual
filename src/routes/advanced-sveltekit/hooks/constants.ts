export const CODE_EXAMPLES = {
	handleHook1: `
    export async function handle({ event, resolve }) {
        return await resolve(event);
    }
		`,

	handleHook2: `
    export async function handle({ event, resolve }) {
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
		`,

	handleHook3: `
    export async function handle({ event, resolve }) {
        if (event.url.pathname === '/advanced-sveltekit/hooks/hijacked') {
            return new Response(
                'This is a brand new route, not listed anywhere in the routes folder structure!'
            );
        }

        return await resolve(event);
    }
		`,

	handleEventLocals1: `
    export async function handle({ event, resolve }) {
        event.locals.greatPlaceToWork = "Studio Graphene";
        return await resolve(event);
    }
		`,

	handleEventLocals2: `
    export function load(event) {
        return {
            message: \`\${event.locals.greatPlaceToWork} is a great place to work!\`
        };
    }
		`,

	handleFetch1: `
    export async function handleFetch({ event, request, fetch }) {
        return await fetch(request);
    }
		`,

	handleFetch2: `
    export async function handleFetch({ event, request, fetch }) {
        const url = new URL(request.url);
        if (url.pathname === '/a') {
            return await fetch('/b');
        }

        return await fetch(request);
    }
		`,
	handleError1: `
    export function handleError({ event, error }) {
		console.error(error.stack);
	}
	`
};

export const REQUEST_EVENT_ITEMS = [
	{
		title: 'cookies',
		description: 'The cookies API;',
		link: 'https://learn.svelte.dev/tutorial/cookies'
	},
	{
		title: 'fetch',
		description: 'The standard Fetch API, with some extra goodies;',
		link: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API'
	},
	{
		title: 'getClientAddress()',
		description: "A function to get the client's IP address;"
	},
	{
		title: 'isDataRequest',
		description:
			'Resolves to true if the browser is requesting data for a page during client-side navigation, or false if the page or route is being requested directly;'
	},
	{
		title: 'locals',
		description: 'A place to put arbitrary data;'
	},
	{
		title: 'params',
		description: 'The route parameters;'
	},
	{
		title: 'request',
		description: 'The request object;',
		link: 'https://developer.mozilla.org/en-US/docs/Web/API/Request'
	},
	{
		title: 'route',
		description: 'An object with an id property representing the route that was matched;'
	},
	{
		title: 'setHeaders(...)',
		description: 'A function to set HTTP headers on the response;',
		link: 'https://learn.svelte.dev/tutorial/headers'
	},
	{
		title: 'url',
		description: 'A URL object representing the current request.',
		link: 'https://developer.mozilla.org/en-US/docs/Web/API/URL'
	}
];
