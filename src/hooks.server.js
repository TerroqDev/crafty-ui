// src/hooks.server.js
export const handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session'); // your own logic
	event.locals.user = session ? { name: 'John' } : null; // get from DB or token
	return resolve(event);
};
