export const CODE = {
	CONTENTEDITABLE: `
		<div bind:innerHTML={html} contenteditable></div>
	`,
	EACH_BLOCK: `
		<div class="flex flex-wrap justify-center gap-4">
			{#each todos as todo}
				<div class="flex w-1/4 flex-col gap-5 rounded-sm border-2 border-primary-700 p-5">
					<Checkbox
						class="mr-auto"
						bind:checked={todo.done}>
						Done?
					</Checkbox>
					<div class="flex flex-col">
						<Label for="todo">Task:</Label>
						<Input
							id="todo"
							bind:value={todo.text} />
					</div>
				</div>
			{/each}
		</div>
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
		<script lang="ts">
			let cH: number;
		</script>

		<div bind:clientHeight={cH}>
			<Label for="textarea">Resize me!</Label>
			<Textarea
				id="textarea"
				placeholder={\`The height of this textarea is \${cH}px\`} />
		</div>
	`,
	THIS: `
		<script lang="ts">
			let boundImage: HTMLImageElement;
			let theyTouchedMySon = false;
			$: if (boundImage) {
				boundImage.onclick = () => {
					theyTouchedMySon = true;
				};
			}
		</script>

		{#if !theyTouchedMySon}
			<div class="align-center flex flex-col">
				<h4 class="pb-2 text-center text-primary-700">Do NOT touch my son 😠</h4>
				<img
					class="mx-auto w-1/2"
					bind:this={boundImage}
					src={'../../img/minion.png'}
					alt="My son" />
			</div>
		{:else}
			<div
				class="align-center flex flex-col"
				in:angryShake={{ duration: 1000000 }}>
				<h4 class="pb-2 text-center text-primary-700">
					Time to face the consequences of your actions 😠
				</h4>
				<img
					class="mx-auto w-1/2"
					src={'../../img/pointed_gun.jpg'}
					alt="Uh oh" />
			</div>
		{/if}
	`,
	THIS_COMPONENT_PARENT: `
		<script>
			import Counter from './Counter.svelte';
			let value;
		</script>

		<button on:click={() => value.clear()}>Clear counter</button>
		<Counter bind:this={value} />
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
			import Counter from './Counter.svelte';
			let value;
		</script>

		<button on:click={() => value -= 1}>Subtract</button>
		<Counter bind:count={value} />
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
