export const CODE_EXAMPLES = {
	preloading: `
        <a href="/slow-route1" data-sveltekit-preload-data>Slow route with preloading</a>
        <a href="/slow-route2">Slow route without preloading</a>
    `,
	preloading2: `
        import { preloadCode, preloadData } from '$app/navigation';

        // preload the code and data needed to navigate to /foo
        preloadData('/foo');

        // preload the code needed to navigate to /bar, but not the data
        preloadCode('/bar');
    `,
	reloading: `
    <nav data-sveltekit-reload>
	<a href="/">home</a>
	<a href="/about">about</a>
    </nav>
    `
};
