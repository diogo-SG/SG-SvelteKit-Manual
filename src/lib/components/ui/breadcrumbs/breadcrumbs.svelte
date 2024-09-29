<script lang="ts">
	import Link from '../link/link.svelte';

	export let currentRouteTitle: string;
	export let prevPage: { title: string | null; link: string } | null;
	export let nextPage: { title: string | null; link: string } | null;
</script>

<div class="flex w-full justify-between border-b px-3 pb-1">
	{#if prevPage && prevPage.title}
		<div>
			<Link href={prevPage.link}>
				« Previous: {prevPage?.title}
			</Link>
		</div>
	{/if}
	<div class="font-bold">{currentRouteTitle}</div>
	{#if nextPage && nextPage.title}
		<div>
			<Link href={nextPage.link}>Next: {nextPage.title} »</Link>
		</div>
	{/if}
</div>
