<script lang="ts">
	import GurgaonHacker from '$lib/components/examples/gurgaon-hacker.svelte/gurgaon-hacker.svelte';
	import LisbonHacker from '$lib/components/examples/lisbon-hacker/lisbon-hacker.svelte';
	import LondonHacker from '$lib/components/examples/london-hacker/london-hacker.svelte';
	import {
		bestOffice,
		bestOfficeAllCaps,
		timeInIndia,
		timeInPortugal,
		timeInUK
	} from '$lib/stores/stores';
</script>

<div class="bg-white">
	<img
		src="/img/sg_logo_horizontal.jpg"
		alt="Studio Graphene logo"
		class="mx-auto w-1/4" />
</div>
<main
	class="background flex flex-col items-center justify-center"
	class:gurgaonIsBest={$bestOffice === 'Gurgaon'}
	class:lisbonIsBest={$bestOffice === 'Lisbon'}
	class:londonIsBest={$bestOffice === 'London'}>
	<div class="bg-white bg-opacity-70 px-6 py-10">
		<div class="p-6 text-center">
			<h1>Welcome to the official Studio Graphene website!</h1>
			<sub>(not really)</sub>
		</div>
		<div class="grid w-full grid-cols-3 gap-4 pb-6 text-center">
			<div class="flex flex-col text-center">
				<b>Current time in India:</b>
				{$timeInIndia}
			</div>
			<div class="flex flex-col text-center">
				<b>Current time in Portugal:</b>
				{$timeInPortugal}
			</div>
			<div class="flex flex-col text-center">
				<b>Current time in the UK:</b>
				{$timeInUK}
			</div>
		</div>
		<div class="flex flex-col text-center">
			<b>Our best office is:</b>
			<p class="text-3xl font-extrabold">{$bestOfficeAllCaps}</p>
		</div>
		{#if $bestOffice !== 'All of them are great!'}
			<div class="flex justify-center py-5">
				<button
					class="mx-auto rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
					on:click={() => bestOffice.reset()}>
					Stop this nonsense!
				</button>
			</div>
		{/if}
	</div>
</main>

<div class="flex w-full justify-between">
	<LondonHacker />
	<GurgaonHacker />
	<LisbonHacker />
</div>

<style>
	main {
		height: 100vh;
		background-image: url('/img/office-pic.jpg');
		background-repeat: no-repeat;
		background-size: cover;
	}

	.gurgaonIsBest {
		background-image: url('/img/Flag_of_India.gif');
	}

	.lisbonIsBest {
		background-image: url('/img/Flag_of_Portugal.gif');
	}

	.londonIsBest {
		background-image: url('/img/Flag_of_the_United_Kingdom.gif');
	}
</style>
