<script>
	import { animate, inView } from 'motion';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let data;

	let imageCounter = 0;

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
	let galleryEl;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let textEl;
	onMount(() => {
		inView(galleryEl, () => {
			animate(galleryEl, { x: [-100, 0], opacity: [0, 100] }, { duration: 0.7 });
		});
		inView(textEl, () => {
			animate(textEl, { x: [100, 0], opacity: [0, 100] }, { duration: 0.7 });
		});
	});
</script>

<div class="px-4 md:px-48 min-h-lvh">
	<div class="grid grid-cols-1 md:grid-cols-2 md:gap-8 pt-8">
		<div bind:this={galleryEl} class="md:p-8">
			<div class="relative">
				<img class="rounded-lg" src={data.product.images[imageCounter].image_url} />
				<button
					on:click={() => handleImageCounter(1)}
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
					on:click={() => handleImageCounter(0)}
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
						class="w-1/3 py-4 cursor-pointer"
						on:click={() => (imageCounter = i)}
					>
						<img class="rounded-lg" src={image.image_url} alt="Product image" />
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
