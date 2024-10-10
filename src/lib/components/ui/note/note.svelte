<script lang="ts">
	export let title = 'Note';
	const isNote = title === 'Note';
</script>

<div
	class="flex flex-col gap-2 rounded-lg border-2 px-4 py-4 pb-6 text-sm"
	class:border-primary-600={isNote}
	class:bg-muted={!isNote}>
	<h5
		class="text-sm"
		class:text-primary-600={isNote}>
		{title}
	</h5>
	<slot></slot>
</div>
