<script lang="ts">
	export let data: any;
	console.log(data);
</script>

<h1>Loading data</h1>

<p>Here's a selection of (somewhat) funny jokes.</p>
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
