<script>
	export let name;
	export let age;
	export let country;
	export let city;
</script>

<div class="w-fit rounded-lg bg-[#a0ac52] p-[1rem]">
	<ul>
		<p>This is an example of a component that accepts multiple props.</p>
		<li>Name: {name}</li>
		<li>Age: {age}</li>
		<li>Country: {country}</li>
		<li>City: {city}</li>
	</ul>
</div>
