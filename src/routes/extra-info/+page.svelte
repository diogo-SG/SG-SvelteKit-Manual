<script>
	import { SVELTE_PROS_CONS_LIST } from './constants';
</script>

<h1>Extra info and resources</h1>

<h2>Advantages and disadvantages of Svelte / Sveltekit</h2>

<p>
	Svelte is a great choice for building web applications, but it's not perfect. Here are
	some of the pros and cons of using Svelte:
</p>

<ul>
	<h3>Advantages:</h3>
	{#each SVELTE_PROS_CONS_LIST as { title, isPro, description }}
		<li>
			{#if isPro}
				<strong>{title}</strong>
				- {description}
			{/if}
		</li>
	{/each}
</ul>

<ul>
	<h3>Disadvantages:</h3>
	{#each SVELTE_PROS_CONS_LIST as { title, isPro, description }}
		<li>
			{#if !isPro}
				<strong>{title}</strong>
				- {description}
			{/if}
		</li>
	{/each}
</ul>

<h2>Official resources</h2>
<ul>
	<li><a href="https://svelte.dev/">Svelte</a></li>
	<li><a href="https://kit.svelte.dev/">SvelteKit</a></li>
</ul>

<h2>Component libraries</h2>
<!-- todo improve -->
<ul>
	<li>Flowbite Svelte</li>
	<li>Shadcn Svelte</li>
</ul>
