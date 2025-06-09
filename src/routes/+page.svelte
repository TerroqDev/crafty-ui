<script>
	import { inView, animate } from 'motion';
	import { onMount } from 'svelte';

	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let heading;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let searchBar;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let tagHeading;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let tagList;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let tagButton;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let subHeading;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let craftedItHeading;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let craftedItSubheading;

	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let craftedItButton;

	onMount(() => {
		inView(heading, () => {
			animate(heading, { opacity: [0, 1] }, { easing: 'ease-in' });
		});
		inView(subHeading, () => {
			animate(subHeading, { opacity: [0, 1], y: [10, 0] }, { easing: 'ease-in' });
		});
		inView(searchBar, () => {
			animate(searchBar, { opacity: [0, 1] }, { easing: 'ease-in', duration: 1 });
		});

		inView(tagHeading, () => {
			animate(tagHeading, { opacity: [0, 1] }, { easing: 'ease-in', duration: 1 });
		});

		inView(tagList, () => {
			animate(tagList, { opacity: [0, 1], y: [50, -10, 0] }, { easing: 'ease-in', duration: 0.7 });
		});
		inView(tagButton, () => {
			animate(tagButton, { opacity: [0, 1] }, { easing: 'ease-in', duration: 0.7 });
		});

		inView(craftedItSubheading, () => {
			animate(
				craftedItSubheading,
				{ opacity: [0, 1], y: [20, 0] },
				{ easing: 'ease-in', duration: 0.5 }
			);
		});
		inView(craftedItHeading, () => {
			animate(craftedItHeading, { opacity: [0, 1] }, { easing: 'ease-in', duration: 0.7 });
		});
		inView(craftedItButton, () => {
			animate(craftedItButton, { opacity: [0, 1] }, { easing: 'ease-in', duration: 0.6 });
		});
	});

	let filterIcons = [
		{
			name: 'materijal',
			imageUrl:
				'https://woop14abphufecql.public.blob.vercel-storage.com/crafty/home/kategorije/jon-moore-5fIoyoKlz7A-unsplash-PrMzWdh5DJnBGjIbcA10aTkernw1EE.webp'
		},
		{
			name: 'tematika',
			imageUrl:
				'https://woop14abphufecql.public.blob.vercel-storage.com/crafty/home/kategorije/bianca-ackermann-cdWOVKUo4KI-unsplash-XKAU1eb4JByjM3RO6i0FRlsCLU2g8j.webp'
		},
		{
			name: 'boja',
			imageUrl:
				'https://woop14abphufecql.public.blob.vercel-storage.com/crafty/home/kategorije/andrew-ridley-jR4Zf-riEjI-unsplash-YYYcawrr09wlbgNqhLHEkunxOVSIgV.webp'
		}
	];
</script>

<div
	class="flex flex-col justify-center py-28 md:py-52 bg-cover bg-no-repeat bg-[url('https://woop14abphufecql.public.blob.vercel-storage.com/crafty/annie-spratt-TywjkDHf0Ps-unsplash%281%29-CIz6Wip3ZEuigigU0xN91jDVKdrwEp.jpg')] md:bg-[url('https://woop14abphufecql.public.blob.vercel-storage.com/crafty/annie-spratt-TywjkDHf0Ps-unsplash-dcTt9Wb7hql8qmCC6DBfDpP0369x0l.jpg')]"
>
	<h1
		bind:this={heading}
		class="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-gray-100 sm:text-7xl text-center"
	>
		<!-- --> <br class="py-2" /><span class="relative whitespace-nowrap">
			<svg
				aria-hidden="true"
				viewBox="0 0 418 42"
				class="absolute left-0 top-2/3 h-[0.58em] w-full fill-primary"
				preserveAspectRatio="none"
			>
				<path
					d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
				>
				</path></svg
			><span class="relative text-7xl md:text-9xl text-gray-50 outline-black">CRAFTY</span>
		</span>
		<!-- -->
	</h1>
	<div class="flex justify-center px-4 pt-12 w-full">
		<label
			bind:this={searchBar}
			class="relative text-gray-400 w-full md:w-1/2 focus-within:text-gray-600 block"
		>
			<svg
				class="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"
				fill="currentColor"
				viewBox="0 0 32 32"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				></g><g id="SVGRepo_iconCarrier">
					<path
						d="M31.707 30.282l-9.717-9.776c1.811-2.169 2.902-4.96 2.902-8.007 0-6.904-5.596-12.5-12.5-12.5s-12.5 5.596-12.5 12.5 5.596 12.5 12.5 12.5c3.136 0 6.002-1.158 8.197-3.067l9.703 9.764c0.39 0.39 1.024 0.39 1.415 0s0.39-1.023 0-1.415zM12.393 23.016c-5.808 0-10.517-4.709-10.517-10.517s4.708-10.517 10.517-10.517c5.808 0 10.516 4.708 10.516 10.517s-4.709 10.517-10.517 10.517z"
					></path>
				</g></svg
			>
			<input
				type="text"
				name="text"
				id="text"
				placeholder="Pretraži"
				class="form-input rounded border border-gray-600 p-4 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-14 focus:outline-none"
			/>
		</label>
	</div>
	<h2
		bind:this={subHeading}
		class="text-gray-50 outline-black text-center py-4 text-xl font-extrabold uppercase tracking-widest"
	>
		Kreativnost na jednom mjestu
	</h2>
</div>
<div class="md:px-48">
	<h1 bind:this={tagHeading} class="text-2xl text-center text-gray-600 pt-8">
		Tražiš nesto u ovoj kategoriji?
	</h1>
	<div
		bind:this={tagList}
		class="flex flex-col md:flex-row gap-16 md:gap-36 justify-center pt-8 px-16 md:pt-16"
	>
		{#each filterIcons as filter}
			<div class="mx-auto">
				<div
					style={`background-image: url(${filter.imageUrl});`}
					class="border w-60 h-60 md:w-80 md:h-80 flex flex-col justify-center rounded-full brightness-90 hover:brightness-100 transition-all transform duration-300 ease-in"
				></div>
				<h1 class="text-center text-xl md:text-2xl font-medium uppercase text-gray-600 pt-4">
					{filter.name}
				</h1>
			</div>
		{/each}
	</div>
	<div class="flex justify-center py-20 w-full text-center">
		<a
			href="/kupuj"
			bind:this={tagButton}
			class="flex justify-center px-3 py-2 rounded-full border tracking-widest text-xl md:text-2xl bg-primary text-gray-50 font-bold min-w-80 hover:bg-primary/85 transition-all transform duration-300 ease-in"
			>VIŠE
			<svg class="w-12 pl-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
				><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				></g><g id="SVGRepo_iconCarrier">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z"
						fill="#ffffff"
					></path>
				</g></svg
			>
		</a>
	</div>
</div>
<div class="px-4 md:px-48 bg-gray-50">
	<div class="flex flex-col w-full">
		<div class="bg-gray-100 my-28 rounded-xl px-8 py-10">
			<h2 bind:this={craftedItSubheading} class="text-gray-600 text-center text-2xl pt-4">
				#ICraftedIt
			</h2>
			<h1
				bind:this={craftedItHeading}
				class="text-gray-700 text-3xl md:text-8xl text-center font-extrabold py-10"
			>
				Pregledajte našu <br /> kreativnu ponudu!
			</h1>
			<div class="text-center pt-8 pb-4 md:pt-20">
				<button
					bind:this={craftedItButton}
					class="px-3 py-2 rounded-full border tracking-widest text-xl md:text-2xl bg-primary text-gray-50 font-bold min-w-80 hover:bg-primary/85 transition-all transform duration-300 ease-in"
					>Shop Now</button
				>
			</div>
		</div>
	</div>
</div>
