<script>
	let isMenuOpen = false;
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { animate } from 'motion';
	import { onMount } from 'svelte';
	$: if (browser) document.body.classList.toggle('noscroll', isMenuOpen);
	$: href = $page.url.pathname;
	let pocetna, onama, otkup, zbrinjavanje, kontakt;

	function toggleMenu() {
		if (!isMenuOpen) {
			animate(pocetna, { opacity: [0, 1] }, { duration: 1.5, delay: 0.1 });
			animate(onama, { opacity: [0, 1] }, { duration: 1.5, delay: 0.2 });
			animate(otkup, { opacity: [0, 1] }, { duration: 1.5, delay: 0.3 });
			animate(zbrinjavanje, { opacity: [0, 1] }, { duration: 1.5, delay: 0.4 });
			animate(kontakt, { opacity: [0, 1] }, { duration: 1.5, delay: 0.5 });
		}
		isMenuOpen = !isMenuOpen;
	}

	onMount(() => {});
</script>

<nav class="px-4 md:px-20 lg:px-48 bg-gray-50">
	<div class="flex items-center justify-between w-full">
		<a
			href="/"
			class="text-gray-600 font-bold px-4 min-w-24 text-xl z-20"
			on:click={() => (isMenuOpen = false)}
		>
			<h1>Crafty</h1>
		</a>
		<div class="min-w-24 hidden md:max-[4200px]:block">
		</div>
		<button
			name="Contact call to action"
			class={`m-4 flex top-0 right-0 z-50 relative w-10 h-10 text-textcol focus:outline-none`}
			on:click={toggleMenu}
		>
			<div class="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
				<span
					class={`absolute h-0.5 w-5 transform transition duration-300 ease-in-out ${
						isMenuOpen ? 'rotate-45  delay-200 bg-gray-600' : '-translate-y-1.5 bg-gray-600'
					}`}
				></span>
				<span
					class={`absolute h-0.5 bg-gray-600  transform transition-all duration-200 ease-in-out ${
						isMenuOpen ? 'w-0 opacity-50' : 'w-5 delay-200 opacity-100'
					}`}
				></span>
				<span
					class={`absolute h-0.5 w-5 transform transition duration-300 ease-in-out ${
						isMenuOpen ? '-rotate-45 bg-gray-600 delay-200' : 'translate-y-1.5 bg-gray-600'
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
			class="flex flex-col items-center w-full justify-center align-middle text-center font-bold text-gray-500"
		>
			<li bind:this={pocetna} class="text-3xl tracking-tighter p-4 w-full">
				<a class="hover:text-gray-600" on:click={() => (isMenuOpen = false)} href="/kupuj"> Kupuj </a>
			</li>
			<li bind:this={onama} class="tracking-tighter text-3xl p-4 w-full">
				<a class="hover:text-gray-600" on:click={() => (isMenuOpen = false)} href="/prijava">
					Moj Profil
				</a>
			</li>
			<li bind:this={otkup} class="text-3xl tracking-tighter p-4 w-full">
				<a on:click={() => (isMenuOpen = false)} href="/" class="hover:text-gray-600"> Craftko </a>
			</li>
			<li bind:this={zbrinjavanje} class="text-3xl tracking-tighter p-4 w-full">
				<a on:click={() => (isMenuOpen = false)} href="/" class="hover:text-gray-600"> Q & A </a>
			</li>
			<li bind:this={kontakt} class="text-3xl p-4 tracking-tighter w-full">
				<a on:click={() => (isMenuOpen = false)} href="/" class="hover:text-gray-600"> Kontakt </a>
			</li>
		</ul>
	</nav>
</nav>
