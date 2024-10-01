export const CODE_EXAMPLES = {
	env1: `
    import { FEATURE_FLAG_X } from '$env/static/private';

		if (FEATURE_FLAG_X === 'enabled') {
			// code in here will be removed from the build output
			// if FEATURE_FLAG_X is not enabled
		}
		`
};
