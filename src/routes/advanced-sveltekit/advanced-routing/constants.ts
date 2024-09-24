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
    `
};
