<script>
	import { page } from '$app/stores';
	import { user } from '../store';
	$: href = $page.url.pathname;

    const menuItemList = [{name: "Moji oglasi", link: "oglasi"}, { name: "Opcije", link: "postavke" }]
</script>
		<div class="flex flex-col px-2 md:px-48 pt-8 h-full">
			<div class="flex border p-4 rounded-lg shadow justify-between">
				<div>
					<h1 class="text-lg md:text-xl text-gray-700 font-medium">{$user.user}</h1>
					<h2 class="text-md md:text-lg text-yellow-500">{$user.email}</h2>
				</div>
				<div class="w-14 rounded-full bg-gray-200 p-2 h-full border">
					<svg
						viewBox="0 0 24 24"
						id="Layer_1"
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						fill="#757575"
						><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
							id="SVGRepo_tracerCarrier"
							stroke-linecap="round"
							stroke-linejoin="round"
						></g><g id="SVGRepo_iconCarrier"
							><defs
								><style>
									.cls-1 {
										fill: none;
										stroke: #757575;
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
			</div>
			<div class="pt-8 justify-center flex flex-col align-middle items-center">
				<ul class="flex rounded-lg shadow w-fit">
                    {#each menuItemList as item, index}
                        <li class="">
                            <a class={`transition-all duration-300 ease-in ${href.includes(item.link) ? "bg-gray-100 text-gray-500" : "text-gray-600"} ${index % 2 == 0 ? "rounded-l-lg" : "rounded-r-lg"} border h-full  px-4 py-1 font-medium hover:text-yellow-500`} href="/profil/{item.link}">{item.name}</a>
                        </li>
                    {/each}
				</ul>
			</div>
            <slot />
		</div>
