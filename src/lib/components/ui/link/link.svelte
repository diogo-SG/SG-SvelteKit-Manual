<script lang="ts">
	export let extraClasses: string | undefined = undefined;
	export let href: string = '';
</script>

<a class="link" class:extraClasses {href}>
	<slot></slot>
</a>

<style>
	.link {
		color: var(--color-primary);
		text-decoration: none;
	}

	.link:hover {
		text-decoration: underline;
	}

	.link.active {
		color: var(--color-secondary);
	}
</style>
