<script lang="ts">
	import 'highlight.js/styles/base16/dracula.css';
	import '../app.css';
	import Navbar from '$lib/components/ui/navbar/Navbar.svelte';
</script>

<div class="flex min-h-screen w-full flex-col">
	<Navbar />
	<main
		class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
		<slot></slot>
	</main>
</div>
