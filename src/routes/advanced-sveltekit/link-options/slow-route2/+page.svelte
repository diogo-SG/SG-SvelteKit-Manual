<script>
	import Link from '$lib/components/ui/link/link.svelte';
	import { ChevronLeftOutline } from 'flowbite-svelte-icons';

	const src = '/img/sloth.png';
</script>

<Link href="../link-options">
	<div class="flex items-center text-xs">
		<ChevronLeftOutline /> Back to the Link options section
	</div>
</Link>

<div class="flex h-full w-full flex-col items-center justify-center gap-3">
	<h1 class="text-primary-700">Not preloaded!</h1>
	<img
		{src}
		width="350"
		alt="sloth" />
</div>
