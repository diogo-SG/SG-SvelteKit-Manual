<script>
	import Link from '$lib/components/ui/link/link.svelte';
	import {
		SVELTE_LIBRARIES_LIST,
		SVELTE_PROS_CONS_LIST,
		SVELTE_RESOURCES_LIST
	} from './constants';
</script>

<h1 class="text-primary-700">Extra info</h1>

<p>
	Svelte is a great choice for building web applications, but it's not perfect. Let's go
	through some of the pros and cons of using Svelte.
</p>

<ul>
	<p class="font-bold">Advantages:</p>
	{#each SVELTE_PROS_CONS_LIST as { title, isPro, description }}
		{#if isPro}
			<li>
				<em>{title}</em>
				- {description}
			</li>
		{/if}
	{/each}
</ul>

<ul>
	<p class="font-bold">Disadvantages:</p>
	{#each SVELTE_PROS_CONS_LIST as { title, isPro, description }}
		{#if !isPro}
			<li>
				<em>{title}</em>
				- {description}
			</li>
		{/if}
	{/each}
</ul>

<ul>
	<p>Official resources:</p>
	{#each SVELTE_RESOURCES_LIST as { href, title }}
		<li>
			<Link {href}>{title}</Link>
		</li>
	{/each}
</ul>

<ul>
	<p>Component libraries</p>
	{#each SVELTE_LIBRARIES_LIST as { href, title }}
		<li>
			<Link {href}>{title}</Link>
		</li>
	{/each}
</ul>
