export const CODE = {
	getExample1: `export function GET() {
    const message = 'Hello from the example API route!';
    return new Response(message, {
        headers: {
            'content-type': 'application/json'
        }
    });
}`,
	getExample2: `export function GET() {
    const message = 'Hello from the example API route!';
    return json( message );
}`,
	getExampleFetch: `<script>
	
	function fetchResponse() {
		return fetch('./api-routes/example').then((res) => res.json());
	}
</script>

{#await fetchResponse()}
				<p>Loading...</p>
			{:then response}
				<pre>{response}</pre>
			{/await}

`,
	postExample: `
export async function POST({ request }) {
	const { number } = await request.json();

	return json({ number: number * 2 }, { status: 200 });
}
`
};
