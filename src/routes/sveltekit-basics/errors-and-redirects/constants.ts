export const CODE_EXAMPLES = {
	expectedError: `
        import { error } from '@sveltejs/kit';

        export async function load() {
            throw error(400, 'This is an expected error');
        }
    `,
	unexpectedError: `
        export function load() {
            throw new Error('This is an unexpected error');
        }
    `,
	customErrorPage: `
        <script lang="ts">
            import { page } from '$app/stores';
        </script>

        <h1>Custom error page</h1>

        <p>
            This is a custom error page. It will be displayed when an error occurs in this route.
        </p>

        <p>
            The page status is: <strong>{$page.status}</strong>
            The error message is: <strong>{$page.error?.message}</strong>
        </p>
    `,
	fallbackErrorPage: `
    <h1>You really did it this time, you damn code monkey!</h1>
    <p>Code %sveltekit.status%</p>
    <p>%sveltekit.error.message%</p>
`,
	redirects: `
import { redirect } from '@sveltejs/kit';

export async function load() {
	throw redirect(307, '/sveltekit-basics/errors-and-redirects');
}
`
};
