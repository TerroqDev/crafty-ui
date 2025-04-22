<script>
	import '../app.css';
	import Navigation from '../components/Navigation.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="min-h-screen">
	<Navigation />
	<slot />
	<Footer />
</div>
