<script lang="ts">
	import Link from '$lib/components/ui/link/link.svelte';
	import { ChevronLeftOutline } from 'flowbite-svelte-icons';

	export let data;
</script>

<Link href="/advanced-sveltekit/advanced-loading">
	<div class="flex items-center text-xs">
		<ChevronLeftOutline /> Back to the Advanced loading section
	</div>
</Link>
<div class="flex h-full w-full flex-col items-center justify-center gap-6">
	<h1 class="text-primary-700">Joke</h1>
	<p><b>{data.joke.setup}</b></p>
	<p>{data.joke.punchline}</p>
</div>
