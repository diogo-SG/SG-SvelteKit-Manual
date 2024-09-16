export const HEADER = {
	BINDINGS: 'bindings.svelte'
};

export const CODE = {
	TEXT_INPUTS: `
	<script>
		let name;
	</script>

		<input bind:value={name} />
	`,
	NUMERIC_INPUTS: `
	<script>
		let age;
	</script>

		<input type="number" bind:value={age} min="0" max="10" />
		<input type="range" bind:value={age} min="0" max="10" />
	`,
	CHECKBOXES: `
	<script>
		let isChecked;
	</script>

		<input type="checkbox" bind:checked={isChecked} />
	`,
	SELECT: `
	<script>
		let selectedOption;
	</script>

		<select bind:value={selectedOption}>
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
		</select>
	`,
	MULTI_SELECT: `
	<script>
		let selectedOptions = [];
	</script>

		<select multiple bind:value={selectedOptions}>
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
		</select>
	`,
	GROUP: `
	<script>
		let radioOption = 1;
		let checkboxOptions = [];
	</script>

		<input type="radio" value="1" bind:group={radioOption} />
		<input type="radio" value="2" bind:group={radioOption} />
		<input type="radio" value="3" bind:group={radioOption} />

		<input type="checkbox" value="1" bind:group={checkboxOptions} />
		<input type="checkbox" value="2" bind:group={checkboxOptions} />
		<input type="checkbox" value="3" bind:group={checkboxOptions} />
	`,
	TEXTAREA: `
	<script>
		let value;
	</script>

		<textarea bind:value={value} />
	`,
	SHORTHAND: `
		<textarea bind:value />
	`
};
