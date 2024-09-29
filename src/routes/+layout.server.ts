const modules = import.meta.glob('./**/*.svelte');
const body: { title: string; link: string }[] = [];
for (const path in modules) {
	const pathSanitized = path.replace('.svelte', '').replace('./', '/');

	const lastSlash = pathSanitized.lastIndexOf('/');
	const link = pathSanitized.substring(0, lastSlash);

	let title = link.substring(link.lastIndexOf('/') + 1);
	title = title.replace(/-/g, ' ');
	if (title[0]) title = title[0].toUpperCase() + title.slice(1);

	if (link !== '/+layout') {
		body.push({
			title,
			link
		});
	}
}

export const load = async ({ route }) => {
	const routes = await Promise.all(body);

	const currentRoute = route?.id;
	const lastSlash = currentRoute && currentRoute.lastIndexOf('/');
	let currentRouteTitle = lastSlash ? route?.id?.substring(lastSlash + 1) : '';

	currentRouteTitle = currentRouteTitle
		? currentRouteTitle[0].toUpperCase() + currentRouteTitle.replace(/-/g, ' ').slice(1)
		: '';

	return {
		props: {
			routes,
			currentRoute,
			currentRouteTitle
		}
	};
};
