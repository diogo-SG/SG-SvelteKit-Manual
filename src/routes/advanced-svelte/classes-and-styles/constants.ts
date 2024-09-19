export const CODE = {
	CLASS: `
<script>
  let isActive = false;
</script>

<button class="button {isActive ? 'isActive' : ''}" on:click={() => isActive = !isActive}>
  Toggle me
</button>
`,
	CLASS_SHORTHAND: `
<button class="button"
    class:isActive={isActive}
    on:click={() => isActive = !isActive}>
`,
	STYLE: `
    <button class="button"
    style="color: {isActive ? 'black' : 'white'}; font-size: 1.5rem; background: {isActive ? 'white' : 'black'}"
    on:click={() => isActive = !isActive}>
`,
	STYLE_SHORTHAND: `
    <button class="button"
    style:color={isActive ? 'black' : 'white'}
    style:fontSize={"1.5rem"}
    style:background={isActive ? 'white' : 'black'}
    on:click={() => isActive = !isActive}>
`
};
