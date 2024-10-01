<script lang="ts">
	export let extraClasses: string | undefined = undefined;
	export let href: string = '';
</script>

<a
	class="link"
	target="_self"
	rel="noopener noreferrer"
	class:extraClasses
	{href}>
	<slot></slot>
</a>

<style>
	.link {
		color: gray;
		text-decoration: none;
		display: inline-flex;
	}
	.link:hover {
		text-decoration: underline;
	}
</style>
