<script>
	import { animate, inView } from 'motion';
	import { onMount } from 'svelte';
	import RangeSlider from 'svelte-range-slider-pips';
	import { fade } from 'svelte/transition';
	const currency = new Intl.NumberFormat('de', { style: 'currency', currency: 'EUR' });
	// @ts-ignore
	const formatter = (value) => currency.format(value);

	export let data;
	$: {
		if (showModal) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
	}

	// TODO: search
	// TODO: breadcrumbs
	// FIXME: going back doesnt work
	let isPriceOpen = true;
	let isColorOpen = true;
	let isSizeOpen = true;

	let showModal = false;

	$: filteredProducts =
		data.products?.filter(
			(product) => product.price >= values?.[0] && product.price <= values?.[1]
		) || [];

	$: minPrice = Math.min(...data.products.map((product) => product.price));
	$: maxPrice = Math.max(...data.products.map((product) => product.price));
	$: values = [minPrice, maxPrice];

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

<div class="md:min-h-screen">
	<div class="w-full pt-4 px-4 md:px-20 md:pt-10">
		<input class="w-full border px-3 py-2 rounded-lg" placeholder="Trazi..." />
	</div>
	<div
		class={`fixed top-0 right-0 ${showModal ? '' : 'translate-x-full'} h-screen  bg-gray-50 w-full text-red-500 shadow-lg transform transition-transform duration-300 z-50 md:hidden`}
	>
		<div class="flex flex-col justify-center h-full">
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

			<button class="mt-8 text-yellow-500" on:click={() => (showModal = false)}>Save</button>
		</div>
	</div>
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
		<div bind:this={mainSection} class="w-full pb-4 px-4 md:pr-48">
			<div class="flex justify-between pt-10">
				<p class="text-md text-gray-500">{filteredProducts.length} products</p>
				<button
					on:click={() => (showModal = !showModal)}
					class="bg-white w-8 h-auto border rounded-lg p-1 md:hidden"
				>
					<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
						><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
							id="SVGRepo_tracerCarrier"
							stroke-linecap="round"
							stroke-linejoin="round"
						></g><g id="SVGRepo_iconCarrier">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M9.90693 3.9999C9.93791 3.99996 9.96894 4.00001 10 4.00001C10.0311 4.00001 10.0621 3.99996 10.0931 3.9999C10.4618 3.99929 10.8242 3.99869 11.147 4.08519C12.0098 4.31636 12.6836 4.99023 12.9148 5.85296C13.0013 6.1758 13.0007 6.53821 13.0001 6.90693C13.0001 6.93792 13 6.96895 13 7.00001H21C21.5523 7.00001 22 7.44772 22 8.00001C22 8.55229 21.5523 9.00001 21 9.00001H13C13 9.03107 13.0001 9.0621 13.0001 9.09309C13.0007 9.46181 13.0013 9.82422 12.9148 10.1471C12.6836 11.0098 12.0098 11.6837 11.147 11.9148C10.8242 12.0013 10.4618 12.0007 10.0931 12.0001C10.0621 12.0001 10.0311 12 10 12C9.96894 12 9.93791 12.0001 9.90692 12.0001C9.5382 12.0007 9.17579 12.0013 8.85295 11.9148C7.99022 11.6837 7.31635 11.0098 7.08519 10.1471C6.99868 9.82421 6.99928 9.46181 6.9999 9.09308C6.99995 9.0621 7 9.03106 7 9.00001H5C4.44772 9.00001 4 8.55229 4 8.00001C4 7.44772 4.44772 7.00001 5 7.00001H7C7 6.96895 6.99995 6.93792 6.9999 6.90693C6.99928 6.53821 6.99868 6.1758 7.08519 5.85296C7.31635 4.99023 7.99022 4.31636 8.85295 4.08519C9.17579 3.99869 9.5382 3.99929 9.90693 3.9999ZM9.49861 6.00536C9.39195 6.01022 9.36685 6.01805 9.37059 6.01704C9.19804 6.06328 9.06327 6.19805 9.01704 6.3706C9.0162 6.37411 9.00963 6.40483 9.00535 6.49861C9.00024 6.61064 9 6.75845 9 7.00001V9.00001C9 9.24156 9.00024 9.38937 9.00535 9.5014C9.01021 9.60806 9.01804 9.63315 9.01704 9.62942C9.06327 9.80196 9.19804 9.93674 9.37059 9.98297C9.36685 9.98197 9.39195 9.98979 9.49861 9.99466C9.61063 9.99977 9.75844 10 10 10C10.2416 10 10.3894 9.99977 10.5014 9.99466C10.608 9.98979 10.6331 9.98197 10.6294 9.98297C10.802 9.93674 10.9367 9.80196 10.983 9.62942C10.982 9.63315 10.9898 9.60806 10.9946 9.5014C10.9998 9.38937 11 9.24156 11 9.00001V7.00001C11 6.75845 10.9998 6.61064 10.9946 6.49861C10.9898 6.39196 10.982 6.36686 10.983 6.3706M9.49861 6.00536C9.61063 6.00025 9.75844 6.00001 10 6.00001L9.49861 6.00536ZM10 6.00001C10.2416 6.00001 10.3894 6.00025 10.5014 6.00536L10 6.00001ZM10.5014 6.00536C10.5952 6.00963 10.6259 6.0162 10.6294 6.01704L10.5014 6.00536ZM10.6298 6.01713C10.6298 6.01713 10.6296 6.0171 10.6294 6.01704L10.6298 6.01713ZM15.9069 11.9999C15.9379 12 15.9689 12 16 12C16.0311 12 16.0621 12 16.0931 11.9999C16.4618 11.9993 16.8242 11.9987 17.147 12.0852C18.0098 12.3164 18.6836 12.9902 18.9148 13.853C19.0013 14.1758 19.0007 14.5382 19.0001 14.9069C19.0001 14.9379 19 14.9689 19 15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H19C19 17.0311 19.0001 17.0621 19.0001 17.0931C19.0007 17.4618 19.0013 17.8242 18.9148 18.1471C18.6836 19.0098 18.0098 19.6837 17.147 19.9148C16.8242 20.0013 16.4618 20.0007 16.0931 20.0001C16.0621 20.0001 16.0311 20 16 20C15.9689 20 15.9379 20.0001 15.9069 20.0001C15.5382 20.0007 15.1758 20.0013 14.853 19.9148C13.9902 19.6837 13.3164 19.0098 13.0852 18.1471C12.9987 17.8242 12.9993 17.4618 12.9999 17.0931C12.9999 17.0621 13 17.0311 13 17H5C4.44772 17 4 16.5523 4 16C4 15.4477 4.44772 15 5 15H13C13 14.969 12.9999 14.9379 12.9999 14.9069C12.9993 14.5382 12.9987 14.1758 13.0852 13.853C13.3164 12.9902 13.9902 12.3164 14.853 12.0852C15.1758 11.9987 15.5382 11.9993 15.9069 11.9999ZM15.4986 14.0054C15.392 14.0102 15.3669 14.018 15.3706 14.017C15.198 14.0633 15.0633 14.1981 15.017 14.3706C15.018 14.3669 15.0102 14.392 15.0054 14.4986C15.0002 14.6106 15 14.7585 15 15V17C15 17.2416 15.0002 17.3894 15.0054 17.5014C15.0102 17.6081 15.018 17.6332 15.017 17.6294C15.0633 17.802 15.198 17.9367 15.3706 17.983C15.3669 17.982 15.392 17.9898 15.4986 17.9947C15.6106 17.9998 15.7584 18 16 18C16.2416 18 16.3894 17.9998 16.5014 17.9947C16.608 17.9898 16.6331 17.982 16.6294 17.983C16.802 17.9367 16.9367 17.802 16.983 17.6294C16.982 17.6332 16.9898 17.6081 16.9946 17.5014C16.9998 17.3894 17 17.2416 17 17V15C17 14.7585 16.9998 14.6106 16.9946 14.4986C16.9898 14.392 16.982 14.3669 16.983 14.3706C16.9367 14.1981 16.802 14.0633 16.6294 14.017C16.6331 14.018 16.608 14.0102 16.5014 14.0054C16.3894 14.0002 16.2416 14 16 14C15.7584 14 15.6106 14.0002 15.4986 14.0054Z"
								fill="#0F1729"
							></path>
						</g></svg
					>
				</button>
			</div>
			<div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-8 pt-2">
				{#each filteredProducts as product}
					<a href="/kupuj/{product.id}" class="group">
						<div
							transition:fade
							class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
						>
							<img
								src={product?.images?.[0]?.image_url ?? ''}
								alt={product.description}
								class="h-64 w-full object-cover object-center group-hover:opacity-75"
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
