<script lang="ts">
	import { Avatar } from 'flowbite-svelte';
	import { bestOffice } from '../../../stores/stores';
</script>

<div
	class="align-center flex w-1/3 flex-col bg-gradient-to-b from-blue-600 from-40% via-white via-50% to-red-700 to-60% py-10 text-center">
	<div class="mx-auto">
		<Avatar
			size="xl"
			src="/img/hacker1.webp"
			alt="London" />
	</div>
	<h3>London Hacker</h3>
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
