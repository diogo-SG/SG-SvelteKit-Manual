<script>
	import {
		SVELTE_LIBRARIES_LIST,
		SVELTE_PROS_CONS_LIST,
		SVELTE_RESOURCES_LIST
	} from './constants';
</script>

<h1>Extra info and resources</h1>

<h2>Advantages and disadvantages of Svelte / Sveltekit</h2>

<p>
	Svelte is a great choice for building web applications, but it's not perfect. Let's go
	through some of the pros and cons of using Svelte.
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

<ul>
	<h3>Official resources:</h3>
	{#each SVELTE_RESOURCES_LIST as { href, title }}
		<li>
			<a
				{href}
				class="text-[blue] underline"
				target="_blank"
				rel="noopener noreferrer">
				{title}
			</a>
		</li>
	{/each}
</ul>

<ul>
	<h3>Component libraries</h3>
	{#each SVELTE_LIBRARIES_LIST as { href, title }}
		<li>
			<a
				{href}
				class="text-[blue] underline"
				target="_blank"
				rel="noopener noreferrer">
				{title}
			</a>
		</li>
	{/each}
</ul>
