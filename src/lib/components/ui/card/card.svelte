<script lang="ts">
	import {
		BookOutline,
		SwatchbookOutline,
		AtomOutline,
		RocketOutline
	} from 'flowbite-svelte-icons';
	import Link from '../link/link.svelte';
	export let contentList: any;
</script>

<div
	class="max-h-[22rem] w-[35rem] rounded-3xl bg-[#fff] !px-[4rem] !py-[2.5rem] drop-shadow-xl">
	<h2 class="pb-5 text-left text-primary-700">
		{contentList[0].label.includes('SvelteKit') ? 'SvelteKit' : 'Svelte'}
	</h2>
	<div>
		<div class="flex justify-between">
			<div>
				<div class="flex items-center gap-2">
					{#if contentList[0].label === 'Svelte Basics'}
						<BookOutline
							color="#EB4F27"
							size="lg" />
					{:else if contentList[0].label === 'SvelteKit Basics'}
						<AtomOutline
							color="#EB4F27"
							size="lg" />
					{/if}
					<h5 class="text-primary-700">Basics</h5>
				</div>
				<ol class="mt-2">
					{#each contentList[0].modules as { label, path }, i}
						<li class="pl-1 text-sm">
							<Link
								isNavigation
								href={path}>
								{i + 1}. {label}
							</Link>
						</li>
					{/each}
				</ol>
			</div>

			<div>
				<div class="flex items-center gap-2">
					{#if contentList[1].label === 'Advanced Svelte'}
						<SwatchbookOutline
							color="#EB4F27"
							size="lg" />
					{:else if contentList[1].label === 'Advanced SvelteKit'}
						<RocketOutline
							color="#EB4F27"
							size="lg" />
					{/if}

					<h5 class="text-primary-700">Advanced</h5>
				</div>

				<ol class="mt-2">
					{#each contentList[1].modules as { label, path }, i}
						<li class="pl-1 text-sm">
							<Link
								isNavigation
								href={path}>
								{i + 1}. {label}
							</Link>
						</li>
					{/each}
				</ol>
			</div>
		</div>
	</div>
</div>
