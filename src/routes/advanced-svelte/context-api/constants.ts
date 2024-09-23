export const CODE = {
	SET_CONTEXT: `
    <script>
        import { setContext } from 'svelte';
        import Card from './Card.svelte';
    
        setContext('color', 'blue');
    </script>

    <Card />
    `,
	GET_CONTEXT: `
    <script>
        import { getContext } from 'svelte';
        const color = getContext('color');
    </script>

    <div style='background-color: {color}'>
        <h3>I'm a card</h3>
    </div>
    `,
	SET_CONTEXT_WITH_STORE: `
    <script>
        import { writable } from 'svelte/store';
        import { setContext } from 'svelte';
        import Card from './Card.svelte';
    
        setContext('color', {
            color: writable('blue')
            });
    </script>
    `,
	GET_CONTEXT_WITH_STORE: `
    <script>
        import { getContext } from 'svelte';
        const { color } = getContext('color');
    </script>

    <div style='background-color: {$color}'>
        <h3>I'm a card</h3>
    </div>
    `
};
