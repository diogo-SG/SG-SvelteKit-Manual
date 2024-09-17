<script>
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { CODE, HEADER } from './constants';
</script>

<h1>Sharing modules</h1>

<p>
	Shared modules are a way to share code between different parts of your SvelteKit
	application. They can be used to share functions, variables, and other code that you
	want to reuse in multiple components or pages.
</p>

<p>
	To make code available to the entirety of your application, simply place it in a file in
	the <code>src/lib</code>
	directory. You can then import this code into any component or page using the
	<code>$lib</code>
	 alias. For example:
</p>
<CodeWrapper
	headerText={HEADER.SHARED_MODULES}
	code={CODE.SHARING_MODULES} />
