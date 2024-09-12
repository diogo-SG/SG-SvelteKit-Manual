<script>
	const svelteBasicsNav = [
		{
			id: 1,
			title: 'Component Anatomy',
			href: '/svelte-basics/component-anatomy'
		},
		{
			id: 2,
			title: 'Reactivity',
			href: '/svelte-basics/reactivity'
		},
		{
			id: 3,
			title: 'Props',
			href: '/svelte-basics/props'
		},
		{
			id: 4,
			title: 'Logic',
			href: '/svelte-basics/logic'
		},
		{
			id: 5,
			title: 'Events',
			href: '/svelte-basics/events'
		}
	];
</script>

<h1>A list of basic Svelte topics</h1>
<ul>
	{#each svelteBasicsNav as { title, href }}
		<li>
			<a {href}>{title}</a>
		</li>
	{/each}
</ul>
