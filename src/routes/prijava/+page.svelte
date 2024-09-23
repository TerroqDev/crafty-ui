<script>
    /** @type {import('./$types').PageData} */
	// @ts-ignore
    import { getContext, onMount } from 'svelte';
    
    /** @type boolean */
    let editMode = true;
    
    const ctx = getContext("user")

    let updateFirstName = $ctx.firstName;
    let updateLastName = $ctx.lastName;
    let updateNickname = $ctx.nickname;
    let updateInstagram = $ctx.instagram;
    let updateWhatsApp = $ctx.whatsapp;

    async function updateUserData() {
        console.log(updateFirstName);
        if(updateFirstName === $ctx.firstName && updateLastName === ctx.lastName) {
            return
        }
        const request = await fetch(`http://localhost:8000/user/${$ctx.email}`, 
          {
          method: "PUT", 
          headers:{
            "Content-Type": "application/json"
          },
                body: JSON.stringify({firstName: updateFirstName, lastName: updateLastName, nickname: updateNickname, instagram: updateInstagram, whatsapp: updateWhatsApp})
          });
        const response = await request.json();
        $ctx.firstName = response.firstName;
        $ctx.lastName = response.lastName;
        $ctx.nickname = response.nickname;
        $ctx.instagram = response.instagram;
        $ctx.whatsapp = response.whatsapp;
        editMode = !editMode;
    }

    onMount(async () => {
    })

</script>
<div class="flex pt-8">
    <div class="flex flex-col w-full">
        <div class="flex justify-between">
            <h1 class="text-2xl text-gray-700">Profil</h1>
            <div class="flex">
                <div class="pr-4 mb-2">
                    <button class="rounded bg-primary px-3 py-2 text-gray-100" disabled={!editMode} on:click={()=>editMode = !editMode}>Edit</button>
                </div>
                <div>
                    <button class={`rounded px-3 py-2 text-gray-100 ${editMode ? "bg-gray-500" : "bg-secondary"}`} disabled={editMode} on:click={updateUserData}>Save</button>
                </div>
            </div>
        </div>
        <hr class="w-full h-[0.5px] mx-auto mt-1 bg-gray-200" />
        <div class="pt-2 flex">
            <h2 class="pr-4">Ime:</h2>
            <input bind:value={updateFirstName} class={`px-2 border ${editMode ? "placeholder-gray-800 border-transparent" : "placeholder-gray-500 border-primary"}`} type="text" placeholder={$ctx.firstName} disabled={editMode} />
        </div>
        <div class="pt-2 flex">
            <h2 class="pr-4">Prezime:</h2>
            <input bind:value={updateLastName} class={`px-2 border ${editMode ? "placeholder-gray-800 border-transparent" : "placeholder-gray-500 border-primary"}`} type="text" placeholder={$ctx.lastName} disabled={editMode} />
        </div>
        <div class="pt-2 flex">
            <h2 class="pr-4">Nadimak:</h2>
            <input bind:value={updateNickname} class={`px-2 border ${editMode ? "placeholder-gray-800 border-transparent" : "placeholder-gray-500 border-primary"}`} type="text" placeholder={$ctx.nickname} disabled={editMode} />
        </div>
        <div class="pt-2 flex">
            <h2 class="pr-4">Instagram:</h2>
            <input bind:value={updateInstagram} class={`px-2 border ${editMode ? "placeholder-blue-500 border-transparent underline" : "placeholder-gray-500 border-primary"}`} type="text" placeholder={$ctx.instagram} disabled={editMode} />
        </div>
        <div class="pt-2 flex">
            <h2 class="pr-4">WhatsApp:</h2>
            <input bind:value={updateWhatsApp} class={`px-2 border ${editMode ? "placeholder-blue-500 border-transparent underline" : "placeholder-gray-500 border-primary"}`} type="number" placeholder={$ctx.whatsapp} disabled={editMode} />
        </div>
    </div>
</div>
