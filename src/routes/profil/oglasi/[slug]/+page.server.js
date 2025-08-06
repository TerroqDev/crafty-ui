/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const res = await fetch(`http://localhost:4000/products/${params.slug}`);
	const product = await res.json();
	const sellerRes = await fetch(`http://localhost:4000/users/id/${product.seller_id}`);
	const seller = await sellerRes.json();
	return { product, seller };
}
