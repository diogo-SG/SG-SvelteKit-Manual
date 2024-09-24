<script lang="ts">
	import { page } from '$app/stores';
</script>

<div
	class="color"
	style="background-color:#{$page.params.color} ">
	<h1>This is the {$page.params.color} page!</h1>
</div>

<style>
	.color {
		padding: 50px 0;
		border-radius: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.color h1 {
		color: white;
		mix-blend-mode: difference;
	}
</style>
