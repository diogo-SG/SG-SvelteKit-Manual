<script>
	import Link from '$lib/components/ui/link/link.svelte';

	const sveltekitBasicsList = [
		{ title: 'Loading data', path: '/sveltekit-basics/loading-data' },
		{ title: 'Shared modules', path: '/sveltekit-basics/shared-modules' },
		{ title: 'Forms', path: '/sveltekit-basics/forms' },
		{ title: 'Api routes', path: '/sveltekit-basics/api-routes' },
		{ title: 'Stores', path: '/sveltekit-basics/stores' },
		{ title: 'Errors and redirects', path: '/sveltekit-basics/errors-and-redirects' }
	];
</script>

<h1>A list of basic Sveltekit topics</h1>
<ul>
	{#each sveltekitBasicsList as { title, path }}
		<li>
			<Link href={path}>{title}</Link>
		</li>
	{/each}
</ul>
