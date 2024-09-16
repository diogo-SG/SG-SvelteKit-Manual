import { json } from '@sveltejs/kit';
export function GET() {
	const message = 'Hello from the example API route!';

	// This is equivalent to the commented out code below
	return json(message);

	// return new Response(message, {
	// 	headers: {
	// 		'content-type': 'application/json'
	// 	}
	// });
}
