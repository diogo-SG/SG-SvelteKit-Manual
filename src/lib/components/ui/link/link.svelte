<script lang="ts">
	export let extraClasses: string | undefined = undefined;
	export let href: string = '';
</script>

<a
	class="link"
	target="_blank"
	rel="noopener noreferrer"
	class:extraClasses
	{href}>
	<slot></slot>
</a>

<style>
	.link {
		color: gray;
		text-decoration: none;
	}

	.link:hover {
		text-decoration: underline;
	}

	.link.active {
		color: var(--color-secondary);
	}
</style>
