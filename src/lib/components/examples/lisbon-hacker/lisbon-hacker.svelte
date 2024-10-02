<script lang="ts">
	import { Avatar } from 'flowbite-svelte';
	import { bestOffice, timeInPortugal } from '../../../stores/stores';
</script>

<div
	class="align-center flex w-1/3 flex-col gap-5 bg-gradient-to-b from-green-600 from-30% via-yellow-200 via-40% to-red-700 to-50% py-10 text-center">
	<div class="relative mx-auto">
		{#if $bestOffice === 'Lisbon'}
			<div class="absolute right-[-15px] top-[-20px] w-[60px]">
				<img src="/img/trophy.png" />
			</div>
		{/if}
		<Avatar
			size="xl"
			src="/img/hacker2.jpeg"
			alt="Lisbon" />
	</div>
	<h3>Lisbon Hacker</h3>
	<div class="flex flex-col text-center">
		<b>Right now it's:</b>
		{$timeInPortugal}
	</div>
	<p>Lisbon is the best office...</p>
	<button on:click={() => bestOffice.portugal()}>Make it so</button>
</div>

<style>
	button {
		background-color: green;
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
