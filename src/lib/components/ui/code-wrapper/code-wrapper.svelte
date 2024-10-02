<script lang="ts">
	import 'highlight.js/styles/base16/dracula.css';
	import { CodeBlock } from 'svhighlight';

	export let headerText: string = '';
	export let code: string;
	export let showHeader = true;
</script>

<div class="code_wrapper">
	<CodeBlock
		{showHeader}
		showLineNumbers={false}
		language="svelte"
		{headerText}
		{code} />
</div>
