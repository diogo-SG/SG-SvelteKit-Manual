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
`
};
