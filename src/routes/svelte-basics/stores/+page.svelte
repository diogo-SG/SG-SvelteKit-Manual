<script lang="ts">
	import CodeBlock from '$lib/components/ui/code-block/code-block.svelte';
	const readableStoreSteps = [
		`The first argument to readable is an initial value,
	which can be null or undefined if you don't have one yet;`,
		`The second argument is a start function that takes a set callback and returns a stop function;`,
		`The start function is called when the store gets its
	first subscriber;`,
		`The stop function is called when the last subscriber unsubscribes.`
	];
</script>

<h1>Stores</h1>

<p>
	Stores are a way to store and manage the state of your application. They are reactive, meaning
	that they automatically update when their value changes. Svelte provides a few built-in stores,
	but you can also create your own custom stores.
</p>

<h2>Writable stores</h2>

<p>
	A <span class="font-bold">writable store</span> has <code>set</code>, <code>update</code> and
	<code>subscribe</code> methods.
</p>

<p>
	Let's create a <span class="font-bold">stores.js</span> file to initiate our very own store that
	will have a <code>count</code> variable:
</p>

<CodeBlock>
	{`
	stores.js

	import { writable } from 'svelte/store';
	export const count = writable(0);`}
</CodeBlock>

<p>
	Next, let's create a incrementer component that will add +1 to the count variable using the <code
		>update</code
	> method:
</p>

<CodeBlock>
	{`
	Incrementer.svelte

	<script>
		import { count } from './stores.js';

		function increment() {
			count.update(n => n + 1);
		}
	<\/script>

	<button on:click={increment}>Increment</button>
	`}
</CodeBlock>

<p>And now a component that will <code>set</code> the count back to 0:</p>

<CodeBlock>
	{`
	Reset.svelte

	<script>
		import { count } from './stores.js';

		function reset() {
			count.set(0);
		}
	<\/script>

	<button on:click={reset}>Reset</button>
	`}
</CodeBlock>

<p>
	Finally, let's create a component that will <code>subscribe</code> to the count store and display the
	current count:
</p>

<CodeBlock>
	{`
	Counter.svelte

	<script>
		import { count } from './stores.js';
		import Incrementer from './Incrementer.svelte';
		import Reset from './Reset.svelte';

		let currentCount;

		count.subscribe(value => {
			currentCount = value;
		});

	<\/script>

	<Incrementer />
	<Reset />

		<p>The count is: {currentCount}</p>
	`}
</CodeBlock>

<p>
	Now, when you click the increment button, the count will increase by 1. When you click the reset
	button, the count will be set back to 0. And the counter component will always display the current
	count.
</p>

<h2>Auto-subscriptions</h2>

<p>
	The functionality on the previous example works just fine, but there's a subtle bug - the store is
	subscribed to but never unsubscribed from. This can lead to memory leaks and unexpected behaviour.
	To fix this, you'll need to declare <code>unsubscribe</code> method and call it when the component
	is destroyed:
</p>

<CodeBlock>
	{`
	Counter.svelte

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
	<\/script>

	<Incrementer />
	<Reset />

	<p>The count is: {currentCount}</p>
	`}
</CodeBlock>

<p>
	Now the store will be unsubscribed from when the component is destroyed, preventing memory leaks
	and unexpected behaviour. This is a good practice to follow when working with stores in Svelte but <span
		class="underline"
	>
		there's even a cleaner and better way</span
	>
	of solving this issue. Svelte provides an <span class="font-bold">auto-subscription</span> feature
	that automatically subscribes and unsubscribes from the store when the component is mounted and destroyed:
</p>

<CodeBlock>
	{`
	Counter.svelte

	<script>
		import { count } from './stores.js';
		import Incrementer from './Incrementer.svelte';
		import Reset from './Reset.svelte';
	<\/script>

	<Incrementer />
	<Reset />

	<p>The count is: {$count}</p>
	`}
</CodeBlock>

<p>
	By using the <code>$</code> prefix, Svelte will automatically subscribe and unsubscribe from the store
	when the component is mounted and destroyed. This is a cleaner and more efficient way to work with
	stores in Svelte.
</p>

<h2>Readable stores</h2>

<p>
	A <span class="font-bold">readable store</span> has a <code>subscribe</code> method but no
	<code>set</code>
	or <code>update</code> methods. It's useful when you want to expose a value to other components
	but don't want them to change it. In our <span class="font-bold">stores.js</span> file, let's
	create a readable store that will have a <code>time</code> variable:
</p>

<CodeBlock>
	{`
	stores.js

	import { readable } from 'svelte/store';

	export const time = readable(new Date(), function start(set) {
		const interval = setInterval(() => {
			set(new Date());
		}, 1000);

		return function stop() {
			clearInterval(interval);
		};
	});
	`}
</CodeBlock>

<p>Let's break the previous code step by step:</p>
<ul>
	{#each readableStoreSteps as step}
		<li>- {step}</li>
	{/each}
</ul>

<h2>Derived stores</h2>

<p>
	A <span class="font-bold">derived store</span> is a store that is derived from one or more other
	stores. It's useful when you want to combine multiple stores into a single store. In our
	<span class="font-bold">secondStore.js</span>
	file, let's create a <code>derived</code> store that will have a <code>doubleTime</code> variable:
</p>

<CodeBlock>
	{`
	secondStore.js

	import { derived } from 'svelte/store';
	import { time } from './stores.js';

	export const doubleTime = derived(time, $time => $time * 2);
	`}
</CodeBlock>

<h2>Custom stores</h2>

<p>
	As long as an object correctly implements the <code>subscribe</code> method, it's a store. Beyond
	that, anything goes. It's very easy, therefore, to create custom stores with domain-specific
	logic. Using the previous <code>count</code> example, let's create an
	<span class="font-bold">increment</span>
	and <span class="font-bold">reset</span> methods to avoid exposing the <code>set</code> and
	<code>update</code> methods:
</p>

<CodeBlock>
	{`
	stores.js

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
	`}
</CodeBlock>

<p>And in our <span class="font-bold">Counter.svelte</span> component:</p>

<CodeBlock>
	{`
	Counter.svelte

	<script>
		import { count } from './stores.js';
	<\/script>

	<button on:click={count.increment}>Increment</button>
	<button on:click={count.reset}>Reset</button>

	<p>The count is: {$count}</p>
	`}
</CodeBlock>

<p>
	Now the <code>count</code> store only exposes the <code>increment</code> and <code>reset</code>
	methods, making it easier to work with the store in other components.
</p>
