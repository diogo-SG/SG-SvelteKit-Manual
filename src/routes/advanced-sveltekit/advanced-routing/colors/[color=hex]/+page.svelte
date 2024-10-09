<script lang="ts">
	import { page } from '$app/stores';
	import Link from '$lib/components/ui/link/link.svelte';
	import { ChevronLeftOutline } from 'flowbite-svelte-icons';
</script>

<Link href="/advanced-sveltekit/advanced-routing">
	<div class="flex items-center text-xs">
		<ChevronLeftOutline /> Back to the Advanced Routing section
	</div>
</Link>

<div
	class="color"
	style="background-color:#{$page.params.color} ">
	<h1>This is the {$page.params.color} page!</h1>
</div>

<style>
	.color {
		padding: 50px 0;
		border-radius: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.color h1 {
		color: white;
		mix-blend-mode: difference;
	}
</style>
