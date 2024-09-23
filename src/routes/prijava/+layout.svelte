<script>
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

	async function logout() {
		await fetch('http://localhost:8000/clear', { credentials: 'include' });
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
			<div class="flex mt-8 p-8 border shadow rounded border-gray-100">
				<div class="flex flex-col justify-center">
					<img class="rounded-full w-20" src={picture} alt="profile" />
				</div>
				<div class="flex flex-col justify-center pl-4">
					<h1 class="text-xl text-primary">Valentin Vareskic</h1>
					<h2 class="text-gray-500 text-sm">{username}</h2>
                    <div>
                        <button on:click={logout} class="mt-2 py-2 px-3 border border-secondary text-secondary font-medium rounded">Logout</button>
                    </div>
				</div>
			</div>
			<div class="flex">
				<ul
					class="flex flex-col p-8 mt-1 justify-center text-primary text-lg shadow rounded border border-gray-100"
				>
					<li><a class="py-1" href="/prijava">Moj profil</a></li>
					<li><a class="py-1" href="/prijava/postavke">Postavke</a></li>
					<li><a class="py-1" href="/prijava/oglasi">Moji oglasi</a></li>
					<li><a class="py-1 text-nowrap" href="/prijava/unesioglas">Unesi oglas</a></li>
					<li><a class="py-1 text-nowrap" href="/prijava/statistika">Statistika</a></li>
					<li><a class="py-1" href="/prijava/recenzije">Recenzije</a></li>
				</ul>
				<div class="flex w-full mt-1 ml-1 flex-col justify-between p-8 shadow rounded border border-gray-100">
					<slot />
				</div>
			</div>
		</div>
	{/if}
</div>
