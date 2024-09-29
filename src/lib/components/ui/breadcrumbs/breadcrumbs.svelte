<script lang="ts">
	import Link from '../link/link.svelte';

	export let currentRouteTitle: string;
	export let prevPage: { title: string | null; link: string } | null;
	export let nextPage: { title: string | null; link: string } | null;
</script>

<div class="flex w-full justify-between border-b px-3 pb-1">
	<div class="mw-1/4 text-left">
		{#if prevPage && prevPage.title}
			<Link href={prevPage.link}>
				« Previous: {prevPage?.title}
			</Link>
		{/if}
	</div>
	<div class="w-2/4 text-center font-bold">{currentRouteTitle}</div>
	<div class="w-1/4 text-right">
		{#if nextPage && nextPage.title}
			<Link href={nextPage.link}>Next: {nextPage.title} »</Link>
		{/if}
	</div>
</div>
