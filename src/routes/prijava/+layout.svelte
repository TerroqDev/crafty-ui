<script>
	import { user } from '../store';
	import { page } from '$app/stores';
	import Form from '../../components/Form.svelte';

	// TODO: make more components and reuse logic
	// TODO: navigation inside profile section
	$: href = $page.url.pathname;
	$: console.log($user);

	async function logout() {
		await fetch('/api/clear', { credentials: 'include' });
	}
</script>

<div class="h-full">
	<div class="grid grid-cols-1 md:grid-cols-2 h-full">
		<div
			class="h-full hidden md:block bg-cover bg-[url('https://woop14abphufecql.public.blob.vercel-storage.com/crafty/annie-spratt-TywjkDHf0Ps-unsplash%281%29-CIz6Wip3ZEuigigU0xN91jDVKdrwEp.jpg')]"
		></div>
		<div class="flex h-full flex-col justify-center">
			<Form />
		</div>
	</div>
</div>
