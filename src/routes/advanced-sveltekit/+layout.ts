import { getBreadcrumbsProps } from '$lib/helpers/helpers';

export const load = async ({ parent, route }) => {
	const { props } = await parent();
	const sectionName = route.id.split('/')[1];

	const order = [
		{ pos: 0, page: `hooks` },
		{ pos: 1, page: `page-options` },
		{ pos: 2, page: `link-options` },
		{ pos: 3, page: `advanced-routing` },
		{ pos: 4, page: `advanced-loading` },
		{ pos: 5, page: `environment-variables` }
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
