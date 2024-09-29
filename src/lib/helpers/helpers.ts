/* -------------------------------------------------------------------------- */
/*                                 Breadcrumbs                                */
/* -------------------------------------------------------------------------- */

import type {
	BreadcrumbRouteItemShape,
	BreadcrumbSectionOrderItemShape
} from '$lib/types/types';

export function getBreadcrumbsProps(
	currentRoute: string,
	routes: BreadcrumbRouteItemShape[],
	sectionName: string,
	orderArr: BreadcrumbSectionOrderItemShape[]
) {
	// filter all routes that are in the same section
	const filteredRoutes = routes.filter((r) => r.link.includes(`/${sectionName}/`));

	// reorder routes according to the order array
	const orderedRoutes = orderArr
		.map((o) => {
			const route = filteredRoutes.find((r) => {
				const lastSlash = r.link.lastIndexOf('/');
				const page = r.link.substring(lastSlash + 1);
				return page === o.page;
			});
			return route;
		})
		.filter((r) => !!r);

	const currentRoutePos = orderedRoutes.findIndex((r) => r?.link === currentRoute);

	const prevLink = currentRoutePos > 0 ? orderedRoutes?.[currentRoutePos - 1].link : null;
	const nextLink =
		currentRoutePos < orderedRoutes.length - 1
			? orderedRoutes?.[currentRoutePos + 1].link
			: null;

	const prevTitle =
		currentRoutePos > 0 ? orderedRoutes?.[currentRoutePos - 1].title : null;
	const nextTitle =
		currentRoutePos < orderedRoutes.length - 1
			? orderedRoutes?.[currentRoutePos + 1].title
			: null;

	const prevPage = prevLink ? { link: prevLink, title: prevTitle } : null;
	const nextPage = nextLink ? { link: nextLink, title: nextTitle } : null;

	return {
		prevPage,
		nextPage,
		orderedRoutes
	};
}
