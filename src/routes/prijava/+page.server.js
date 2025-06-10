/** @satisfies {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const email = formData.get('email');
		const password = formData.get('password');
		const request = await fetch('http:localhost:8000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		});
		if (request.status == 404) {
			return {
				status: 404,
				errors: {
					message: `There is no user with email ${email}`
				}
			};
		}
		if (!request.ok) {
			return {
				status: request.status,
				errors: {
					message: 'Login failed due to server error'
				}
			};
		}
		const data = await request.json();
		return {
			user: data.user,
			email: data.email
		};
	}
};
