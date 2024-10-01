export const CODE_EXAMPLES = {
	universalLoad1: `
        import PropsExample from '$lib/components/examples/props-example-component/props-example.svelte';

        export function load() {
            return {
                component: PropsExample
            };
        }
    `,
	universalLoad2: `
        {#if $page.data.component}
            <p>Here's the component we fetched from the server:</p>
            <svelte:component this={$page.data.component} />
        {/if}
    `,
	parentLoad1: `
        export function load() {
            return {
                setup: 'Why is 6 afraid of 7?'
            };
        }
    `,
	parentLoad2: `
        export async function load({ parent }: { parent: () => Promise<{ setup: string }> }) {
            const { setup } = await parent();

            return {
                joke: {
                    setup: setup,
                    punchline: 'Because 7 8 9!'
                }
            };
        }
    `,
	invalidate: `
        <script>
            import { onMount } from 'svelte';
            import { invalidate } from '$app/navigation';

            export let data;

            onMount(() => {
                const interval = setInterval(() => {
                    invalidate('/api/now');
                }, 5000);

                return () => {
                    clearInterval(interval);
                };
            });
        </script>
    `,
	BREADCRUMBS_LAYOUT_ROOT: `
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
    `,
	BREADCRUMBS_LAYOUT_SECTION: `
        import { getBreadcrumbsProps } from '$lib/helpers/helpers';

        export const load = async ({ parent, route }) => {
            const { props } = await parent();
            const sectionName = route.id.split('/')[1];

            const order = [
                { pos: 0, page: 'hooks' },
                { pos: 1, page: 'page-options' },
                { pos: 2, page: 'link-options' },
                { pos: 3, page: 'advanced-routing' },
                { pos: 4, page: 'advanced-loading' },
                { pos: 5, page: 'environment-variables' }
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
    `,
	BREADCRUMBS_GET_BREADCRUMBS_PROPS: `
        export function getBreadcrumbsProps(
            currentRoute: string,
            routes: BreadcrumbRouteItemShape[],
            sectionName: string,
            orderArr: BreadcrumbSectionOrderItemShape[]
        ) {
            // filter all routes that are in the same section
            const filteredRoutes = routes.filter((r) => r.link.includes(\`/\${sectionName}/\`));

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
    `,

	BREADCRUMBS_LAYOUT_SVELTE: `<script>
	import Breadcrumbs from '$lib/components/ui/breadcrumbs/breadcrumbs.svelte';

	export let data;
	const {
		props: { currentRouteTitle, prevPage, nextPage }
	} = data;
</script>

<Breadcrumbs
	{currentRouteTitle}
	{prevPage}
	{nextPage} />
<slot></slot>
`
};
