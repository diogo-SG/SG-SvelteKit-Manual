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

<header class="sticky top-0 border-b bg-background px-4 md:px-6">
	<Navbar>
		<NavBrand href="/">
			<img
				src="/favicon.png"
				class="me-3 h-6 sm:h-9"
				alt="Svelte logo" />
		</NavBrand>
		<NavHamburger />
		<NavUl {activeUrl}>
			{#each NAVBAR as { href, label, modules }}
				{#if modules}
					<NavLi
						class={`${activeUrl.includes(label.toLowerCase().replaceAll(' ', '-')) ? 'text-primary-700' : ''} cursor-pointer`}>
						{label}
						<ChevronDownOutline
							class={`${activeUrl.includes(label.toLowerCase().replaceAll(' ', '-')) ? '' : ''} text-primary-800 ms-2 inline h-6 w-6 dark:text-white`} />
					</NavLi>
					<Dropdown class="z-20 w-44">
						{#each modules as { path, label }}
							<DropdownItem
								class={`${activeUrl.includes(label.toLowerCase().replaceAll(' ', '-')) ? 'text-primary-700 bg-gray-50' : ''}`}
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
</header>
