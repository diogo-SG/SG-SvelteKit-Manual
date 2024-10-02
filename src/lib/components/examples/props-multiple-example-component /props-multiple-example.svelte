<script lang="ts">
	export let name: string;
	export let age: number;
	export let country: string;
	export let question: string;
</script>

<div
	class="flex w-fit flex-col gap-2 rounded-lg border border-[#ea51b2] p-[1rem] text-[#ea51b2]">
	<h2>
		Hey again,
		<br />
		i'm a component.
	</h2>
	<p>The props are:</p>
	<p>
		Name: <strong>{name}</strong>
	</p>
	<p>
		Age: <strong>{age}</strong>
	</p>
	<p>
		Country: <strong>{country}</strong>
	</p>
	<p>
		Question: <strong>{question}</strong>
	</p>
</div>
