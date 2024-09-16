<script lang="ts">
	import 'highlight.js/styles/base16/dracula.css';
	import { CodeBlock } from 'svhighlight';

	export let headerText: string;
	export let code: string;
</script>

<CodeBlock language="svelte" {headerText} {code} />
