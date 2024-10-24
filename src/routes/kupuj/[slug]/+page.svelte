<script>
	import { fade } from 'svelte/transition';

	/** @type {import('./$types').PageData} */
	export let data;

	let imageCounter = 0;
	let activeImage = data.imgUrls[imageCounter];
</script>

<div class="px-4 md:px-48">
	<div class="grid grid-cols-2 gap-8 pt-8">
		<div class="p-8">
			<div class="relative">
				<img class="rounded-lg" src={data.imgUrls[imageCounter]} />
				<button on:click={() => (imageCounter += 1)} class="absolute right-8 bottom-8">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
						/>
					</svg>
				</button>
			</div>
			<div class="flex gap-2 overflow-scroll">
				{#each data.imgUrls as image, i}
					<div
						transition:fade
						class="w-1/3 py-4 cursor-pointer"
						on:click={() => (activeImage = data.imgUrls[i])}
					>
						<img class="rounded-lg" src={image} alt="Product image" />
					</div>
				{/each}
			</div>
		</div>
		<div>
			<h1 class="font-bold text-primary text-xl pt-8">{data.name}</h1>
			<p class="text-xl text-gray-600 pt-2">{data.description}</p>
			<p class="text-2xl text-gray-800 pt-2 font-extrabold">${data.price}</p>
			<p class="pt-4 text-gray-600 text-lg">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
				galley of type and scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
				passages, and more recently with desktop publishing software like Aldus PageMaker including
				versions of Lorem Ipsum.
			</p>
			<h1 class="pt-8 text-2xl text-bold text-gray-700">Lidija Babic</h1>
			<p class="text-gray-600 pt-2">098999999</p>
			<p class="text-gray-600">lidija.babic@gmail.com</p>
		</div>
	</div>
</div>
