<script>
	import { ChevronRightOutline } from 'flowbite-svelte-icons';
</script>

<section class="background-pattern flex items-center justify-center">
	<div class="w-1/3 rounded-3xl bg-[#fff] px-12 py-12 drop-shadow-2xl">
		<div class="flex flex-col gap-[1.5rem]">
			<h1 class="font-thin">
				Welcome <br />
				to the
				<br />
				<span class="font-bold text-primary-700">Svelte</span>
				handbook
			</h1>

			<p class="text-sm text-primary-700">
				This project offers a <span class=" bg-primary-700 px-1 text-[#fff]">
					quick introduction to the key features of Svelte and SvelteKit
				</span>
				with practical examples.
			</p>
			<div class="inline-flex justify-end">
				<a
					class="internal_link"
					href="/svelte-basics/component-anatomy">
					Get started
					<ChevronRightOutline class="inline-block pb-[2px]" />
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	/* .slanted {
		transform: skew(-25deg);
	} */
	.background-pattern {
		position: relative;
		width: 100vw;
		height: 90vh;
		overflow: hidden;
	}

	.background-pattern::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 90vh;
		background-image: url('/img/svelte_logo.svg');
		background-size: 50px;
		background-repeat: repeat;
		opacity: 0.6;
		z-index: -1;
		filter: blur(0.8px);
	}
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
