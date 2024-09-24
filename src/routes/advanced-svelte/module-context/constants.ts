export const CODE = {
	MODULE_CONTEXT_CARD: `
    <script context="module">
        let totalCount = 0;
        export function allCounts () {
            return totalCount;
        };
    </script>

    <script>
        let count = 0;
        function btnHandler () {
            count += 1;
            totalCount += 1;
        };
    </script>

        <h2>Card counter - {count}</h2>
        <button on:click ={btnHandler}>Increment Cart </button>
        <hr />
    `,
	MODULE_CONTEXT_APP: `
    <script>
        import Card, { allCounts } from './Card.svelte';
    </script>

    <div style="text-align:center;margin-top:50px;">
        <button on:click={() => alert(allCounts())}>Total items</button>
        <Card />
        <Card />
        <Card />
    </div>
`
};

export const MODULE_CONTEXT_STEPS = [
	{
		page: 'Card.svelte',
		step: 1,
		description: 'Define the context module as a component communication;'
	},
	{
		page: 'Card.svelte',
		step: 2,
		description:
			'Define the allCounts function that is exported to return the total number of increments;'
	},
	{
		page: 'Card.svelte',
		step: 3,
		description:
			'Implement a function to increment counter value by one after clicking the button;'
	},
	{ page: 'Card.svelte', step: 4, description: "Print the counter's current value;" },
	{
		page: 'Card.svelte',
		step: 5,
		description:
			'Call a function btnHandler that increments counter for the current component as well as the totalCount variable;'
	},
	{
		page: 'App.svelte',
		step: 6,
		description: 'Import the Card component and allCounts function from Card.svelte;'
	},
	{
		page: 'App.svelte',
		step: 7,
		description: 'Define a button that calls the allCounts function;'
	},
	{
		page: 'App.svelte',
		step: 8,
		description: 'Render the imported component multiple times.'
	}
];
