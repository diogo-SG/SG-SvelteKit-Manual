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
		{#each NAVBAR as { href, label, modules }}
			{#if modules}
				<NavLi
					class={`${activeUrl.includes(label.toLowerCase().replaceAll(' ', '-')) ? 'text-primary-700' : ''} relative cursor-pointer`}>
					{label}
					<ChevronDownOutline
						class={`ms-2 inline h-6 w-6 text-primary-800 dark:text-white`} />
				</NavLi>
				<Dropdown class="absolute z-20 w-44 rounded-lg bg-background">
					{#each modules as { path, label }}
						<DropdownItem
							class={`${activeUrl.includes(label.toLowerCase().replaceAll(' ', '-')) ? 'bg-gray-50 text-primary-700' : ''}`}
							href={path}>
							{label}
						</DropdownItem>
					{/each}
				</Dropdown>
			{:else}
				<NavLi
					{href}
					class="cursor-pointer">
					{label}
				</NavLi>
			{/if}
		{/each}
	</NavUl>
</Navbar>
