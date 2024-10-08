export const LIST_ITEMS = {
	STORES: [
		{
			title: 'page',
			desc: 'contains information about the current page;'
		},
		{
			title: 'navigating',
			desc: 'contains information about the current navigation;'
		},
		{
			title: 'updated',
			desc: 'contains true or false depending on whether a new version of the app has been detected.'
		}
	],
	PAGE: [
		{
			title: 'url',
			desc: 'the URL of the current page;',
			link: 'https://developer.mozilla.org/en-US/docs/Web/API/URL'
		},
		{
			title: 'params',
			desc: 'the route parameters of the current page;',
			link: 'https://learn.svelte.dev/tutorial/params'
		},
		{
			title: 'route',
			desc: 'an object with an id property representing the current route;'
		},
		{
			title: 'status',
			desc: 'the HTTP status code of the current page;'
		},
		{
			title: 'error',
			desc: 'the error object of the current page, if any;'
		},
		{
			title: 'data',
			desc: 'the data object of the current page, which combines the return values of all the load functions;'
		},
		{
			title: 'form',
			desc: 'the data returned from a form action.',
			link: 'https://learn.svelte.dev/tutorial/the-form-element'
		}
	]
};

export const CODE_EXAMPLES = {
	REFERENCING_PAGE: `
     <script lang="ts">
        import { page } from '$app/stores';
    </script>

    <p>This is the current url!</p>
    <code>{$page.url.pathname}</code>
`
};
