export const CODE_EXAMPLES = {
	optionalRouteParams: `
const greetings = {
    en: 'hello!',
    pt: 'olá!',
    hi: 'नमस्ते!'
};

export function load({ params }) {
    const lang: keyof typeof greetings = (params.lang ?? 'en') as keyof typeof greetings;
    return {
        greeting: greetings[lang]
    };
}
`,

	paramMatchers: `
export function match(value) {
    return /^[0-9a-f]{6}$/.test(value);
}
`,

	routeGroupsLayout: `

export function load({ cookies, url }) {
    if (!cookies.get('login')) {
        throw redirect(
            303,
            \`/advanced-sveltekit/advanced-routing/login?redirectTo=\${url.pathname}\`
        );
    }
}
`
};
