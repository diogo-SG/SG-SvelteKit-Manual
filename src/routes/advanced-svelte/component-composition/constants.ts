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
        import Card from './Card.svelte';
        const workersList = [
            { firstName: 'Alice', job: 'Engineer' },
            { firstName: 'Bob', job: 'Designer' },
            { firstName: 'Rita', job: 'Manager' }
        ];
    </script>

    <Card {workersList}>
        <div slot="firstName" let:firstName>{firstName}</div>
        <div slot="job" let:job>{job}</div>
    </Card>
    `,
	SLOTS_PROPS_CHILD: `
    <script>
        export let workersList;
    </script>

    {#each workersList as {firstName, job} }
        <div class="card">
            <slot name="firstName" {firstName} />
            <slot name="job" {job} />
        </div>
    {/each}

    <style>
        .card {
            border: 1px solid #ccc;
            padding: 1rem;
            margin: 0.5rem 0;
        }
    </style>
    `,
	SLOTS_CHECK: `
    {#if $$slots.lastName}
        <div>
            <p>Last Name:</p>
		    <slot name="lastName" {lastName} />
        </div>
    {/if}
    `
};

export const SLOT_PROPS_LIST = [
	{
		step: 1,
		page: 'App.svelte',
		description:
			"Define a constant 'workersList' which is an array of objects, each containing 'firstName' and 'job' properties;"
	},
	{
		step: 2,
		page: 'App.svelte',
		description: "Pass the 'workersList' array to the 'Card' component as a prop;"
	},
	{
		step: 3,
		page: 'App.svelte',
		description: "Defines two slots within the 'Card' component, 'firstName' and 'job';"
	},
	{
		step: 4,
		page: 'App.svelte',
		description:
			"Use the 'let' directive to bind the properties from the 'workersList' array to the respective slots;"
	},
	{
		step: 5,
		page: 'Card.svelte',
		description:
			"For each item in the 'workersList' array, render a card element with 2 slots inside;"
	},
	{
		step: 6,
		page: 'Card.svelte',
		description:
			"Pass the 'firstName' and 'job' properties of the current worker to the respective slots."
	}
];
