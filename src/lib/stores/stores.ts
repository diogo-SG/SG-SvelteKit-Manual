import { writable, readable } from 'svelte/store';

// Readable store example

function readableCallback(set: (value: string) => void, timeZone: string) {
	// this function will be called when the store is created
	const interval = setInterval(() => {
		set(new Date().toLocaleTimeString('en-US', { timeZone }));
	}, 1000);

	// this function will be called when the store is destroyed
	return function stop() {
		clearInterval(interval);
	};
}

export const timeInPortugal = readable(
	new Date().toLocaleTimeString('en-US', { timeZone: 'Europe/Lisbon' }),
	(set) => readableCallback(set, 'Europe/Lisbon')
);

export const timeInIndia = readable(
	new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' }),
	(set) => readableCallback(set, 'Asia/Kolkata')
);

export const timeInUK = readable(
	new Date().toLocaleTimeString('en-US', { timeZone: 'Europe/London' }),
	(set) => readableCallback(set, 'Europe/London')
);

// Custom store example
function decideBestOffice() {
	const { subscribe, set } = writable('All of them are great!');

	return {
		subscribe,
		reset: () => set('All of them are great!'),
		portugal: () => set('Lisbon'),
		india: () => set('Gurgaon'),
		uk: () => set('London')
	};
}

export const bestOffice = decideBestOffice();
