export async function load() {
	const res = await fetch('http://localhost:4000/products/');
	const products = await res.json();

	return { products };
}
