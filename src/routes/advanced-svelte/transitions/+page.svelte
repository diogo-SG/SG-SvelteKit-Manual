<script lang="ts">
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { CODE } from './constants';

	const fileTitle = 'App.svelte';
</script>

<h1>Transitions</h1>

<p>
	Transitions in Svelte are a way to animate elements when they are added or removed from the DOM.
	They are created using the <code>transition</code> directive. Let's import the <code>fade</code>
	function from <code>svelte/transition</code> into our <code>App.svelte</code> file and create a small
	example:
</p>

<CodeWrapper headerText={fileTitle} code={CODE.TRANSITION_FADE} />

<p>
	The <code>fade</code> function creates a fade-in and fade-out effect and its very easy to use.
</p>
