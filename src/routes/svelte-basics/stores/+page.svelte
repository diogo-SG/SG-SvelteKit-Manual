<script lang="ts">
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import Link from '$lib/components/ui/link/link.svelte';
	import { Accordion, AccordionItem } from 'flowbite-svelte';
	import {
		HEADERS,
		WRITABLESTORES,
		AUTOSUBSCRIPTION,
		READABLESTORE,
		CUSTOMSTORE,
		STORE_BINDINGS,
		EXAMPLE_PAGE
	} from './constants';
</script>

<h1>Stores</h1>

<p>
	Stores are a way to store and manage the state of your application, and make it
	accessible to all components that need to be aware of changes to said state. They are
	reactive, meaning that they automatically update when their value changes. Svelte
	provides a few built-in stores, but you can also create your own custom stores.
</p>

<h2>Writable stores</h2>

<p>
	A <span class="font-bold">writable store</span>
	has
	<code>set</code>
	,
	<code>update</code>
	and
	<code>subscribe</code>
	methods. This means that you can change the value of the store and subscribe to it from any
	component accessing the store.
</p>

<div class="flex flex-col gap-2">
	<p>
		Let's create a <code>stores.ts</code>
		file to initiate our very own store that will have a
		<code>count</code>
		variable:
	</p>

	<CodeWrapper
		headerText={HEADERS.STORES}
		code={WRITABLESTORES.STORES} />
</div>

<div class="flex flex-col gap-2">
	<p>
		Next, let's create a incrementer component that will add +1 to the count variable
		using the <code>update</code>
		method:
	</p>

	<CodeWrapper
		headerText={HEADERS.INCREMENTER}
		code={WRITABLESTORES.INCREMENTER} />
</div>

<div class="flex flex-col gap-2">
	<p>
		And now a component that will <code>set</code>
		the count back to 0:
	</p>

	<CodeWrapper
		headerText={HEADERS.RESET}
		code={WRITABLESTORES.RESET} />
</div>

<div class="flex flex-col gap-2">
	<p>
		Finally, let's create a component that will <code>subscribe</code>
		to the count store and display the current count:
	</p>

	<CodeWrapper
		headerText={HEADERS.COUNTER}
		code={WRITABLESTORES.COUNTER} />
</div>

<p>
	Now, when you click the increment button, the count will increase by 1. When you click
	the reset button, the count will be set back to 0. And the counter component will always
	display the current count.
</p>

<h2>Auto-subscriptions</h2>

<p>
	The functionality on the previous example works just fine, but there's a subtle bug -
	the store is subscribed to but never unsubscribed from. This can lead to memory leaks
	and unexpected behaviour. To fix this, you'll need to declare <code>unsubscribe</code>
	method and call it when the component is destroyed.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText={HEADERS.COUNTER}
		code={AUTOSUBSCRIPTION.COUNTER} />
</div>
<p>
	Now the store will be unsubscribed from when the component is destroyed, preventing
	memory leaks and unexpected behaviour. This is a good practice to follow when working
	with stores in Svelte but there's even a cleaner and better way of solving this issue.
	Svelte provides an
	<span class="font-bold">auto-subscription</span>
	feature that automatically subscribes and unsubscribes from the store when the component
	is mounted and destroyed.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText={HEADERS.COUNTER}
		code={AUTOSUBSCRIPTION.COUNTER_REACTIVE} />
</div>

<p>
	By using the <code>$</code>
	prefix, Svelte will automatically subscribe and unsubscribe from the store when the component
	is mounted and destroyed. This is a cleaner and more efficient way to work with stores in
	Svelte.
</p>

<h2>Readable stores</h2>

<p>
	A <span class="font-bold">readable store</span>
	has a
	<code>subscribe</code>
	method but no
	<code>set</code>
	or
	<code>update</code>
	methods. It's useful when you want to expose a value to other components but don't want them
	to change it.
</p>

<div class="flex flex-col gap-2">
	<p>
		In our
		<code>stores.ts</code>
		file, let's create a readable store that will have a
		<code>time</code>
		variable:
	</p>

	<CodeWrapper
		headerText={HEADERS.STORES}
		code={READABLESTORE.STORES} />
</div>

<ul>
	<p>Let's break the previous code step by step:</p>
	{#each READABLESTORE.STEPS as step}
		<li>{step}</li>
	{/each}
</ul>

<h2>Derived stores</h2>

<p>
	A <span class="font-bold">derived store</span>
	is a store that is derived from one or more other stores. It's useful when you want to combine
	multiple stores into a single store.
</p>

<div class="flex flex-col gap-2">
	<p>
		In our
		<code>derivedStore.ts</code>
		file, let's create a
		<code>derived</code>
		store that will have a
		<code>doubleTime</code>
		variable:
	</p>
	<CodeWrapper
		headerText={HEADERS.DERIVEDSTORE}
		code={READABLESTORE.DERIVEDSTORE} />
</div>

<h2>Custom stores</h2>

<p>
	As long as an object correctly implements the <code>subscribe</code>
	method, it's a store. Beyond that, anything goes. It's very easy, therefore, to create custom
	stores with domain-specific logic.
</p>

<div class="flex flex-col gap-2">
	<p>
		Using the previous
		<code>count</code>
		example, let's create an
		<span class="font-bold">increment</span>
		and
		<span class="font-bold">reset</span>
		methods to avoid exposing the
		<code>set</code>
		and
		<code>update</code>
		methods:
	</p>
	<CodeWrapper
		headerText={HEADERS.STORES}
		code={CUSTOMSTORE.STORES} />
</div>

<div class="flex flex-col gap-2">
	<p>
		And in our <code>Counter.svelte</code>
		component:
	</p>

	<CodeWrapper
		headerText={HEADERS.COUNTER}
		code={CUSTOMSTORE.COUNTER} />
</div>

<p>
	Now the <code>count</code>
	store only exposes the
	<code>increment</code>
	and
	<code>reset</code>
	methods, making it easier to work with the store in other components.
</p>

<h2>Store bindings</h2>

<p>
	In case the store has a <code>set</code>
	method, it's possible to bind its value, as you would normally do to bind values to component
	state. Let's imagine that you're exporting a writable store
	<code>name</code>
	and a derived store
	<code>greeting</code>
	from
	<code>stores.ts</code>
	.
</p>

<div class="flex flex-col gap-2">
	<p>
		In
		<code>App.svelte</code>
		, let's update the
		<code>input</code>
		element:
	</p>
	<CodeWrapper
		headerText={HEADERS.APP}
		code={STORE_BINDINGS.INPUT} />
</div>

<p>
	If the <code>input</code>
	value changes, it will now update
	<code>name</code>
	. We can also assign directly to store values inside a component. Notice that we added a
	<code>on:click</code>
	event handler that adds
	<b>!</b>
	to the
	<code>name</code>
	. The
	<code>$name += "!"</code>
	assignment is equivalent to
	<code>name.set($name + "!")</code>
	.
</p>

<h2>Stores example page</h2>
<p>
	Now that you've learned the basics of Svelte stores, let's see them in action. Click on
	the link below to see a page that uses writable, readable, and derived stores.
</p>

<div class="flex justify-center">
	<Link
		isInternal
		href="../examples/stores">
		Example page
	</Link>
</div>

<Accordion flush>
	<AccordionItem>
		<span slot="header">Stores file</span>

		<CodeWrapper
			headerText="src/lib/stores/stores.ts"
			code={EXAMPLE_PAGE.STORES_FILE} />
	</AccordionItem>
	<AccordionItem>
		<span slot="header">+page.svelte</span>

		<CodeWrapper
			headerText="routes/examples/stores/+page.svelte"
			code={EXAMPLE_PAGE.SVELTE_PAGE} />
	</AccordionItem>
	<AccordionItem>
		<span slot="header">One of the hacker components</span>

		<CodeWrapper
			headerText="src/components/examples/gurgaon-hacker.svelte"
			code={EXAMPLE_PAGE.GURGAON_HACKER} />
	</AccordionItem>
</Accordion>

<p>
	Hope you liked the content so far and that you had time to practice the basics of
	Svelte. Now it's time to turn it up a notch!
</p>
