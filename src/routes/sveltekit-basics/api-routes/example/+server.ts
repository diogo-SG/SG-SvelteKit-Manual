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

export async function POST({ request }) {
	const { number } = await request.json();

	return json({ number: number * 2 }, { status: 200 });
}
