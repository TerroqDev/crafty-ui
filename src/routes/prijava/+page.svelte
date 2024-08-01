<script>
	import { goto, invalidateAll } from '$app/navigation';
    /** @type {import('./$types').PageData} */
	// @ts-ignore
    import { getContext } from 'svelte';
    
    /** @type string */
    let username;
    $: username;

    const ctx = getContext("user")

    ctx.subscribe((/** @type {string} */ value) => {
        username = value
    }) 

</script>
<div class="flex pt-8">
    <div class="flex flex-col w-full">
        <h1 class="text-2xl text-gray-700">Profile</h1>
        <hr class="w-full h-[0.5px] mx-auto mt-1 bg-gray-200" />
    </div>
</div>
