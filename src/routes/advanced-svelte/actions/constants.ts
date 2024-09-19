export const CODE = {
	USE: `
    <script>
        let visible = true;

        function greet(element) {
            // Animate the element with a smooth fade-in effect
            element.animate([{opacity: 0}, {opacity: 1}], {duration: 1000});
            console.log('Hello!');

            return {
                destroy() {
                    console.log('Goodbye!');
                },
            }
        }
    </script>
 
    <input type="checkbox" bind:checked={visible} />
    
    {#if visible}
        <div use:greet>Greetings</div>
    {/if}
    `,
	USE_WITH_PARAMS: `
    <script>
	    export let bar;
	        function foo(node, bar) {
		        // the node has been mounted in the DOM

		    return {
			    update(bar) {
				// the value of "bar" has changed
			},

			destroy() {
				// the node has been removed from the DOM
			}
		};
	}
    </script>

    <div use:foo={bar} />
`
};

export const COMMON_CASES_LIST = [
	'Interfacing with third-party libraries;',
	'Lazy-loaded images;',
	'Tooltips;',
	'Adding custom event handlers.'
];
