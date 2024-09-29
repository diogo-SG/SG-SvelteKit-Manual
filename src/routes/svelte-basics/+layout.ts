import { getBreadcrumbsProps } from '$lib/helpers/helpers';

export const load = async ({ parent, route }) => {
	const { props } = await parent();
	const sectionName = route.id.split('/')[1];

	const order = [
		{ pos: 0, page: `component-anatomy` },
		{ pos: 1, page: `reactivity` },
		{ pos: 2, page: `props` },
		{ pos: 3, page: `logic` },
		{ pos: 4, page: `events` },
		{ pos: 5, page: `bindings` },
		{ pos: 6, page: `lifecycle` },
		{ pos: 7, page: `stores` }
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
