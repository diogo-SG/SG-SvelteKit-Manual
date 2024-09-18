<script>
	const advancedSvelteNav = [
		{
			id: 1,
			title: 'Motion',
			href: '/advanced-svelte/motion'
		},
		{
			id: 2,
			title: 'Transitions',
			href: '/advanced-svelte/transitions'
		},
		{
			id: 3,
			title: 'Actions',
			href: '/advanced-svelte/actions'
		},
		{
			id: 4,
			title: 'Advanced Bindings',
			href: '/advanced-svelte/advanced-bindings'
		},

		{
			id: 5,
			title: 'Classes and Styles',
			href: '/advanced-svelte/classes-and-styles'
		},
		{
			id: 6,
			title: 'Component Composition',
			href: '/advanced-svelte/component-composition'
		},
		{
			id: 7,
			title: 'Context API',
			href: '/advanced-svelte/context-api'
		},
		{
			id: 8,
			title: 'Special Elements',
			href: '/advanced-svelte/special-elements'
		},
		{ id: 9, title: 'Module Context', href: '/advanced-svelte/module-context' }
	];
</script>

<h1>Advanced Svelte topis:</h1>
<ul>
	{#each advancedSvelteNav as { title, href }}
		<li>
			<a {href}>{title}</a>
		</li>
	{/each}
</ul>
