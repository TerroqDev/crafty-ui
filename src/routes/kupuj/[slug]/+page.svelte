<script>
	import { run } from 'svelte/legacy';

	import { browser } from '$app/environment';
	import { animate, inView } from 'motion';
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	// TODO: image change animation
	// TODO: image size set
	// TODO: modal full size image - maybe add controls
	// FIX: controls look like shit
	

	/**
	 * @typedef {Object} Props
	 * @property {any} data - NOTE: check if flex col to middle everything will look better
	 */

	/** @type {Props} */
	let { data } = $props();

	let imageCounter = $state(0);
	let fullSizeImage = $state(false);

	const breadcrumbs = derived(page, ($page) => {
		const segments = $page.url.pathname.split('/').filter(Boolean);

		// Build breadcrumb items with name and href
		return segments.map((segment, index) => {
			const href = '/' + segments.slice(0, index + 1).join('/');
			return { name: segment, href };
		});
	});

	run(() => {
		if (browser) document.body.classList.toggle('noscroll', fullSizeImage);
	});

	function handleEscapeKey(event) {
		if (event.key === 'Escape') {
			fullSizeImage = false;
		}
	}
	/**
	 * @param {number} orientation
	 */
	function handleImageCounter(orientation) {
		if (orientation === 0) {
			imageCounter = imageCounter <= 0 ? data.product.images.length - 1 : imageCounter - 1;
		} else if (orientation === 1) {
			imageCounter = imageCounter >= data.product.images.length - 1 ? 0 : imageCounter + 1;
		}
	}
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let galleryEl = $state();
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let textEl = $state();
	onMount(() => {
		window.addEventListener('keydown', handleEscapeKey);
		inView(galleryEl, () => {
			animate(galleryEl, { x: [-100, 0], opacity: [0, 100] }, { duration: 0.7 });
		});
		inView(textEl, () => {
			animate(textEl, { x: [100, 0], opacity: [0, 100] }, { duration: 0.7 });
		});
	});

	onDestroy(() => {
		window.removeEventListener('keydown', handleEscapeKey);
	});
</script>

{#if fullSizeImage}
	<div
		onclick={() => (fullSizeImage = false)}
		class="fixed overflow-hidden h-lvh inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
	>
		<img
			src={data.product.images[imageCounter].image_url}
			alt="Full size product"
			className="max-w-full max-h-full rounded-lg"
		/>
	</div>
{/if}
<div class="px-4 md:px-48 min-h-lvh">
	<nav class="px-8 pt-8 pb-2 text-gray-500 text-sm font-medium" aria-label="Breadcrumb">
		<ul class="flex">
			<li><a href="/">Home</a></li>
			{#each $breadcrumbs as crumb}
				<li>
					<span class="pl-1">/</span>
					<a href={crumb.href}>{crumb.name}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
		<div bind:this={galleryEl} class="md:px-8">
			<div class="relative w-full aspect-video">
				<img
					class="rounded-lg absolute inset-0 w-full h-full object-cover cursor-pointer"
					onclick={() => (fullSizeImage = true)}
					src={data.product.images[imageCounter].image_url}
				/>
				<button
					onclick={() => handleImageCounter(1)}
					class="absolute rounded-full border border-gray-300 p-2 bg-gray-100 right-4 bottom-8 transition-all duration-300 ease-in hover:bg-gray-50"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="#dbc53e"
						class="size-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
						/>
					</svg>
				</button>
				<button
					onclick={() => handleImageCounter(0)}
					class="absolute border border-gray-300 bg-gray-100 rounded-full p-2 right-16 bottom-8 transition-all duration-300 ease-in hover:bg-gray-50"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="#dbc53e"
						class="size-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
						/>
					</svg>
				</button>
			</div>
			<div class="flex gap-2 overflow-scroll">
				{#each data.product.images as image, i}
					<div
						transition:fade
						class="w-20 h-16 mt-2 cursor-pointer relative"
						onclick={() => (imageCounter = i)}
					>
						<img
							class="rounded-lg absolute inset-0 w-full h-full object-cover"
							src={image.image_url}
							alt="Product image"
						/>
					</div>
				{/each}
			</div>
		</div>
		<div bind:this={textEl}>
			<h1 class="font-bold text-primary text-xl pt-8">{data.product.name}</h1>
			<p class="text-gray-600 pt-2">{data.seller.email}</p>
			<p class="text-2xl text-gray-700 pt-2 font-extrabold">${data.product.price}</p>
			<p class="pt-4 text-gray-600 text-lg">{data.product.description}</p>
		</div>
	</div>
</div>
