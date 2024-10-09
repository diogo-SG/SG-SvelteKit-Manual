<script lang="ts">
	import Link from '$lib/components/ui/link/link.svelte';
	import { ChevronLeftOutline } from 'flowbite-svelte-icons';

	export let data;
</script>

<Link href="/advanced-sveltekit/advanced-routing">
	<div class="flex items-center text-xs">
		<ChevronLeftOutline /> Back to the Advanced Routing section
	</div>
</Link>
<div class="flex h-full w-full flex-col items-center justify-center gap-3">
	<h1 class="text-primary-700">{data.greeting}</h1>
	<p class="mt-[2rem] text-[5rem]">👋🏼</p>
</div>
