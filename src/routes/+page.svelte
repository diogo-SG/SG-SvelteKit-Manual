<script lang="ts">
	import Card from '$lib/components/ui/card/card.svelte';
	import { NAVBAR } from '$lib/components/ui/navbar/constants';
	import { ChevronRightOutline } from 'flowbite-svelte-icons';
	const svelteKontent = NAVBAR.filter((item) => item.label.includes('SvelteKit'));
	const svelteContent = NAVBAR.filter((item) => !item.label.includes('SvelteKit'));
</script>

<section class="background-pattern section">
	<div class="w-1/3 rounded-3xl bg-[#fff] px-12 py-12 drop-shadow-2xl">
		<div class="flex flex-col gap-[1.5rem]">
			<h1 class="font-thin">
				Welcome <br />
				to the

				<span class="font-bold text-primary-700">Svelte</span>
				<br />
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
<section class="section flex-col gap-[4rem] py-[2rem]">
	<Card contentList={svelteContent} />
	<Card contentList={svelteKontent} />
</section>

<style>
	.section {
		display: flex;
		min-height: 90vh;
		justify-content: center;
		align-items: center;
		margin: 0;
	}
	/* .slanted {
		transform: skew(-25deg);
	} */
	.background-pattern {
		position: relative;
		width: 100vw;
		min-height: 90vh;
		overflow: hidden;
	}

	.background-pattern::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		min-height: 90vh;
		background-image: url('/img/svelte_logo.svg');
		background-size: 50px;
		background-repeat: repeat;
		opacity: 0.8;
		z-index: -1;
		filter: blur(0.8px);
		background-size: 50px;
		animation: background-animation 60s linear infinite;
	}

	@keyframes background-animation {
		0% {
			background-position: 0 50%;
		}
		100% {
			background-position: 150% 50%;
		}
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
