<script>
    /** @type {import('./$types').PageData} */
	// @ts-ignore
    import { getContext } from 'svelte';
    
    /** @type string */
    let username;

    const ctx = getContext("user")

    ctx.subscribe((/** @type {string} */ value) => {
        username = value
    }) 

    async function login(){
        const response = await fetch("http://localhost:8000/test", {credentials: "include"});
        return response 
    }
</script>
<div class="px-4 md:px-20 lg:px-48">
    {#if !username}
        <h1 class="text-center text-3xl lg:text-5xl text-primary pt-16">Prijavite se</h1> 
    {:else}
        <h1 class="text-center text-2xl lg:text-5xl text-primary pt-16">Dobrodosli {username}</h1> 
    {/if}
    <div class="flex justify-center pt-16">
        <button class="bg-yellow-500 text-gray-50 py-4 px-8"><a href="http://localhost:8000/auth">Google</a></button>
    </div>
    <div class="flex justify-center pt-16">
        <button on:click={login} class="bg-yellow-500 text-gray-50 py-4 px-8">Test</button>
    </div>
</div>
