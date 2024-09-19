export const CODE = {
	CONTENTEDITABLE: `
    <div bind:innerHTML={html} contenteditable></div>
    `,
	EACH_BLOCK: `
    {#each todos as todo}
	    <div>
		    <input
			type="checkbox"
			bind:checked={todo.done}
		    />

		    <input
			type="text"
			bind:value={todo.text}
		    />
	    </div>
    {/each}
`,
	MEDIA: `
<video
	src={clip}
	bind:duration
	bind:videoWidth
	bind:videoHeight
/>

<audio
    src={clip}
    bind:paused
    bind:volume
    bind:muted
/>
`,
	DIMENSIONS: `
<div 
    bind:clientWidth
    bind:clientHeight
    bind:offsetWidth
    bind:offsetHeight
    bind:scrollWidth
/>
`,
	THIS: `
<img bind:this />
`,
	THIS_COMPONENT_PARENT: `
    <script>
        import Child from './Child.svelte';
        let value;
    </script>

    <button on:click={() => value.clear()}>Clear counter</button>
    <Child bind:this={value} />
    `,
	THIS_COMPONENT_CHILD: `
    <script>
        export let count = 0;
        export const clear = () => count = 0;
    </script>

    <button on:click={() => count += 1}>Add</button> 
    <p>{count}</p>
    `,
	COMPONENT_CHILD: `
    <script>
        export let count = 0;
    </script>

    <button on:click={() => count += 1}>Add</button> 
    <p>{count}</p>
`,
	COMPONENT_PARENT: `
    <script>
        import Child from './Child.svelte';
        let value;
    </script>

    <button on:click={() => value -= 1}>Subtract</button>
    <Child bind:count={value} />
`
};

export const MEDIA_BINDS_LIST = [
	{
		attribute: 'duration',
		readOnly: true,
		description: 'The duration of the media in seconds;'
	},
	{
		attribute: 'buffered',
		readOnly: true,
		description: 'The time ranges that have been buffered;'
	},
	{
		attribute: 'seekable',
		readOnly: true,
		description: "The time ranges that can be seeked to in the media's timeline;"
	},
	{
		attribute: 'played',
		readOnly: true,
		description: 'The time ranges that have been played;'
	},
	{
		attribute: 'seeking',
		readOnly: true,
		description:
			'A boolean that indicates whether the media element is seeking a new position;'
	},
	{
		attribute: 'ended',
		readOnly: true,
		description:
			'A boolean that indicates whether the media element has finished playing;'
	},
	{
		attribute: 'readyState',
		readOnly: true,
		description: 'Number between (and including) 0 and 4;'
	},
	{
		attribute: 'currentTime',
		readOnly: false,
		description: 'The current playback position in seconds;'
	},
	{
		attribute: 'playbackRate',
		readOnly: false,
		description:
			'The playback rate of the media. Speed up or slow down (1 is normal speed);'
	},
	{
		attribute: 'paused',
		readOnly: false,
		description: 'A boolean that indicates whether the media element is paused;'
	},
	{
		attribte: 'volume',
		readOnly: false,
		description: 'A value between 0 and 1 that indicates the volume level;'
	},
	{
		attribute: 'muted',
		readOnly: false,
		description: 'A boolean that indicates whether the media element is muted;'
	},
	{
		attribute: 'videoWidth',
		videoOnly: true,
		readOnly: true,
		description: 'The width of the video in pixels;'
	},
	{
		attribute: 'videoHeight',
		videoOnly: true,
		readOnly: true,
		description: 'The height of the video in pixels.'
	}
];
