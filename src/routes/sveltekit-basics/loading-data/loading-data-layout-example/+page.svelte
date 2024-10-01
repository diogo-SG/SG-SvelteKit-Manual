<script lang="ts">
	export let data: any;
</script>

{#if data?.props.jokes?.length === 0}
	<p>Loading jokes...</p>
{:else}
	{#each data.props.jokes as joke}
		<p>
			<span class="font-bold">
				{joke.setup}
			</span> <span class="italic">{joke.punchline}</span>
		</p>
	{/each}
{/if}
