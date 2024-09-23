export const CODE = {
	SVELTE_SELF: `
    <script>
        export let data = ["Hello", ["World", ["!", ["Svelte"], "is"], "awesome"],"!"];
    </script>

    {#each data as item}
       <div>
            {#if Array.isArray(item)}
                <svelte:self data={item} />
            {:else}
                {item}
            {/if}
        </div>
    {/each}
`,
	SVELTE_COMPONENT_APP: `
    <script>
        import RedSquare from './RedSquare.svelte';
        import BlueSquare from './BlueSquare.svelte';

        let isRed = true;
        const props = {size: 150}
    </script>

    <button on:click={() => isRed = !isRed}>
        {isRed ? 'Make it blue' : 'Make it red'}
    </button>

    <svelte:component 
        this={isRed ? RedSquare : BlueSquare}
        {...props}
    />
`,
	SVELTE_COMPONENT_RED_SQUARE: `
    <script>
        export let size;
    </script>

    <div style="width: {size}px; height: {size}px; background-color: red;" />
`,
	SVELTE_COMPONENT_BLUE_SQUARE: `
    <script>
        export let size;
    </script>

    <div style="width: {size}px; height: {size}px; background-color: blue;" />
`,
	SVELTE_ELEMENT: `
    <script>
        let isTitle = 'h1';
    </script>

    <button on:click={() => isTitle = isTitle === 'h1' ? 'p' : 'h1'}>
        {isTitle === 'h1' ? 'Turn text to a p tag' : 'Turn text to a h1 tag'}
    </button>

    <svelte:element this={isTitle}>
        Hello World
    </svelte:element>
`,
	SVELTE_WINDOW: `
    <script>
        let scrollY = window.mouse;
    </script>

    <svelte:window bind:scrollY />

    <div style="height: 200%; display: flex; align-items: center; justify-content: center;">
        <p>ScrollY value: {scrollY}px</p>
    </div>
`
};
