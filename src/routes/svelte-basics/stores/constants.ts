export const HEADERS = {
	STORES: 'stores.ts',
	DERIVEDSTORE: 'derivedStore.ts',
	INCREMENTER: 'Incrementer.svelte',
	RESET: 'Reset.svelte',
	COUNTER: 'Counter.svelte',
	APP: 'App.svelte'
};

export const WRITABLESTORES = {
	STORES: `
		import { writable } from 'svelte/store';

		export const count = writable(0);
	`,
	INCREMENTER: `
	<script>
		import { count } from './stores.ts';

		function increment() {
			count.update(n => n + 1);
		}
	</script>

	<button on:click={increment}>Increment</button>
	`,
	RESET: `
	<script>
		import { count } from './stores.ts';
		function reset() {
			count.set(0);
		}
	</script>

	<button on:click={reset}>Reset</button>
	`,
	COUNTER: `
	<script>
		import { count } from './stores.ts';
		import Incrementer from './Incrementer.svelte';
		import Reset from './Reset.svelte';

		let currentCount;

		count.subscribe(value => {
			currentCount = value;
		});

	</script>

	<Incrementer />
	<Reset />

	<p>The count is: {currentCount}</p>
	`
};

export const AUTOSUBSCRIPTION = {
	COUNTER: `
	<script>
		import { count } from './stores.ts';
		import { onDestroy } from 'svelte';
		import Incrementer from './Incrementer.svelte';
		import Reset from './Reset.svelte';

		let currentCount;
		let unsubscribe = count.subscribe(value => {
			currentCount = value;
		});

		// Unsubscribe when the component is destroyed
		onDestroy(unsubscribe);
	</script>

	<Incrementer />
	<Reset />

	<p>The count is: {currentCount}</p>
	`,
	COUNTER_REACTIVE: `
	<script>
		import { count } from './stores.ts';
		import Incrementer from './Incrementer.svelte';
		import Reset from './Reset.svelte';
	</script>

	<Incrementer />
	<Reset />

	<p>The count is: {$count}</p>
	`
};

export const READABLESTORE = {
	STORES: `
		import { readable } from 'svelte/store';

		export const time = readable(new Date(), function start(set) {
			const interval = setInterval(() => {
			set(new Date());
			}, 1000);

			return function stop() {
				clearInterval(interval);
			};
		});
	`,
	DERIVEDSTORE: `
		import { derived } from 'svelte/store';
		import { time } from './stores.ts';

		export const doubleTime = derived(time, $time => $time * 2);
	`,
	STEPS: [
		`The first argument to readable is an initial value,
	which can be null or undefined if you don't have one yet;`,
		`The second argument is a start function that takes a set callback and returns a stop function;`,
		`The start function is called when the store gets its
	first subscriber;`,
		`The stop function is called when the last subscriber unsubscribes.`
	]
};

export const CUSTOMSTORE = {
	STORES: `
		import { writable } from 'svelte/store';

		function createCount() {
		const { subscribe, set, update } = writable(0);

			return {
				subscribe,
				increment: () => update((n) => n + 1),
				reset: () => set(0)
			};
		}

		export const count = createCount();
	`,
	COUNTER: `
	<script>
		import { count } from './stores.ts';
	</script>

	<button on:click={count.increment}>Increment</button>
	<button on:click={count.reset}>Reset</button>

	<p>The count is: {$count}</p>
	`
};

export const STORE_BINDINGS = {
	INPUT: `
	<script>
		import { name, greeting } from './stores.ts';
	</script>

	<h1>{$greeting}</h1>
	<input bind:value={$name} />

	<button on:click={() => $name += '!'}>
		Add exclamation mark!
	</button>
	`
};

export const EXAMPLE_PAGE = {
	STORES_FILE: `
	import { writable, readable, derived } from 'svelte/store';

	// Readable store example
	function readableCallback(set: (value: string) => void, timeZone: string) {
		// this function will be called when the store is created
		const interval = setInterval(() => {
			set(new Date().toLocaleTimeString('en-US', { timeZone }));
		}, 1000);

		// this function will be called when the store is destroyed
		return function stop() {
			clearInterval(interval);
		};
	}

	export const timeInPortugal = readable(
		new Date().toLocaleTimeString('en-US', { timeZone: 'Europe/Lisbon' }),
		(set) => readableCallback(set, 'Europe/Lisbon')
	);

	export const timeInIndia = readable(
		new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' }),
		(set) => readableCallback(set, 'Asia/Kolkata')
	);

	export const timeInUK = readable(
		new Date().toLocaleTimeString('en-US', { timeZone: 'Europe/London' }),
		(set) => readableCallback(set, 'Europe/London')
	);

	// Custom store example
	function decideBestOffice() {
		const { subscribe, set } = writable('All of them are great!');

		return {
			subscribe,
			reset: () => set('All of them are great!'),
			portugal: () => set('Lisbon'),
			india: () => set('Gurgaon'),
			uk: () => set('London')
		};
	}

	export const bestOffice = decideBestOffice();

	// Derived store example
	// Kind of a useless one to be honest
	export const bestOfficeAllCaps = derived(bestOffice, ($bestOffice) =>
		$bestOffice.toUpperCase()
	);
	`,

	SVELTE_PAGE: `
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
	`,

	GURGAON_HACKER: `
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
	`
};
