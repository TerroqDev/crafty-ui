<script>
	import { run } from 'svelte/legacy';

	let isMenuOpen = $state(false);
	import { browser } from '$app/environment';
	import { animate } from 'motion';
	import { user } from '../routes/store';
	import { goto } from '$app/navigation';

	run(() => {
		if (browser) document.body.classList.toggle('noscroll', isMenuOpen);
	});
	// FIX: fix moj profil link going to prijava
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let odjava;

	function logOff() {
		user.set({});
		isMenuOpen = false;
		goto('/');
		return;
	}
	/**
	 * @type {any[]}
	 */
	let navRefs = $state([]);
	const menuItemsLoggedOut = [
		{ name: 'Kupuj', link: 'kupuj' },
		{ name: 'Prijava', link: 'prijava' },
		{ name: 'Q & A', link: 'qa' },
		{ name: 'Kontakt', link: 'kontakt' }
	];

	const menuItemsLoggedIn = [
		{ name: 'Kupuj', link: 'kupuj' },
		{ name: 'Moj profil', link: 'profil' },
		{ name: 'Q & A', link: 'qa' },
		{ name: 'Kontakt', link: 'kontakt' },
		{ name: 'Logout', link: '/' }
	];
	function toggleMenu() {
		if (!isMenuOpen) {
			for (const [index, el] of navRefs.entries()) {
				animate(el, { opacity: [0, 1] }, { duration: 1.5, delay: 0.1 * index + 0.1 });
			}
			//if($user){
			//  animate(odjava, {opacity: [0, 1]}, {duration: 1.5, delay: 0.1 * menuItems.length + 0.1})
			//}
		}
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav class="px-4 md:px-20 lg:px-48 bg-gray-800">
	<div class="flex items-center justify-between w-full">
		<a href="/" class="z-20" onclick={() => (isMenuOpen = false)}>
			<svg
				class="w-24 h-10"
				width="759"
				height="164"
				viewBox="0 0 759 164"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M68.65 163.39C48.1 163.39 31.37 155.84 18.48 140.72C6.16 125.47 0 105.77 0 81.64C0 65.1 2.65 50.72 7.95 38.51C13.25 26.3 20.71 16.83 30.35 10.1C39.98 3.36998 51.31 0 64.35 0C78.6 0 90.97 4.93998 101.46 14.82C111.95 24.7 119.06 38.1 122.78 55L123.53 58.87L107.52 59.41C104.8 46.45 99.46 36.1 91.51 28.37C83.92 21.07 74.86 17.41 64.33 17.41C49.29 17.41 37.42 23.16 28.72 34.65C20.02 46.14 15.67 61.81 15.67 81.65C15.67 101.2 20.49 116.81 30.12 128.49C39.75 140.16 52.59 146 68.63 146C81.16 146 91.92 141.45 100.91 132.36C109.9 123.27 115.79 110.95 118.58 95.41L119.55 89.82L134.48 95.41L133.84 99.17C130.26 118.94 122.61 134.58 110.91 146.11C99.21 157.63 85.12 163.39 68.65 163.39Z"
					fill="#DBC53E"
				/>
				<path
					d="M242.78 162.32C233.18 162.32 226.67 154.77 223.23 139.65L217.32 114.08C215.89 108.35 214.31 104.09 212.59 101.3C209.87 96.72 206.36 94.42 202.06 94.42H159.2V158.23H143.52V5.16H211.09C223.26 5.16 233.2 9.27998 240.9 17.51C248.6 25.75 252.45 36.38 252.45 49.41C252.45 59.58 249.98 68.35 245.04 75.73C240.1 83.11 233.4 88.26 224.95 91.2C228.32 96.07 231 102.84 233.01 111.5L238.81 136.31C239.67 140.18 240.56 142.72 241.5 143.94C242.07 144.66 242.72 145.01 243.43 145.01C244.79 145.01 246.44 143.26 248.37 139.75L251.7 133.3L262.23 146.62L260.83 149.31C256.31 157.99 250.3 162.32 242.78 162.32ZM210.98 77.13C218.64 77.13 224.82 74.62 229.51 69.61C234.2 64.6 236.55 58.01 236.55 49.84C236.55 41.67 234.2 35.07 229.51 30.02C224.82 24.97 218.64 22.45 210.98 22.45H159.2V77.13H210.98Z"
					fill="#DBC53E"
				/>
				<path
					d="M391.45 158.24H374.69L361.48 120.75H298.1L284.78 158.24H268.02L322.59 5.16H336.98L391.45 158.24ZM355.46 103.56L329.79 31.16L304.01 103.56H355.46Z"
					fill="#DBC53E"
				/>
				<path
					d="M425.83 158.24H410.15V5.16H501.46V22.45H425.84V72.19H492.23V89.48H425.84V158.24H425.83Z"
					fill="#DBC53E"
				/>
				<path
					d="M582.23 158.24H566.55V22.46H520.14V5.16998H628.64V22.46H582.23V158.24Z"
					fill="#DBC53E"
				/>
				<path
					d="M709.53 158.24H693.85V96.47L644.65 5.16H663.23L701.9 77.13L740.25 5.16H758.83L709.52 96.47V158.24H709.53Z"
					fill="#DBC53E"
				/>
			</svg>
		</a>
		<div class="min-w-24 hidden md:max-[4200px]:block"></div>
		<button
			name="Contact call to action"
			class={`m-4 flex top-0 right-0 z-50 relative w-10 h-10 text-textcol focus:outline-hidden`}
			onclick={toggleMenu}
		>
			<div class="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
				<span
					class={`absolute h-0.5 w-5 transform transition duration-300 ease-in-out ${
						isMenuOpen ? 'rotate-45  delay-200 bg-gray-600' : '-translate-y-1.5 bg-gray-100'
					}`}
				></span>
				<span
					class={`absolute h-0.5 bg-gray-100 transform transition-all duration-200 ease-in-out ${
						isMenuOpen ? 'w-0 opacity-50' : 'w-5 delay-200 opacity-100'
					}`}
				></span>
				<span
					class={`absolute h-0.5 w-5 transform transition duration-300 ease-in-out ${
						isMenuOpen ? '-rotate-45 bg-gray-600 delay-200' : 'translate-y-1.5 bg-gray-100'
					}`}
				></span>
			</div>
		</button>
	</div>

	<nav
		class={`fixed flex top-0 left-0 w-full z-40 h-screen bg-gray-50 text-primary bg-opacity-100 transform delay-100 transition-all duration-500 ${
			isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
		}`}
	>
		<ul
			class="flex flex-col items-center w-full tracking-tighter justify-center align-middle text-center font-bold text-gray-500"
		>
			{#if $user}
				{#each menuItemsLoggedIn as item, index}
					<li bind:this={navRefs[index]} class="text-3xl p-4 w-full">
						<a
							class="hover:text-primary transition transform ease-in duration-300"
							onclick={() => (isMenuOpen = false)}
							href="/{item.link}"
						>
							{item.name}
						</a>
					</li>
				{/each}
			{:else}
				{#each menuItemsLoggedOut as item, index}
					<li bind:this={navRefs[index]} class="text-3xl p-4 w-full">
						<a
							class="hover:text-primary transition transform ease-in duration-300"
							onclick={() => (isMenuOpen = false)}
							href="/{item.link}"
						>
							{item.name}
						</a>
					</li>
				{/each}
			{/if}
		</ul>
	</nav>
</nav>
