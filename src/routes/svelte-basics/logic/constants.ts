export const HEADER = {
	LOGIC: 'logic.svelte'
};

export const CODE = {
	IF_ELSE: `
{#if condition}
    <p>Render this content if the condition is true</p>
{:else}
    <p>Render this content if the condition is false</p>
{/if}
`,
	ELSE_IF: `
{#if condition1}
    <p>Render this content if condition1 is true</p>
{:else if condition2}
    <p>Render this content if condition2 is true</p>
{:else}
    <p>Render this content if neither condition1 nor condition2 is true</p>
{/if}
`,
	EACH: `
{#each array as item}
	<p>{item}</p>
{/each}
`,
	KEYED_EACH: `
{#each array as item, i}
	<p>{i}: {item}</p>
{/each}
`,
	KEYED_EACH_2: `
{#each array as item (item.id)}
	<p>{item}</p>
{/each}
`,
	AWAIT: `
{#await promise}
	<p>Loading...</p>
{:then data}
	<p>{data}</p>
{:catch error}
	<p>{error}</p>
{/await}
`
};
