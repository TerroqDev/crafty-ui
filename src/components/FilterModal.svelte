<script>
	import RangeSlider from 'svelte-range-slider-pips';
	/**
	 * @type {boolean}
	 */
	export let showModal;
	let isPriceOpen = false;

	let minPrice = 0;
	let maxPrice = 200;

	let values;
</script>

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
			<!-- <RangeSlider -->
			<!-- 	{formatter} -->
			<!-- 	range -->
			<!-- 	pips -->
			<!-- 	all="label" -->
			<!-- 	min={minPrice} -->
			<!-- 	max={maxPrice} -->
			<!-- 	step={1} -->
			<!-- 	pipstep={50000} -->
			<!-- 	bind:values -->
			<!-- /> -->
		</div>
		<hr class="bg-gray-600 mx-4 mt-4" />

		<button class="mt-8 text-yellow-500" on:click={() => (showModal = false)}>Save</button>
	</div>
</div>
