<script lang="ts">
	import { Avatar } from 'flowbite-svelte';
	import { bestOffice, timeInUK } from '../../../stores/stores';
</script>

<div
	class="align-center flex w-1/3 flex-col gap-5 bg-gradient-to-b from-blue-600 from-40% via-white via-50% to-red-700 to-60% py-10 text-center">
	<div class="relative mx-auto">
		{#if $bestOffice === 'London'}
			<div class="absolute right-[-15px] top-[-20px] w-[60px]">
				<img src="/img/trophy.png" />
			</div>
		{/if}
		<Avatar
			size="xl"
			src="/img/hacker1.webp"
			alt="London" />
	</div>
	<h3>London Hacker</h3>
	<div class="flex flex-col text-center">
		<b>Right now it's:</b>
		{$timeInUK}
	</div>
	<p>London is the best office...</p>
	<button on:click={() => bestOffice.uk()}>Make it so</button>
</div>

<style>
	button {
		background-color: white;
		border: none;
		color: black;
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
