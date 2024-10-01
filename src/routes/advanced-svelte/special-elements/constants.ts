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
`,
	SVELTE_BODY: `
    <script>
        let showText = false;
    </script>

    <svelte:body 
        on:mouseenter={() => showText = true} 
        on:mouseleave={() => showText = false} 
    />

    {#if showText}
        <p>
            Hover over the page to see the text!
        </p>
    {/if}
`,
	SVELTE_DOCUMENT: `
    <script>
        let textSelected = '';
        const handleSelection = (e) => textSelected = document.getSelection();
    </script>

    <svelte:document 
        on:selectionchange={handleSelection} 
    />

    <h1>Select part of this text</h1>
    <p>{textSelected}</p>
`,
	SVELTE_HEAD: `
    <script>
        let title = 'Special elements - advanced Svelte';
    </script>

    <svelte:head>
        <title>{title}</title>
    </svelte:head>
`,
	SVELTE_OPTIONS: `
    <svelte:options immutable>

    <script>
        // Your code here
    </script>
`,
	SVELTE_FRAGMENT_PARENT: `
    <Card>
        <h1 slot="header">Hello</h1>
	    <svelte:fragment slot="footer">
		    <p>All rights reserved.</p>
		    <p>Copyright(c) 2024 learn Svelte</p>
	    </svelte:fragment>
    </Card>
`,
	SVELTE_FRAGMENT_CHILD: `
    <div>
	    <slot name="header" />
	    <slot name="footer" />
    </div>
`
};

export const SVELTE_OPTIONS_LIST = [
	{ name: 'immutable', description: 'Prevent reactivity on variables;' },
	{
		name: 'accessors',
		description:
			'Accessors are used to automatically update the DOM when a variable changes;'
	},
	{
		name: 'namespace',
		description: 'This option is used to specify the namespace of the component;'
	},
	{
		name: 'tag',
		description: 'You can use it to specify the tag of the component;'
	},
	{
		name: 'debug',
		description: 'Enables debugging for the component;'
	},
	{ name: 'hydratable', description: 'Enables hydration for the component.' }
];
