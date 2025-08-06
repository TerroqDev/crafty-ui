<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	const breadcrumbs = derived(page, ($page) => {
		const segments = $page.url.pathname.split('/').filter(Boolean);

		// Build breadcrumb items with name and href
		return segments.map((segment, index) => {
			const href = '/' + segments.slice(0, index + 1).join('/');
			return { name: segment, href };
		});
	});
	export let data;
	// TODO: kreirati rutu koja ce editat oglas
	// TODO: on klik uvecati sliku
</script>

<div class="pt-2">
	<ul class="flex text-gray-500 text-sm font-medium">
		{#each $breadcrumbs as crumb}
			<li>
				<span class="pl-1">/</span>
				<a href={crumb.href}>{crumb.name}</a>
			</li>
		{/each}
	</ul>
	<div class="flex pt-8 flex-col justify-between">
		<label class="pb-1 text-gray-700" for="naziv">Naziv: </label>
		<input
			id="naziv"
			class="border rounded-lg px-2 py-3"
			type="text"
			placeholder={data.product.name}
		/>
	</div>
	<div class="flex flex-col justify-between pt-4">
		<label class="pt-2 pb-1 text-gray-700" for="naziv">Tekst: </label>
		<textarea rows="5" class="border rounded-lg px-2 py-3" placeholder={data.product.description}
		></textarea>
	</div>
	<div class="flex flex-col justify-between pt-4">
		<label class="pt-2 pb-1 text-gray-700" for="">Slike</label>

		<div class="flex gap-2 overflow-scroll">
			<div class="mt-4">
				<button
					class="bg-gray-200 hover:brightness-90 text-2xl py-2 px-4 rounded-full text-gray-800"
					>+</button
				>
			</div>
			{#each data.product.images as image}
				<div transition:fade class="w-20 h-16 mt-2 cursor-pointer relative">
					<img
						class="rounded-lg absolute inset-0 w-full h-full object-cover"
						src={image.image_url}
						alt="Product image"
					/>
				</div>
			{/each}
		</div>
	</div>
	<div class="flex justify-end gap-2 pt-4">
		<button on:click={() => goto('/profil/oglasi')} class="px-3 rounded-lg py-2 bg-gray-100"
			>Odbaci</button
		>
		<button class="px-3 rounded-lg py-2 bg-yellow-500 text-white">Spremi</button>
	</div>
</div>
