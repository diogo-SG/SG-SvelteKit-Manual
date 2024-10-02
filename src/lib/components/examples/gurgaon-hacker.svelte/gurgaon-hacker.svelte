<script lang="ts">
	import { Avatar } from 'flowbite-svelte';
	import { bestOffice, timeInIndia } from '../../../stores/stores';
</script>

<div
	class="align-center flex w-1/3 flex-col gap-5 bg-gradient-to-t from-green-300 via-transparent to-orange-300 py-10 text-center">
	<div class="relative mx-auto">
		{#if $bestOffice === 'Gurgaon'}
			<div class="absolute right-[-15px] top-[-20px] w-[60px]">
				<img src="/img/trophy.png" />
			</div>
		{/if}
		<Avatar
			size="xl"
			src="/img/hacker3.avif"
			alt="Gurgaon" />
	</div>
	<h3>Gurgaon Hacker</h3>
	<div class="flex flex-col text-center">
		<b>Right now it's:</b>
		{$timeInIndia}
	</div>
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
