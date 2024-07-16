<script>
    import { inView, animate, spring } from "motion";
    import { onMount } from "svelte";
    let heading, callToAction, materijal, tematika, ostalo;
    onMount(() => {
        inView(heading, () => {
            animate(heading, {opacity: [0, 1]}, {easing: "ease-in"})
        })

        inView(callToAction, () => {
            animate(callToAction, {opacity: [0, 1], y:[100,0]}, {easing: "ease-in", duration: 1})
        })
        
        inView(materijal, () => {
            animate(materijal, {opacity: [0, 1], x:[-100,0], rotateZ:[-45, -10]}, {easing: "ease-in", duration: 0.7})
        })

        inView(tematika, () => {
            animate(tematika, {opacity: [0, 1], y:[-200,0], rotateZ:[10, -5]}, {easing: spring(), duration: 0.7})
        })
        inView(ostalo, () => {
            animate(ostalo, {opacity: [0, 1], x:[100,0], rotateZ:[45, 15]}, {easing: spring(), duration: 0.7, delay: 0.2})
        })
    })
</script>
<div class="flex flex-col justify-center py-28">
    <h1 bind:this={heading} class="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-gray-600 sm:text-7xl text-center">
        Dobrodosli na<!-- --> <br class="py-2" /><span class="relative whitespace-nowrap text-primary">
            <svg aria-hidden="true" viewBox="0 0 418 42" class="absolute left-0 top-2/3 h-[0.58em] w-full fill-yellow-500" preserveAspectRatio="none">
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z">
                </path></svg><span class="relative">CRAFTY</span>
        </span> <!-- -->
    </h1>
    <hr class="w-16 h-2 mx-auto mt-16 bg-primary" />
    <h2 bind:this={callToAction} class="mx-auto pt-16 max-w-2xl text-3xl md:text-5xl text-gray-600 font-light">Sto te zanima</h2>
    <div class="flex flex-col lg:flex-row justify-center pt-16 px-4">
        <div bind:this={materijal} class="px-4 lg:mx-10 lg:w-72">
            <div class="flex justify-center bg-[url('/material.jpg')] bg-cover border border-gray-100 p-16 py-28 shadow-md rounded-md">
                <h1 class="text-center font-bold text-3xl text-gray-50">MATERIJAL</h1>
            </div>
        </div>
        <div bind:this={tematika} class="p-4 lg:mx-10 lg:w-72">
            <div class="flex bg-[url('tematika.jpg')] justify-center bg-cover border border-gray-100 p-16 py-28 shadow-md rounded-md">
                <h1 class="text-center font-bold text-3xl text-gray-50">TEMATIKA</h1>
            </div>
        </div>
        <div bind:this={ostalo} class="p-4 lg:mx-10 lg:w-72">
            <div class="flex bg-[url('/ostalo.jpg')] justify-center border border-gray-100 p-16 py-28 shadow-md rounded-md">
                <h1 class="text-center font-bold text-3xl text-gray-50">OSTALO</h1>
            </div>
        </div>
    </div>
    <hr class="w-16 h-2 mx-auto mt-16 bg-yellow-500" />
    <div>
        <h2 class="text-center text-3xl lg:text-4xl px-4 py-16 text-gray-600">Ne znas sto te zanima? Nas <span class="text-primary font-bold">CRAFTKO </span>ce ti pomoci!</h2>
        <div class="flex justify-center">
            <button class="border rounded-md px-10 py-8 text-2xl lg:text-3xl bg-yellow-500 text-gray-50">Razgovaraj sa Craftkom</button>
        </div>
    </div>
    <hr class="w-16 h-2 mx-auto mt-16 bg-primary" />
    <div>
        <h2 class="text-center text-3xl lg:text-4xl px-4 py-16 text-gray-600">Zelis prodavati na CRAFTY-u?</h2>
        <div class="flex justify-center">
            <button class="border rounded-md px-10 py-8 text-2xl lg:text-3xl bg-primary text-gray-50">Izradi profil prodavatelja</button>
        </div>
    </div>
</div>
