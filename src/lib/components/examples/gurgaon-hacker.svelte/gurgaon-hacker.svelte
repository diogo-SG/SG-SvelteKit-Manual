<script lang="ts">
	import { Avatar } from 'flowbite-svelte';
	import { bestOffice } from '../../../stores/stores';
</script>

<div
	class="align-center flex w-1/3 flex-col bg-gradient-to-t from-green-300 via-transparent to-orange-300 py-10 text-center">
	<div class="mx-auto">
		<Avatar
			size="xl"
			src="/img/hacker3.avif"
			alt="Gurgaon" />
	</div>
	<h3>Gurgaon Hacker</h3>
	<p>Gurgaon is the best office...</p>
	<button on:click={() => bestOffice.india()}>Make it so</button>
</div>

<style>
	button {
		background-color: #4caf50;
		border: none;
		color: white;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 2px;
		cursor: pointer;
		width: 50%;
		margin: 10px auto 10px;
	}
</style>
