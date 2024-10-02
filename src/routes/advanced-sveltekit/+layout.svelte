<script>
	import Breadcrumbs from '$lib/components/ui/breadcrumbs/breadcrumbs.svelte';
</script>

<Breadcrumbs />
<slot></slot>
<Breadcrumbs top={false} />
