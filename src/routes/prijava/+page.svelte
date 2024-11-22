<script>
	/** @type {import('./$types').PageData} */
	// @ts-ignore
	import { getContext, onMount } from 'svelte';

	/** @type boolean */
	$: editMode = true;
	const ctx = getContext('user');

	let updateFirstName = $ctx.firstName;
	let updateLastName = $ctx.lastName;
	let updateNickname = $ctx.nickname;
	let updateInstagram = $ctx.instagram;
	let updateWhatsApp = $ctx.whatsapp;

	/**
	 * @param {{ key: any; }} e
	 */
	function exitEditMode(e) {
		switch (e.key) {
			case 'Escape':
				editMode = true;
				break;
		}
	}

	async function updateUserData() {
		if (updateFirstName === $ctx.firstName && updateLastName === ctx.lastName) {
			return;
		}
		const request = await fetch(`http://localhost:8000/user/${$ctx.email}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				firstName: updateFirstName,
				lastName: updateLastName,
				nickname: updateNickname,
				instagram: updateInstagram,
				whatsapp: updateWhatsApp
			})
		});
		const response = await request.json();
		$ctx.firstName = response.firstName;
		$ctx.lastName = response.lastName;
		$ctx.nickname = response.nickname;
		$ctx.instagram = response.instagram;
		$ctx.whatsapp = response.whatsapp;
		editMode = !editMode;
	}

	onMount(async () => {});
</script>

<div class="flex pt-8 h-full">
	<div class="flex flex-col w-full"></div>
</div>
<svelte:window on:keydown|preventDefault={exitEditMode} />
