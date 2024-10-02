<script lang="ts">
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import Link from '$lib/components/ui/link/link.svelte';
	import { page } from '$app/stores';
	import { CODE_EXAMPLES } from './constants';
</script>

<h1>Errors and redirects</h1>

<p>
	SvelteKit defines two types of errors: <i>expected errors</i>
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
	function in your
	<code>+page.server.ts</code>
	file. This will display the error message to the user in the page.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText="/expected-error/+page.svelte.ts"
		code={CODE_EXAMPLES.expectedError} />
</div>

<h2>Unexpected errors</h2>
<p>
	Unexpected errors are errors that you don't anticipate, so they're assumed to be a bug
	in our app. For example, if you try to access a property of an object that doesn't
	exist, you'll get an error. In this case, SvelteKit will display a generic error message
	to the user, and its message and stack trace will be logged to the console. It will also
	redact the error message and replace it with a generic message and the 500 status code,
	since error messages can contain sensitive information.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText="/unexpected-error/+page.svelte.ts"
		code={CODE_EXAMPLES.unexpectedError} />
</div>

<h2>Customizing error pages</h2>
We can customize error pages by creating a +error.svelte component. If placed in the root routes
directory, it will be used for all errors. If placed in a specific route directory, it will
be used for all errors in that route.

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText="/custom-error-page/+error.svelte"
		code={CODE_EXAMPLES.customErrorPage} />
</div>

<div class="flex justify-center gap-3">
	<Link
		isInternal
		href={$page.route.id + '/expected-error'}>
		Expected error
	</Link>

	<Link
		isInternal
		href={$page.route.id + '/unexpected-error'}>
		Unexpected error
	</Link>

	<Link
		isInternal
		href={$page.route.id + '/custom-error-page'}>
		Custom error
	</Link>
</div>

<h2>Fallback errors</h2>
<p>
	If things go really wrong, like errors occurring when loading the root layout data or
	when rendering the error page, SvelteKit will fall back to a static error page. We can
	customize this page by creating a <code>error.html</code>
	file in the
	<code>src</code>
	directory.
</p>

<ul>
	<p class="font-bold">This file can include the following tags:</p>
	<li>
		<code>%sveltekit.status%</code>
		- the HTTP status code;
	</li>
	<li>
		<code>%sveltekit.error.message%</code>
		- the error message.
	</li>
</ul>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText="src/error.html"
		code={CODE_EXAMPLES.fallbackErrorPage} />
</div>

<h2>Redirects</h2>
<p>
	SvelteKit also allows us to use the <em>throw</em>
	mechanism to redirect one page to another. You can throw
	<em>redirect(...)</em>
	in the load function, form actions, API routes and the handle hook (which will be discussed
	later).
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText="/redirect/+page.svelte"
		code={CODE_EXAMPLES.redirects} />
</div>

<p>Go to the redirect page, which will bring you back to this one.</p>
<div class="flex justify-center">
	<Link
		isInternal
		href={$page.route.id + '/redirects'}>
		Redirect me
	</Link>
</div>
