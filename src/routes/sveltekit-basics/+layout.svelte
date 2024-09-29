<script>
	import Breadcrumbs from '$lib/components/ui/breadcrumbs/breadcrumbs.svelte';

	export let data;
	const {
		props: { currentRouteTitle, prevPage, nextPage }
	} = data;
</script>

<Breadcrumbs
	{currentRouteTitle}
	{prevPage}
	{nextPage} />
<slot></slot>
