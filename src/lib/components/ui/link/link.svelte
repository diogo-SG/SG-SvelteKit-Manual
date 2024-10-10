<script lang="ts">
	export let extraClasses: string | undefined = undefined;
	export let href: string = '';
	export let isInternal: boolean = false;
	export let isNavigation: boolean = false;
</script>

<a
	class:internal_link={isInternal}
	class:link={!isInternal && !isNavigation}
	class:navigation={isNavigation}
	target="_self"
	rel="noopener noreferrer"
	class:extraClasses
	{href}>
	<slot></slot>
</a>

<style>
	.navigation {
		width: fit-content;
		color: gray;
		text-decoration: none;
		display: inline-flex;
	}
	.navigation:hover {
		text-decoration: underline;
	}
	.link {
		width: fit-content;
		color: #eb4f27;
		text-decoration: none;
		display: inline-flex;
	}
	.link:hover {
		text-decoration: underline;
	}

	.internal_link {
		width: fit-content;
		padding: 0.5rem 1rem;
		color: #fff;
		border-radius: 0.5rem;
		background-color: black;
	}
	.internal_link:hover {
		background-color: #fff;
		color: black;
		outline: 2px solid black;
	}
</style>
