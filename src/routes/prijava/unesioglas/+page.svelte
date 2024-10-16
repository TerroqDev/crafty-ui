<script>
	/**
	 * @type {any}
	 */
	let price;
</script>

<div class="flex flex-col w-full">
	<div class="flex py-2">
		<div class="w-3/5 py-4 px-6 bg-gray-50 rounded-xl mr-2 border border-gray-300">
			<h1 class="text-xl">Generalne informacije</h1>
			<h2 class="pt-4">Ime proizvoda:</h2>
			<div class="py-3 w-full">
				<input class="p-2 rounded w-full" placeholder="Knjiga" />
			</div>
			<h2>Opis proizvoda:</h2>
			<div class="py-3">
				<textarea rows="4" class="w-full rounded p-2" />
			</div>
			<h2>Kljucne rijeci:</h2>
			<div class="py-3 w-full">
				<input class="p-2 rounded w-full" />
			</div>
		</div>
		<div class="bg-gray-50 rounded-xl w-2/5 ml-2 px-6 border border-gray-300">
			<h1 class="pt-4 text-xl">Slike</h1>
			<div class="py-4 px-1">
				<img class="rounded-xl" src="https://dummyimage.com/600x400/000/fff" alt="Dummy" />
			</div>
			<div class="flex">
				<div class="px-1">
					<img class="rounded-xl" src="https://dummyimage.com/400x400/000/fff" alt="Dummy" />
				</div>
				<div class="px-1">
					<img class="rounded-xl" src="https://dummyimage.com/400x400/000/fff" alt="Dummy" />
				</div>
				<div class="px-1">
					<img class="rounded-xl" src="https://dummyimage.com/400x400/000/fff" alt="Dummy" />
				</div>
			</div>
		</div>
	</div>
	<div class="flex py-2">
		<div class="w-3/5 py-4 px-6 bg-gray-50 border border-gray-300 rounded-lg mr-2">
			<h1 class="text-xl">Cijena:</h1>
			<h2 class="pt-4">Osnovna cijena</h2>
			<div class="py-3 w-full">
				<input bind:value={price} class="p-2 rounded w-full" placeholder="€" />
			</div>
			<h2>Kolicina</h2>
			<div class="py-3 w-full">
				<input placeholder="1" class="p-2 rounded w-full" />
			</div>
		</div>
		<div class="bg-gray-50 w-2/5 ml-2 px-6 border border-gray-300 rounded-xl">
			<h1 class="pt-4 text-xl">Kategorija</h1>
			<h2 class="pt-4">Odaberi kategoriju</h2>
			<div class="py-3">
				<input class="w-full rounded p-2" placeholder="Personalizirane knjige" />
			</div>
			<div class="flex flex-col pt-8">
				<button class="py-3 px-3 bg-primary text-white rounded">Dodaj oglas</button>
			</div>
		</div>
	</div>
</div>
