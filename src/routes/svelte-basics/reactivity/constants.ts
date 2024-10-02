export const REACTIVE_CODE = {
	EXAMPLE: `
    <script>
        let count = 0;

        function increment() {
        count += 1;
        }
    </script>

        <button on:click={increment}>
			Clicks: {count} {count === 1 ? 'time' : 'times'}
		</button>
        `,
	DECLARATIONS: `
    <script>
	    let count = 0;
	    $: doubled = count * 2;
    </script>
`,
	STATEMENTS: `
    <script>
	    let count = 0;
	    $: {
		console.log('Count is now', count);
	    }
    </script>
    `,
	UPDATING_ARRAYS: `
    <script>
	    let items = ['a', 'b', 'c'];
	    function addItem() {
		items = [...items, 'd'];
	    }
    </script>
`,
	UPDATING_ARRAYS_1: `
    <script>
	    let items = ['a', 'b', 'c'];
	    function addItem() {
		items.push('d');
		items = items;
	    }
    </script>
`
};
