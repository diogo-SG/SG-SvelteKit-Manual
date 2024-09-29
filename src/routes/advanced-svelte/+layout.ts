import { getBreadcrumbsProps } from '$lib/helpers/helpers';

export const load = async ({ parent, route }) => {
	const { props } = await parent();
	const sectionName = route.id.split('/')[1];

	const order = [
		{ pos: 0, page: `motion` },
		{ pos: 1, page: `transitions` },
		{ pos: 2, page: `actions` },
		{ pos: 3, page: `advanced-bindings` },
		{ pos: 4, page: `classes-and-styles` },
		{ pos: 5, page: `component-composition` },
		{ pos: 6, page: `context-api` },
		{ pos: 7, page: `special-elements` },
		{ pos: 8, page: `module-context` }
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
