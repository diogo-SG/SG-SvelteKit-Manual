export const HEADER = {
	EVENTS: 'events.svelte'
};

export const EVENTS_LIST = {
	MOUSE: [
		{
			event: 'on:mouseover',
			description: 'Fires when the mouse pointer moves over an element;'
		},
		{
			event: 'on:mouseout',
			description: 'Fires when the mouse pointer moves out of an element;'
		},
		{
			event: 'on:mouseenter',
			description: 'Fires when the mouse pointer enters an element;'
		},
		{
			event: 'on:mouseleave',
			description: 'Fires when the mouse pointer leaves an element.'
		}
	],
	KEYBOARD: [
		{ event: 'on:keydown', description: 'Fires when a key is pressed down;' },
		{ event: 'on:keyup', description: 'Fires when a key is released;' },
		{ event: 'on:keypress', description: 'Fires when a key is pressed and released.' }
	],
	MODIFIERS: [
		{
			modifier: '|preventDefault',
			description: 'Prevents the default behavior of the event;'
		},
		{ modifier: '|stopPropagation', description: 'Stops the event from propagating;' },
		{
			modifier: '|self',
			description:
				'Only triggers the event if the event was dispatched from the element itself;'
		},
		{ modifier: '|once', description: 'Only triggers the event once;' },
		{ modifier: '|capture', description: 'Use capture phase instead of bubbling phase;' },
		{ modifier: '|passive', description: 'Use passive event listener;' },
		{ modifier: '|nonpassive', description: 'Use non-passive event listener;' },
		{
			modifier: '|trusted',
			description: 'Only trigger the event if it was dispatched by a user action.'
		}
	]
};

export const CODE = {
	CLICK: `
    <button on:click={handleClick}>Click me</button>
    `,
	INLINE_HANDLERS: `
    <button on:mouseover={() => {console.log('Mouse is hovering me')}}>Hover me</button>
    `,
	MODIFIERS: `
    <button on:click|preventDefault={handleSubmit}>Submit</button>
    `,
	COMPONENTS_PARENT: `
    <script>
	    import Child from './Child.svelte';

		function handleMessage(e) {
			console.log(e.detail.text)
		};
	</script>

		<Child on:message={handleMessage} />
	`,
	COMPONENTS_CHILD: `
    <script>
		import { createEventDispatcher } from 'svelte';

		const dispatch = createEventDispatcher();

		function sayHello() {
			dispatch('message', { text: 'Hello from child component!' });
		};
	</script>

	<button on:click={sayHello}>
		Click to say hello
	</button>
	`,
	FORWARDING_PARENT: `
	<script>
		import Child from './Child.svelte';

		function handleMessage(e) {
			console.log(e.detail.text)
		};
	</script>

		<Child on:message={handleMessage} />
	`,
	FORWARDING_CHILD: `
	<script>
		import GrandChild from './GrandChild.svelte';
	</script>

		<GrandChild on:message />
	`,
	FORWARDING_GRANDCHILD: `
	<script>
		import { createEventDispatcher } from 'svelte';

		const dispatch = createEventDispatcher();

		function sayHello() {
			dispatch('message', { text: 'Hello from grandchild component!' });
		};
	</script>

		<button on:click={sayHello}>
			Click to say hello
		</button>
	`,
	DOM_PARENT: `
	<script>
		import Child from './Child.svelte';

		function handleClick(e) {
			console.log('Clicked on child component');
		}
	</script>

		<Child on:click={handleClick} />
	`,
	DOM_CHILD: `
		<button on:click>
			Click me
		</button>
	`
};
