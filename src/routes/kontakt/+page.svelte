<script>
	import PaperPlane from '$lib/assets/paperplane.png';
	import Plane from '$lib/assets/plane.png';
	import { animate, inView } from 'motion';
	import { onMount } from 'svelte';

	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let contactEl;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let mailEl;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let socialEl;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let airplaneEl;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let smallAirplaneEl;
	/**
	 * @type {import("motion").ElementOrSelector}
	 */
	let qaEl;

	onMount(() => {
		inView(contactEl, () => {
			animate(contactEl, { y: [-100, 0], opacity: [0, 100] }, { duration: 0.7 });
		});

		inView(mailEl, () => {
			animate(mailEl, { opacity: [0, 100] }, { duration: 1, delay: 0.4 });
		});
		inView(socialEl, () => {
			animate(socialEl, { opacity: [0, 100] }, { duration: 1, delay: 0.3 });
		});

		inView(airplaneEl, () => {
			animate(airplaneEl, { x: [-100, 0], opacity: [0, 100] }, { duration: 0.7 });
		});
		inView(smallAirplaneEl, () => {
			animate(smallAirplaneEl, { x: [-100, 0], opacity: [0, 100] }, { duration: 0.7 });
		});

		inView(qaEl, () => {
			animate(qaEl, { y: [100, 0], opacity: [0, 100] }, { duration: 0.7 });
		});
	});
</script>

<div class="px-4 md:px-52 min-h-[calc(100vh-100px)]">
	<h1 bind:this={contactEl} class="text-gray-600 font-extrabold text-4xl md:text-9xl pt-8 md:pt-24">
		Contact
	</h1>
	<div class="flex gap-8 pt-8 md:pt-24 md:pb-28">
		<div class="w-full">
			<div bind:this={mailEl}>
				<h2 class="text-xl text-gray-600 uppercase font-bold">Posaljite mail</h2>
				<p class="text-gray-500 pt-2 text-2xl underline">crafty.support@gmail.com</p>
			</div>
			<div bind:this={socialEl}>
				<h2 class="text-xl text-gray-600 uppercase font-bold pt-8">Drustvene mreze</h2>
				<div class="flex gap-2">
					<div class="max-w-16">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							width="100%"
							height="100%"
							viewBox="0 0 30 30"
						>
							<path
								fill="#4b5563"
								d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"
							></path>
						</svg>
					</div>
					<div class="max-w-16">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							width="100%"
							height="100%"
							viewBox="0 0 30 30"
						>
							<path
								fill="#4b5563"
								d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"
							></path>
						</svg>
					</div>
				</div>
			</div>
		</div>

		<div bind:this={airplaneEl} class="hidden md:block">
			<img src={PaperPlane} alt="Paper plane" />
		</div>
	</div>

	<div bind:this={smallAirplaneEl} class="md:hidden flex justify-center pt-8">
		<img src={Plane} alt="Plane" />
	</div>
	<div bind:this={qaEl} class="h-full w-full py-8">
		<h1 class="pt-8 font-bold text-2xl text-gray-600 text-center">
			Ako imate pitanja pogledajte nas <a class="underline" href="/qa">F.A.Q.</a> ili nas kontaktirajte.
		</h1>
	</div>
</div>
