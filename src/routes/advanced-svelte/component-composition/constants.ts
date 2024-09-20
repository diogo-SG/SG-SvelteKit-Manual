export const CODE = {
	SLOTS_PARENT: `
    <script>
        import Button from './Button.svelte'; 
    </script>

    <Button>
        <p>Click me</p>
    </Button>
    `,
	SLOTS_CHILD: `
    <button>
        <slot></slot>
    </button>
    `,
	NAMED_SLOTS_PARENT: `
    <Button>
        <p slot="text">Add</p>
        <p slot="icon">+</p>
    </Button>
    `,
	NAMED_SLOTS_CHILD: `
    <button>
        <slot name="icon"></slot>
        <slot name="text"></slot>
    </button>
    `,
	SLOTS_FALLBACK: `
    <button>
        // without fallback
        <slot name="icon"></slot>

        // with fallback
        <slot name="text">
            <p>Click me!</p>
        </slot>
    </button>
    `,
	SLOTS_PROPS_PARENT: `
    <script>
        import Button from './Button.svelte';
    </script>

    <Button>
        <p slot="text">Add</p>
        <p slot="icon">+</p>
    </Button>
    `,
	SLOTS_PROPS_CHILD: `
    <button>
        <slot name="icon"></slot>
        <slot name="text"></slot>
    </button>
    `
};
