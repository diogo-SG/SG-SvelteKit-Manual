<script lang="ts">
	export let title = 'Note';
</script>

<div class="flex flex-col gap-2 rounded-lg border-2 border-primary-600 px-4 py-4 text-sm">
	<h5 class="text-sm text-primary-600">{title}</h5>
	<slot></slot>
</div>
