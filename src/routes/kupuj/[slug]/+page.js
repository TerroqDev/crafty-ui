const productData = [
	{
		id: 1,
		name: 'Eather Bottle',
		price: 48,
		imgUrls: [
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-05.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-06.jpg'
		],
		description: 'A stylish and durable bottle for everyday hydration.'
	},

	{
		id: 2,
		name: 'Nomad Tumbler',
		price: 35,
		imgUrls: [
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-05.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-06.jpg'
		],
		description: 'An insulated tumbler perfect for hot and cold beverages on the go.'
	},
	{
		id: 3,
		name: 'Focus Paper Refill',
		price: 89,
		imgUrls: [
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-05.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-06.jpg'
		],
		description: 'High-quality paper refills for your Focus notebook system.'
	},
	{
		id: 4,
		name: 'Machined Mechanical Pencil',
		price: 35,
		imgUrls: [
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-05.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-06.jpg'
		],
		description: 'A precision-crafted mechanical pencil made for long-lasting use.'
	},
	{
		id: 5,
		name: 'Notes',
		price: 12,
		imgUrls: [
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-05.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-06.jpg'
		],
		description: 'Compact and convenient notebooks for jotting down ideas on the go.'
	},
	{
		id: 6,
		name: 'Stack of Boxes',
		price: 35,
		imgUrls: [
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-05.jpg',
			'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-06.jpg'
		],
		description: 'A minimalist stack of boxes designed for efficient storage and organization.'
	}
];
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	console.log('hello');
	return productData.find((product) => product.id.toString() === params.slug);
}
