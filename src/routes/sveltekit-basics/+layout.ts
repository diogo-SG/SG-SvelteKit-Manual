import { getBreadcrumbsProps } from '$lib/helpers/helpers';

export const load = async ({ parent, route }) => {
	const { props } = await parent();
	const sectionName = route.id.split('/')[1];

	const order = [
		{ pos: 0, page: `loading-data` },
		{ pos: 1, page: `shared-modules` },
		{ pos: 2, page: `forms` },
		{ pos: 3, page: `api-routes` },
		{ pos: 4, page: `stores` },
		{ pos: 5, page: `errors-and-redirects` }
	];

	const { orderedRoutes, prevPage, nextPage } = getBreadcrumbsProps(
		route.id,
		props.routes,
		sectionName,
		order
	);

	return {
		props: {
			routes: orderedRoutes,
			currentRouteTitle: props.currentRouteTitle,
			prevPage,
			nextPage
		}
	};
};
