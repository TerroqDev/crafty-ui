<script>
	import { animate, inView } from 'motion';
	import { onMount } from 'svelte';
	import RangeSlider from 'svelte-range-slider-pips';
	import { fade } from 'svelte/transition';
	const currency = new Intl.NumberFormat('de', { style: 'currency', currency: 'EUR' });
	// @ts-ignore
	const formatter = (value) => currency.format(value);

	let isPriceOpen = true;
	let isColorOpen = true;
	let isSizeOpen = true;

	let productData = [
		{
			id: 1,
			name: 'Eather Bottle',
			price: 48,
			imgUrl: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg'
		},

		{
			id: 2,
			name: 'Nomad Tumbler',
			price: 35,
			imgUrl: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg'
		},
		{
			id: 3,
			name: 'Focus Paper Refill',
			price: 89,
			imgUrl: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg'
		},
		{
			id: 4,
			name: 'Machined Mechanical Pencil',
			price: 35,
			imgUrl: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg'
		},
		{
			id: 5,
			name: 'Notes',
			price: 12,
			imgUrl: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-05.jpg'
		},
		{
			id: 6,
			name: 'Stack of boxes',
			price: 35,
			imgUrl: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-06.jpg'
		}
	];
	$: filteredProducts = productData.filter(
		(product) => product.price >= values[0] && product.price <= values[1]
	);
	const minPrice = productData.reduce(
		(min, item) => (item.price < min ? item.price : min),
		productData[0].price
	);
	const maxPrice = productData.reduce(
		(max, item) => (item.price > max ? item.price : max),
		productData[0].price
	);
	let values = [minPrice, maxPrice];
	$: console.log(values);

	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let filters;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let mainSection;

	onMount(() => {
		inView(filters, () => {
			animate(filters, { x: [-100, 0], opacity: [0, 1] }, { duration: 0.7 });
		});

		inView(mainSection, () => {
			animate(mainSection, { opacity: [0, 1] }, { duration: 1 });
		});
	});
</script>

<div class=" ">
	<div class="flex">
		<div bind:this={filters} class="hidden md:flex md:flex-col pt-8 min-w-52 px-4 ml-14">
			<h1 class="text-xl text-gray-600 mx-4 py-4 border-b border-gray-600 font-bold">Filter by</h1>
			<div class="mx-4 pt-4">
				<p class="text-gray-600 font-semibold flex justify-between">
					Price <span class="cursor-pointer" on:click={() => (isPriceOpen = !isPriceOpen)}>
						<div class="relative w-3 h-3 cursor-pointer group mt-2">
							<!-- Vertical line -->
							<div
								class={`absolute top-0 left-1/2 w-[2px] h-full bg-gray-600 transform -translate-x-1/2 transition-transform duration-300 ease-out ${isPriceOpen ? 'rotate-90' : ''} `}
							></div>

							<!-- Horizontal line -->
							<div
								class={`absolute top-1/2 left-0 w-full h-[2px] bg-gray-600 transform -translate-y-1/2 transition-transform duration-300 ease-out ${isPriceOpen ? 'rotate-180' : ''} `}
							></div>
						</div>
					</span>
				</p>
			</div>

			<div
				class={`px-2 transform transition-all duration-300 overflow-hidden ${isPriceOpen ? 'max-h-0 ' : 'max-h-40'} `}
			>
				<RangeSlider
					{formatter}
					range
					pips
					all="label"
					min={minPrice}
					max={maxPrice}
					step={1}
					pipstep={50000}
					bind:values
				/>
			</div>
			<hr class="bg-gray-600 mx-4 mt-4" />
			<div class="mx-4 pt-4">
				<p class="text-gray-600 font-semibold flex justify-between">
					Size <span class="cursor-pointer" on:click={() => (isSizeOpen = !isSizeOpen)}>
						<div class="relative w-3 h-3 cursor-pointer group mt-2">
							<!-- Vertical line -->
							<div
								class={`absolute top-0 left-1/2 w-[2px] h-full bg-gray-600 transform -translate-x-1/2 transition-transform duration-300 ease-out ${isSizeOpen ? 'rotate-90' : ''} `}
							></div>

							<!-- Horizontal line -->
							<div
								class={`absolute top-1/2 left-0 w-full h-[2px] bg-gray-600 transform -translate-y-1/2 transition-transform duration-300 ease-out ${isSizeOpen ? 'rotate-180' : ''} `}
							></div>
						</div>
					</span>
				</p>
			</div>
			<div
				class={`px-4 transform transition-all duration-300 overflow-hidden ${isSizeOpen ? 'max-h-0 ' : 'max-h-40'} `}
			>
				<div class="pt-2">
					<input id="100ml" type="checkbox" />
					<label for="100ml">100 ml</label>
				</div>
				<div class="pt-2">
					<input id="200ml" type="checkbox" />
					<label for="200ml">200 ml</label>
				</div>
				<div class="pt-2">
					<input id="300ml" type="checkbox" />
					<label for="300ml">300 ml</label>
				</div>
			</div>
			<hr class="bg-gray-600 mx-4 mt-4" />
			<div class="mx-4 pt-4">
				<p class="text-gray-600 font-semibold flex justify-between">
					Color <span class="cursor-pointer" on:click={() => (isColorOpen = !isColorOpen)}>
						<div class="relative w-3 h-3 cursor-pointer group mt-2">
							<!-- Vertical line -->
							<div
								class={`absolute top-0 left-1/2 w-[2px] h-full bg-gray-600 transform -translate-x-1/2 transition-transform duration-300 ease-out ${isColorOpen ? 'rotate-90' : ''} `}
							></div>

							<!-- Horizontal line -->
							<div
								class={`absolute top-1/2 left-0 w-full h-[2px] bg-gray-600 transform -translate-y-1/2 transition-transform duration-300 ease-out ${isColorOpen ? 'rotate-180' : ''} `}
							></div>
						</div>
					</span>
				</p>
			</div>
			<div
				class={`px-4 transform transition-all duration-300 overflow-hidden ${isColorOpen ? 'max-h-0 ' : 'max-h-40'} `}
			>
				<div class="pt-2">
					<input id="black" type="checkbox" />
					<label for="black">Black</label>
				</div>
				<div class="pt-2">
					<input id="red" type="checkbox" />
					<label for="red">Red</label>
				</div>
				<div class="pt-2">
					<input id="green" type="checkbox" />
					<label for="green">Green</label>
				</div>
			</div>
			<hr class="bg-gray-600 mx-4 mt-4" />
		</div>
		<div bind:this={mainSection} class="w-full py-8 px-4 md:pr-48">
			<h1 class="text-4xl text-gray-600 font-bold">All products</h1>
			<p class="text-gray-500">This section should describe the products</p>
			<div class="flex justify-between pt-10">
				<p class="text-sm text-gray-500">12 products</p>
				<p class="text-sm text-gray-500">1st page</p>
			</div>
			<div
				class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 pt-2"
			>
				{#each filteredProducts as product}
					<a href="/kupuj/{product.id}" class="group">
						<div
							transition:fade
							class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
						>
							<img
								src={product.imgUrl}
								alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
								class="h-full w-full object-cover object-center group-hover:opacity-75"
							/>
						</div>
						<h3 class="mt-4 text-sm text-gray-700">{product.name}</h3>
						<p class="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
					</a>
				{/each}
				<!-- More products... -->
			</div>
		</div>
	</div>
</div>

<style>
	:root {
	}
</style>
