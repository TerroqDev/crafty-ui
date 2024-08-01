<script>
	import { goto, invalidateAll } from '$app/navigation';
	/** @type {import('./$types').PageData} */
	// @ts-ignore
	import { getContext } from 'svelte';

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
		username = value.email;
		picture = value.picture;
	});

	async function test() {
		const response = await fetch('http://localhost:8000/test', { credentials: 'include' });
		console.log(response);
		console.log(picture);
	}

	async function logout() {
		await fetch('http://localhost:8000/clear', { credentials: 'include' });
		username = '';
	}
</script>

<div class="px-4 md:px-20 lg:px-48 xl:px-96">
	{#if !username}
		<h1 class="text-center text-3xl lg:text-5xl text-primary pt-16">Prijavite se</h1>
		<div class="flex justify-center pt-16">
			<button class="bg-yellow-500 text-gray-50 py-4 px-8"
				><a href="http://localhost:8000/auth">Google</a></button
			>
		</div>
	{:else}
		<div class="">
			<div class="flex pt-8">
				<div>
					<img class="rounded-full w-12" src={picture} alt="profile" />
				</div>
				<div class="flex flex-col justify-center pl-4">
					<h1 class="text-xl text-primary">Valentin Vareskic</h1>
					<h2 class="text-gray-500 text-sm">{username}</h2>
				</div>
			</div>
			<div class="flex">
				<ul
					class="flex flex-col max-w-48 w-full justify-center text-primary text-lg rounded pt-8 px-1"
				>
					<li><a class="py-1" href="/prijava">Moj profil</a></li>
					<li><a class="py-1" href="/prijava/postavke">Postavke</a></li>
					<li><a class="py-1" href="/prijava/oglasi">Moji oglasi</a></li>
					<li><a class="py-1" href="/prijava/unesioglas">Unesi oglas</a></li>
					<li><a class="py-1" href="/prijava/statistika">Statistika</a></li>
					<li><a class="py-1" href="/prijava/recenzije">Recenzije</a></li>
				</ul>
				<div class="flex flex-col justify-between px-8 w-full">
					<slot />
					<div>
						<button
							class="bg-red-500 text-gray-50 py-2 px-4 rounded font-bold text-lg"
							on:click={logout}>Logout</button
						>
					</div>
					<div>
						<button
							class="bg-slate-500 text-gray-50 py-2 px-4 rounded font-bold text-lg"
							on:click={test}>Test</button
						>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
