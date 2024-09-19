<script lang="ts">
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
	display a message to the user. When handling expected errors, use the
	<code>error</code>
	property of the
	<code>load</code>
	function in your +page.server.ts file.
</p>

<h3>Example</h3>
<CodeWrapper
	header="/expected-error/+page.svelte.ts"
	code={CODE_EXAMPLES.expectedError} />
