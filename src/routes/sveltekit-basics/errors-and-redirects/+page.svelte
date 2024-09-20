<script lang="ts">
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import Link from '$lib/components/ui/link/link.svelte';
	import { page } from '$app/stores';
	import { CODE_EXAMPLES } from './constants';
</script>

<h1>Errors and redirects</h1>

<p>
	Sveltekit defines two types of errors: <i>expected errors</i>
	and
	<i>unexpected errors</i>
	.
</p>

<h2>Expected errors</h2>
<p>
	Expected errors are errors that you anticipate and handle in your code. For example, if
	you try to fetch data from an API and the request fails, you can catch the error and
	display a message to the user. Essentially, we're telling SvelteKit that we know the
	error can happen and we're handling it accordingly. When handling expected errors, use
	the
	<code>error</code>
	property of the
	<code>load</code>
	function in your +page.server.ts file. This will display the error message to the user in
	the page.
</p>

<h3>Example</h3>
<CodeWrapper
	headerText="/expected-error/+page.svelte.ts"
	code={CODE_EXAMPLES.expectedError} />

<Link href={$page.route.id + '/expected-error'}>Go to the expected error page</Link>

<h2>Unexpected errors</h2>
<p>
	Unexpected errors are errors that you don't anticipate, so they're assumed to be a bug
	in our app. For example, if you try to access a property of an object that doesn't
	exist, you'll get an error. In this case, SvelteKit will display a generic error message
	to the user, and its message and stack trace will be logged to the console. It will also
	redact the error message and replace it with a generic message and the 500 status code,
	since error messages can contain sensitive information.
</p>

<CodeWrapper
	headerText="/unexpected-error/+page.svelte.ts"
	code={CODE_EXAMPLES.unexpectedError} />
<Link href={$page.route.id + '/unexpected-error'}>Go to the unexpected error page</Link>

<h2>Customizing error pages</h2>
We can customize error pages by creating a +error.svelte component. If placed in the root routes
directory, it will be used for all errors. If placed in a specific route directory, it will
be used for errors in that route. for all errors. If placed in a specific route directory,
it will be used for errors in that route.

<CodeWrapper
	headerText="/custom-error-page/+error.svelte"
	code={CODE_EXAMPLES.customErrorPage} />

<Link href={$page.route.id + '/custom-error-page'}>Go to the custom error page</Link>

<h2>Fallback errors</h2>
<p>
	If things to really wrong, like errors occurring when loading the root layout data or
	when rendering the error page, Sveltekit will fall back to a static error page. We can
	customize this page by creating a <code>error.html</code>
	file in the src directory.
</p>

<b>This file can include the following tags:</b>
<ul>
	<li>
		<code>%sveltekit.status%</code>
		- the HTTP status code
	</li>
	<li>
		<code>%sveltekit.error.message%</code>
		- the error message
	</li>
</ul>

<CodeWrapper
	headerText="src/error.html"
	code={CODE_EXAMPLES.fallbackErrorPage} />

<h2>Redirects</h2>
<p>
	Sveltekit also allows us to use the throw mechanism to redirect one page to another. You
	can throw redirect(...) in the load function, form actions, API routes and the handle
	hook (which will be discussed later).
</p>

<CodeWrapper
	headerText="/redirect/+page.svelte"
	code={CODE_EXAMPLES.redirects} />

<Link href={$page.route.id + '/redirects'}>
	Go to the redirect page, which will bring you back to this one
</Link>
