<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem
	} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
	import { NAVBAR } from './constants';
	$: activeUrl = $page.url.pathname;
</script>

<Navbar
	fluid
	class="sticky top-0 !z-[100] border-b bg-background px-4 md:px-10">
	<NavBrand href="/">
		<img
			src="/img/sg_black_logo.png"
			class="h-6 sm:h-9"
			alt="Svelte logo" />
	</NavBrand>
	<NavHamburger />
	<NavUl {activeUrl}>
		{#each NAVBAR as { path, label, modules }}
			{#if modules}
				<NavLi
					class={`${activeUrl.split('/')[1] === label.toLowerCase().replaceAll(' ', '-') ? 'text-primary-700' : ''} relative cursor-pointer`}>
					{label}
					<ChevronDownOutline class="inline h-6 w-6 text-primary-800 dark:text-white" />
				</NavLi>
				<Dropdown class="absolute z-20 w-44 rounded-md bg-background drop-shadow-md">
					{#each modules as { path, label }}
						<DropdownItem
							data-sveltekit-reload
							class={`${activeUrl.includes(path) ? 'bg-gray-50 text-primary-700' : ''} hover:text-primary-700`}
							href={path}>
							{label}
						</DropdownItem>
					{/each}
				</Dropdown>
			{:else}
				<NavLi
					href={path}
					class="cursor-pointer">
					{label}
				</NavLi>
			{/if}
		{/each}
	</NavUl>
</Navbar>
