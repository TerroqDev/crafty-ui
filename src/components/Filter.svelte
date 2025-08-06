<script>
	import RangeSlider from 'svelte-range-slider-pips';
	let filters;

	const currency = new Intl.NumberFormat('de', { style: 'currency', currency: 'EUR' });
	const formatter = (value) => currency.format(value);
	let isPriceOpen = false;
	let isSizeOpen = false;
	let isColorOpen = false;
	let minPrice = 0;
	let maxPrice = 200;
	let values = [];
</script>

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
