<script>
	import RangeSlider from 'svelte-range-slider-pips';
	const currency = new Intl.NumberFormat('de', { style: 'currency', currency: 'EUR' });
	// @ts-ignore
	const formatter = (value) => currency.format(value);
	let values = [35, 85];

	let isPriceOpen = true;
	let isColorOpen = true;
	let isSizeOpen = true;
</script>

<div class=" ">
	<div class="flex">
		<div class="hidden md:flex md:flex-col pt-8 min-w-52 px-4 ml-14">
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
					min={35}
					max={85}
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
		<div class="w-full py-8 px-4 md:pr-48">
			<h1 class="text-4xl text-gray-600 font-bold">All products</h1>
			<p class="text-gray-500">This section should describe the products</p>
			<div class="flex justify-between pt-10">
				<p class="text-sm text-gray-500">12 products</p>
				<p class="text-sm text-gray-500">1st page</p>
			</div>
			<div
				class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 pt-2"
			>
				<a href="#" class="group">
					<div
						class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
					>
						<img
							src="https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg"
							alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
							class="h-full w-full object-cover object-center group-hover:opacity-75"
						/>
					</div>
					<h3 class="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
					<p class="mt-1 text-lg font-medium text-gray-900">$48</p>
				</a>
				<a href="#" class="group">
					<div
						class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
					>
						<img
							src="https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg"
							alt="Olive drab green insulated bottle with flared screw lid and flat top."
							class="h-full w-full object-cover object-center group-hover:opacity-75"
						/>
					</div>
					<h3 class="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
					<p class="mt-1 text-lg font-medium text-gray-900">$35</p>
				</a>
				<a href="#" class="group">
					<div
						class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
					>
						<img
							src="https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg"
							alt="Person using a pen to cross a task off a productivity paper card."
							class="h-full w-full object-cover object-center group-hover:opacity-75"
						/>
					</div>
					<h3 class="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
					<p class="mt-1 text-lg font-medium text-gray-900">$89</p>
				</a>
				<a href="#" class="group">
					<div
						class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
					>
						<img
							src="https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg"
							alt="Hand holding black machined steel mechanical pencil with brass tip and top."
							class="h-full w-full object-cover object-center group-hover:opacity-75"
						/>
					</div>
					<h3 class="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
					<p class="mt-1 text-lg font-medium text-gray-900">$35</p>
				</a>

				<a href="#" class="group">
					<div
						class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
					>
						<img
							src="https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-05.jpg"
							alt="Hand holding black machined steel mechanical pencil with brass tip and top."
							class="h-full w-full object-cover object-center group-hover:opacity-75"
						/>
					</div>
					<h3 class="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
					<p class="mt-1 text-lg font-medium text-gray-900">$35</p>
				</a>
				<a href="#" class="group">
					<div
						class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
					>
						<img
							src="https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-06.jpg"
							alt="Hand holding black machined steel mechanical pencil with brass tip and top."
							class="h-full w-full object-cover object-center group-hover:opacity-75"
						/>
					</div>
					<h3 class="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
					<p class="mt-1 text-lg font-medium text-gray-900">$35</p>
				</a>
				<!-- More products... -->
			</div>
		</div>
	</div>
</div>

<style>
	:root {
	}
</style>
