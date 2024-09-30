export const CODE_EXAMPLES = {
	universalLoad1: `
    import PropsExample from '$lib/components/examples/props-example-component/props-example.svelte';

    export function load() {
        return {
            component: PropsExample
        };
    }
    `,
	universalLoad2: `
    {#if $page.data.component}
        <p>Here's the component we fetched from the server:</p>
        <svelte:component this={$page.data.component} />
    {/if}
    `,
	parentLoad1: `
    export function load() {
        return {
            setup: 'Why is 6 afraid of 7?'
        };
    }
    `,
	parentLoad2: `
    export async function load({ parent }: { parent: () => Promise<{ setup: string }> }) {
        const { setup } = await parent();

        return {
            joke: {
                setup: setup,
                punchline: 'Because 7 8 9!'
            }
        };
    }
    `,
	invalidate: `
    <script>
        import { onMount } from 'svelte';
        import { invalidate } from '$app/navigation';

        export let data;

        onMount(() => {
            const interval = setInterval(() => {
                invalidate('/api/now');
            }, 5000);

            return () => {
                clearInterval(interval);
            };
        });
    </script>
    `
};
