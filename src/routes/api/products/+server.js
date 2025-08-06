import { json } from '@sveltejs/kit';

export async function GET(event) {
	try {
		const res = await fetch('http://localhost:4000/products/');
		const products = await res.json();
		return json(products);
	} catch (err) {
		console.log(err);
	}
}
