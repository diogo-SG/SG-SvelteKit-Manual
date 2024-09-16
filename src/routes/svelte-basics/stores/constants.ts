export const HEADERS = {
	STORES: 'stores.js',
	DERIVEDSTORE: 'derivedStore.js',
	INCREMENTER: 'Incrementer.svelte',
	RESET: 'Reset.svelte',
	COUNTER: 'Counter.svelte'
};

export const WRITABLESTORES = {
	STORES: `
	<script>
		import { writable } from 'svelte/store';
		export const count = writable(0);
	</script>
	`,
	INCREMENTER: `
	<script>
		import { count } from './stores.js';

		function increment() {
			count.update(n => n + 1);
		}
	</script>

	<button on:click={increment}>Increment</button>
	`,
	RESET: `
	<script>
		import { count } from './stores.js';
		function reset() {
			count.set(0);
		}
	</script>

	<button on:click={reset}>Reset</button>
	`,
	COUNTER: `
	<script>
		import { count } from './stores.js';
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
		import { count } from './stores.js';
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
		import { count } from './stores.js';
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
	<script>
		import { readable } from 'svelte/store';

		export const time = readable(new Date(), function start(set) {
			const interval = setInterval(() => {
			set(new Date());
			}, 1000);

			return function stop() {
				clearInterval(interval);
			};
		});
	</script>
	`,
	DERIVEDSTORE: `
	<script>
		import { derived } from 'svelte/store';
		import { time } from './stores.js';

		export const doubleTime = derived(time, $time => $time * 2);
	</script>
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
	<script>
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
	</script>
	`,
	COUNTER: `
	<script>
		import { count } from './stores.js';
	</script>

	<button on:click={count.increment}>Increment</button>
	<button on:click={count.reset}>Reset</button>

	<p>The count is: {$count}</p>
	`
};
