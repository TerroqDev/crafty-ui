<script>
	import '../app.css';
	import Navigation from '../components/Navigation.svelte';
	import Footer from '../components/Footer.svelte';

	// HACK: might break the layout because of the screen here
</script>
<div class="min-h-screen flex flex-col">
	<Navigation />
	<main class="flex-1">
		<slot />
	</main>
	<Footer />
</div>
