export async function load({ parent }: { parent: () => Promise<{ setup: string }> }) {
	const { setup } = await parent();

	return {
		joke: {
			setup: setup,
			punchline: 'Because 7 8 9!'
		}
	};
}
