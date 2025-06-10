<script>
	import '../app.css';
	import Navigation from '../components/Navigation.svelte';
	import Footer from '../components/Footer.svelte';

	// HACK: might break the layout because of the screen here
</script>

<div class="h-screen flex flex-col">
	<Navigation />
	<div class="h-full">
		<slot />
		<Footer />
	</div>
</div>
