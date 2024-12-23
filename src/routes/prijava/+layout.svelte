<script>
	/** @type {import('./$types').PageData} */
	// @ts-ignore
	import { getContext } from 'svelte';
    import { page } from '$app/stores';
	/** @type string */
	let username;
	$: username;

	/**
	 * @type string
	 */
	let picture;
	$: picture;

	const ctx = getContext('user');

	ctx.subscribe((/** @type {{ email: string; picture: string; }} */ value) => {
		(username = 'Valentin Vareskic'),
			//username = value.email;
			(picture = value.picture);
	});
    $: href = $page.url.pathname;
	async function logout() {
		await fetch('http://localhost:8000/clear', { credentials: 'include' });
	}
</script>

<div class="px-4 md:px-20 lg:px-48 xl:px-96">
	{#if !username}
		<h1 class="text-center text-3xl lg:text-5xl text-primary pt-16">Prijavite se</h1>
		<div class="flex justify-center pt-16">
			<button class="bg-yellow-500 text-gray-50 py-3 px-8"
				><a href="http://localhost:8000/auth">Google</a></button
			>
		</div>
	{:else}
		<div class="">
			<div class="flex justify-between mt-8 p-8">
				<div class="flex">
					<div class="flex flex-col justify-center">
						<svg
							class="w-20"
							viewBox="0 0 24 24"
							id="Layer_1"
							data-name="Layer 1"
							xmlns="http://www.w3.org/2000/svg"
							fill="#000000"
							><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
								id="SVGRepo_tracerCarrier"
								stroke-linecap="round"
								stroke-linejoin="round"
							></g><g id="SVGRepo_iconCarrier"
								><defs
									><style>
										.cls-1 {
											fill: none;
											stroke: #6b7280;
											stroke-miterlimit: 10;
											stroke-width: 1.91px;
										}
									</style></defs
								><circle class="cls-1" cx="12" cy="7.25" r="5.73"></circle><path
									class="cls-1"
									d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05"
								></path></g
							></svg
						>
					</div>
					<div class="flex flex-col justify-center pl-4">
						<h1 class="text-xl text-primary">Valentin Vareskic</h1>
						<h2 class="text-gray-500 text-sm">{username}</h2>
						<div>
							<button
								on:click={logout}
								class="mt-2 py-2 px-4 text-sm border bg-gray-600 text-gray-50 font-bold rounded"
								>Logout</button
							>
						</div>
					</div>
				</div>
				<div class="flex gap-4">
					<div class="flex flex-col gap-2">
						<h2 class="font-medium text-sm text-gray-700">Oglasi</h2>
						<p class="text-2xl text-center font-bold text-gray-600">3</p>
					</div>
					<div class="flex flex-col gap-2">
						<h2 class="font-medium text-sm text-gray-700">Recenzije</h2>
						<p class="text-2xl text-center font-bold text-gray-600">5</p>
					</div>
				</div>
			</div>
			<div class="flex pt-8">
				<ul class="flex gap-4 w-full text-gray-600 text-md font-medium border-b pb-1">
					<li><a class={`border-gray-700 pb-1 px-2 ${href==="/prijava" ? "text-yellow-500" : ""} `} href="/prijava">Moj profil</a></li>
					<li><a class={`border-gray-700 pb-1  ${href.includes("/postavke") ? "text-yellow-500" : ""} `} href="/prijava/postavke">Postavke</a></li>
					<li><a class={`border-gray-700 pb-1  ${href.includes("/oglasi") ? "text-yellow-500" : ""} `} href="/prijava/oglasi">Moji oglasi</a></li>
					<li><a class={`border-gray-700 pb-1  ${href.includes("/unesioglas") ? "text-yellow-500" : ""} `} href="/prijava/unesioglas">Unesi oglas</a></li>
					<li><a class={`border-gray-700 pb-1  ${href.includes("/statistika") ? "text-yellow-500" : ""} `} href="/prijava/statistika">Statistika</a></li>
					<li><a class={`border-gray-700 pb-1 px-2 ${href.includes("/recenzije") ? "text-yellow-500" : ""} `} href="/prijava/recenzije">Recenzije</a></li>
				</ul>
			</div>
			<div class="flex w-full min-h-[50vh] mt-1 ml-1 flex-col justify-between">
				<slot />
			</div>
		</div>
	{/if}
</div>
