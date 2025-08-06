<script>
	import { animate, stagger } from 'motion';
	import { onMount } from 'svelte';


	onMount(() => {
	    const dots = document.querySelectorAll('.dot');
		animate(
			dots,
			{ scale: [1, 1.5, 1] },
			{
				duration: 1.2,
				repeat: Infinity,
				ease: 'easeInOut'
			}
		);
	});
</script>

<div class="container">
	<div class="dot"></div>
	<div class="dot"></div>
	<div class="dot"></div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}

	.dot {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: #dbc53e;
		will-change: transform;
	}
</style>
