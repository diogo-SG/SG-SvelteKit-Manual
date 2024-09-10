<script lang="ts">
	export let data: any;
</script>

{#if data?.props.jokes?.length === 0}
	<p>Loading jokes...</p>
{:else}
	{#each data.props.jokes as joke}
		<p>
			<span class="setup">
				{joke.setup}
			</span> <span class="punchline">{joke.punchline}</span>
		</p>
	{/each}
{/if}

<style>
	.setup {
		font-weight: bold;
	}
	.punchline {
		font-style: italic;
	}
</style>
