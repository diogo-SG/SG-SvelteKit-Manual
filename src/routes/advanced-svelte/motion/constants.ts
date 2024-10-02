export const OPTIONS = {
	TWEENED: [
		{
			option: 'Delay (Number, default 0)',
			description: 'milliseconds before the tween starts;'
		},
		{
			option: 'Duration (Number or function, default 400)',
			description: 'milliseconds the tween lasts;'
		},
		{
			option: 'Easing (function, default linear)',
			description: 'p => t function to use;'
		},
		{
			option: 'Interpolate (function)',
			description:
				'a custom (from, to) => t => value function for interpolating between arbitrary values. By default, Svelte will interpolate between numbers, dates, and identically-shaped arrays and objects (as long as they only contain numbers and dates or other valid arrays and objects). If you want to interpolate (for example) colour strings or transformation matrices, supply a custom interpolator.'
		}
	],
	SPRING: [
		{
			option: 'Stiffness (Number, default 0.15)',
			description: 'a value between 0 and 1 where higher means a "tighter" spring;'
		},
		{
			option: 'Damping (Number, default 0.8)',
			description: 'a value between 0 and 1 where lower means a "springier" spring;'
		},
		{
			option: 'Precision (Number, default 0.01)',
			description:
				'determines the threshold at which the spring is considered to have "settled", where lower means more precise.'
		}
	]
};

export const CODE = {
	TWEENED: `
    <script>
        import { tweened } from 'svelte/motion';
        const progress = tweened(0);
     </script>

        <progress value={$progress}></progress>

        <button on:click={() => progress.set(0)}>
	        0%
        </button>

        <button on:click={() => progress.set(0.5)}>
	        50%
        </button>

        <button on:click={() => progress.set(1)}>
	        100%
        </button>

    <style>
	    progress {
		display: block;
		width: 100%;
	    }
    </style>
     `,
	TWEENED_CUBIC: `
    <script>
        import { tweened } from 'svelte/motion';
        import { cubicOut } from 'svelte/easing';
 
        const progress = tweened(0, {
            duration: 400,
            easing: cubicOut
        });
    </script>
`,
	SPRING: `
    <script>
	    import { spring } from 'svelte/motion';

	    let coords = spring({ x: 50, y: 50 });
	    let size = spring(10);
    </script>
    <svg
	on:mousemove={(e) => {
		coords.set({ x: e.clientX, y: e.clientY });
	}}
	on:mousedown={() => size.set(30)}
	on:mouseup={() => size.set(10)}
	role="presentation"
>
	<circle
		cx={$coords.x}
		cy={$coords.y}
		r={$size}
	/>
</svg>

<div class="controls">
	<label>
		<h3>stiffness ({coords.stiffness})</h3>
		<input
			bind:value={coords.stiffness}
			type="range"
			min="0.01"
			max="1"
			step="0.01"
		/>
	</label>

	<label>
		<h3>damping ({coords.damping})</h3>
		<input
			bind:value={coords.damping}
			type="range"
			min="0.01"
			max="1"
			step="0.01"
		/>
	</label>
</div>

<style>
	svg {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}

	circle {
		fill: #ff3e00;
	}

	.controls {
		position: absolute;
		top: 1em;
		right: 1em;
		width: 200px;
		user-select: none;
	}

	.controls input {
		width: 100%;
	}
</style>
`,
	SPRING_CUSTOM: `
    <script>
	    import { spring } from 'svelte/motion';

        let coords = spring({ x: 50, y: 50 }, {
	        stiffness: 0.1,
	        damping: 0.25
        });
        let size = spring(10);
    </script>
`
};
