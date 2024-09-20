<script>
	import Link from '$lib/components/ui/link/link.svelte';

	const links = [
		{ href: '/advanced-sveltekit/hooks', title: 'Hooks' },
		{ href: '/advanced-sveltekit/page-options', title: 'Page options' },
		{ href: '/advanced-sveltekit/link-options', title: 'Link options' },
		{ href: '/advanced-sveltekit/advanced-routing', title: 'Advanced routing' },
		{ href: '/advanced-sveltekit/advanced-loading', title: 'Advanced loading' },
		{ href: '/advanced-sveltekit/environment-variables', title: 'Environment variables' }
	];
</script>

<h1>Advanced Sveltekit</h1>

<ul>
	{#each links as { href, title }}
		<li>
			<Link {href}>{title}</Link>
		</li>
	{/each}
</ul>
