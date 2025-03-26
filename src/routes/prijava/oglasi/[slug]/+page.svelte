<script>
	import { page } from '$app/stores';
	$: slug = $page.params.slug;
	let productData = [
		{ id: 1, name: 'Eathern Bottle', price: '75', description: 'Lorem Ipsum' },
		{ id: 2, name: 'Bozicne kuglice', price: '25', description: 'Lorem Ipsum' }
	];
	$: selectedProduct = productData.find((product) => product.id === Number(slug));
</script>

<div class=""></div>
