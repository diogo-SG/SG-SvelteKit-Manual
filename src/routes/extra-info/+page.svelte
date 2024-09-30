<script>
	import {
		SVELTE_LIBRARIES_LIST,
		SVELTE_PROS_CONS_LIST,
		SVELTE_RESOURCES_LIST
	} from './constants';
</script>

<h1>Extra info and resources</h1>

<p>
	Svelte is a great choice for building web applications, but it's not perfect. Let's go
	through some of the pros and cons of using Svelte.
</p>

<ul>
	<p class="font-bold">Advantages:</p>
	{#each SVELTE_PROS_CONS_LIST as { title, isPro, description }}
		<li>
			{#if isPro}
				<em>{title}</em>
				- {description}
			{/if}
		</li>
	{/each}
</ul>

<ul>
	<p class="font-bold">Disadvantages:</p>
	{#each SVELTE_PROS_CONS_LIST as { title, isPro, description }}
		<li>
			{#if !isPro}
				<em>{title}</em>
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
