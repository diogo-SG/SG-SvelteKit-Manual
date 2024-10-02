<script lang="ts">
	import { page } from '$app/stores';
	import { ChevronLeftOutline, ChevronRightOutline } from 'flowbite-svelte-icons';
	import Link from '../link/link.svelte';
	import { NAVBAR } from '../navbar/constants';

	const breadcrumbsList = NAVBAR.flatMap(
		(item) => (item.modules ? item.modules : item) || []
	).map((navItem, index) => ({
		...navItem,
		id: index + 1
	}));

	$: currentPage = breadcrumbsList.find(
		(breadcrumb) => breadcrumb.path === $page.url.pathname
	);

	$: prevPage = breadcrumbsList.find(
		(breadcrumb) =>
			currentPage && currentPage?.id > 1 && breadcrumb.id === currentPage.id - 1
	);

	$: nextPage = breadcrumbsList.find(
		(breadcrumb) =>
			currentPage &&
			currentPage?.id < breadcrumbsList.length &&
			breadcrumb.id === currentPage.id + 1
	);

	export let top = true;
</script>

{#if currentPage}
	<div
		class="flex w-full justify-between {top
			? 'border-b pb-1'
			: 'h-[1rem] border-t pt-2'} px-3 text-xs">
		<div class="text-left">
			{#if prevPage && prevPage?.label}
				<Link href={prevPage?.path}>
					<ChevronLeftOutline class="pb-[0.156rem]" />
					{prevPage?.label}
				</Link>
			{/if}
		</div>
		<div class="text-right">
			{#if nextPage && nextPage?.label}
				<Link href={nextPage?.path}>
					{nextPage?.label}
					<ChevronRightOutline class="pb-[0.156rem]" />
				</Link>
			{/if}
		</div>
	</div>
{/if}
