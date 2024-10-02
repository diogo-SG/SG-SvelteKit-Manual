export const CODE = {
	ON_MOUNT: `
	<script>
		import { onMount } from 'svelte';

		onMount(() => {
			console.log('The component has been rendered to the DOM');

			// Return a cleanup function
			return () => {
				console.log('The component has been removed from the DOM');
			};
		});
	</script>
`,
	BEFORE_AND_AFTER_UPDATE: `
	<script>
		import { beforeUpdate, afterUpdate } from 'svelte';

		beforeUpdate(() => {
			console.log('The component is about to be updated');
			});

		afterUpdate(() => {
			console.log('The component has been updated');
			});
	</script>
`,
	ON_DESTROY: `
	<script>
		import { onDestroy } from 'svelte';

		onDestroy(() => {
			console.log('The component has been removed from the DOM');
			});
	</script>
`,
	TICK: `
	<script>
		import { tick } from 'svelte';

		let count = 0;

		const handleClick = async () => {
			count ++;
			await tick();
				console.log('The DOM has been updated');
			};
	</script>
`
};
