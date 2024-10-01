<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>Custom error page</h1>

<p>
	This is a custom error page. It will be displayed when an error occurs in this route.
</p>

<p>
	The page status is: <strong>{$page.status}</strong>
	The error message is:
	<strong>{$page.error?.message}</strong>
</p>
