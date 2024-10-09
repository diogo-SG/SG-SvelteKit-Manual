<script lang="ts">
	export let title = 'Note';
	const isNote = title === 'Note';
</script>

<!-- <div
	class="flex flex-col gap-2 rounded-lg border-2
	{title === 'Note' ? 'border-primary-600' : 'border-muted bg-muted'}
		px-4 py-4 pb-6 text-sm">
	<h5 class="text-sm {title === 'Note' && 'text-primary-600'}">{title}</h5>
	<slot></slot>
</div> -->

<div
	class="flex flex-col gap-2 rounded-lg border-2 px-4 py-4 pb-6 text-sm"
	class:border-primary-600={isNote}
	class:border-[#cccccc]={!isNote}>
	<h5
		class="text-sm"
		class:text-primary-600={isNote}>
		{title}
	</h5>
	<slot></slot>
</div>
