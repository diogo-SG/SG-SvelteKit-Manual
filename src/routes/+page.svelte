<script>
	import { ChevronRightOutline } from 'flowbite-svelte-icons';

	const src = '/img/svelte_logo.svg';
</script>

<!-- <p>
	This project is designed to provide an overview of the key features of Svelte and
	SvelteKit through practical examples, helping you get up to speed quickly.
	<br />
	By the end, you'll have a solid foundation to start building with these powerful tools.
</p> -->

<div class="flex h-[70vh] items-center justify-center gap-[6rem]">
	<div class="flex flex-col gap-6 rounded-3xl bg-[#fff] px-8 py-8 drop-shadow-2xl">
		<h1 class="font-normal">
			Welcome <br />
			to the
			<span class="font-bold text-primary-700">Svelte</span>
			<br />
			handbook
		</h1>
		<a
			class="internal_link"
			href="/svelte-basics/component-anatomy">
			Get started
			<ChevronRightOutline class="inline-block pb-[2px]" />
		</a>
	</div>
	<img
		{src}
		alt="Svelte logo"
		width="250"
		class="rounded-lg" />
</div>

<style>
	.internal_link {
		width: fit-content;
		padding: 0.5rem 1rem;
		color: #fff;
		border-radius: 0.5rem;
		background-color: #eb4f27;
	}
	.internal_link:hover {
		background-color: #fff;
		color: #eb4f27;
		outline: 2px solid #eb4f27;
	}
</style>
