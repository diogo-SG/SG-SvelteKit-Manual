import axios from 'axios';

export async function load() {
	const jokes = await axios.get('https://api.sampleapis.com/jokes/goodJokes');
	return {
		props: {
			jokes: jokes.data.slice(0, 5)
		}
	};
}
