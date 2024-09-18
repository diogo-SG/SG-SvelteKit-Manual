export const CODE = {
	TRANSITION_FADE: `
    <script>
	    import { fade } from 'svelte/transition';
	    let visible = true;
    </script>

    <label>
	    <input type="checkbox" bind:checked={visible} />
	    visible
    </label>

    {#if visible}
	    <p transition:fade>
		    Fades in and out
	    </p>
    {/if}
`,
	TRANSITION_FLY_SCRIPT: `
	<script>
		import { fly } from 'svelte/transition';
		let visible = true;
	</script>
`,
	TRANSITION_FLY_HTML: `
	<p transition:fly={{ y: 200, duration: 2000 }}>Flies in and out</p>
`,
	TRANSITION_IN_OUT: `
	<script>
		import { fade, fly } from 'svelte/transition';
	</script>

	// Rest of the code here
	<p in:fly={{ y: 200, duration: 2000 }} out:fade>
		Flies in, fades out
	</p>
`,
	TRANSITION_CUSTOM_CSS_SCRIPT: `
	<script>
		import { elasticInOut } from 'svelte/easing';
		import { fade } from 'svelte/transition';

		let visible = true;

		function elastic(node, {duration}) {
			return {
				duration,
				css: (t) => {
					const eased = elasticInOut(t);
					return \`transform: scale(\${eased});\`
					}
				};
		}
	</script>
`,
	TRANSITION_CUSTOM_CSS_HTML: `
	<label>
		<input type="checkbox" bind:checked={visible} />
			visible
	</label>
	
		{#if visible}
			<p in:elastic={{ duration: 1000 }} out:fade={{duration: 1000}}>
				Custom CSS transition
			</p>
		{/if}
`,
	TRANSITION_CUSTOM_TICK_SCRIPT: `
	<script>
		let visible = false;

		function typewriter(node, {speed = 1}) {
		const text = node.textContent;
		const duration = text.length / (speed * 0.01);
			return {
				duration,
				tick: (t) => {
					const i = Math.trunc(text.length * t);
					node.textContent = text.slice(0, i);
				}
			};
		}
	</script>
`,
	TRANSITION_CUSTOM_TICK_HTML: `
	<label>
		<input type="checkbox" bind:checked={visible} />
		visible
	</label>

	{#if visible}
		<p transition:typewriter>
			Custom tick transition
		</p>
	{/if}
`,
	TRANSITION_EVENTS: `
	<p  
		transition:fade={{ duration: 2000 }}
		on:introstart={() => console.log('intro started')}
		on:introend={() => console.log('intro ended')}
		on:outrostart={() => console.log('outro started')}
		on:outroend={() => console.log('outro ended')}
	>
		Transition events
	</p>
`,
	GLOBAL_TRANISITONS: `
	{#each items as item}
		<div transition:slide|global>
			{item}
		</div>
	{/each}
`,
	KEY_BLOCKS: `
	{#key i}
		<p in:fade>{messages[i]}</p>
	{/key}
`
};

export const TRANSITION_FUNCTION_LIST = [
	{
		property: 'Delay',
		description: 'Delay in milliseconds before the transition starts;'
	},
	{
		property: 'Duration',
		description: 'Duration of the transition in milliseconds;'
	},
	{ property: 'Easing', description: 'Easing function to use;' },
	{ property: 'CSS', description: '(t: number, u: number) => string;' },
	{
		property: 'Tick',
		description:
			'A (t: number, u: number) => {...} function that has some effect on the node.'
	}
];
