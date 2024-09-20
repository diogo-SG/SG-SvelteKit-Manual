import { error } from '@sveltejs/kit';
export function load() {
	throw error(400, 'This is an expected error');
}
