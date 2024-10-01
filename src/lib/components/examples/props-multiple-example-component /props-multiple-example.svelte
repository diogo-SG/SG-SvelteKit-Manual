<script>
	export let name;
	export let age;
	export let country;
	export let city;
</script>

<div>
	This is an example of a component that accepts multiple props.
	<ul>
		<li>Name: {name}</li>
		<li>Age: {age}</li>
		<li>Country: {country}</li>
		<li>City: {city}</li>
	</ul>
</div>

<style>
	div {
		background-color: #a0ac52;
		padding: 1rem;
		border-radius: 5px;
	}
</style>
