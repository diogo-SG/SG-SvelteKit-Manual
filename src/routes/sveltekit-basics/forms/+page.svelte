<script lang="ts">
	import Link from '$lib/components/ui/link/link.svelte';
	import Note from '$lib/components/ui/note/note.svelte';
</script>

<h1 class="text-primary-700">Forms</h1>

<p>
	Forms are a fundamental part of web development. They allow users to input data and
	submit it to the server. In this section, we'll cover how to work with forms to submit
	data in SvelteKit.
</p>

<h2>Basic forms</h2>

<p>
	A Svelte form is just like a regular HTML form. When we define its method as POST, it'll
	make a post request to the current page. We can then create a server-side <code>
		action
	</code>
	to handle the form submission. Here's an example of a basic form in SvelteKit:
</p>
<Note title="Try it">
	<div class="flex justify-center">
		<Link
			isInternal
			href="./forms/basic">
			Search countries
		</Link>
	</div>
</Note>
<p class="mt-5">
	The request here is a standard <Link
		href="https://developer.mozilla.org/en-US/docs/Web/API/Request">
		Request
	</Link>
	object, and
	<code>await request.formData()</code>
	returns a
	<Link href="https://developer.mozilla.org/en-US/docs/Web/API/FormData">FormData</Link> instance.
</p>

<h2>Multiple actions</h2>
<p>
	We can also handle multiple actions by naming them. For example, if we want to add a
	"Get all" button to the previous example, we can do it by specifying another action in
	the actions exported in <code>+page.server.ts</code>
	file, and specifying which action to use in the form itself by using
	<code>{'<form method="POST" action="?/search"></form>'}</code>
	. Have a look at the example below to see the code and the results:
</p>

<Note title="Try it">
	<div class="flex justify-center">
		<Link
			isInternal
			href="./forms/multiple">
			Get 10 countries
		</Link>
	</div>
</Note>

<h2>Progressive enhancement</h2>

<p>
	Since SvelteKit uses the native html form component to build these actions, in most
	cases they work without client-side JavaScript, which <Link
		href="https://www.kryogenix.org/code/browser/everyonehasjs.html">
		can be much more useful than you'd think
	</Link>.
</p>
<p>
	You might have noticed that while running the first example, it triggered a page refresh
	on form submission. This is because this is the default behaviour of the form html
	element, and why we often have to prevent that refresh with <Link
		href="https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault">
		the preventDefault method
	</Link> on the click event.
</p>
<p>
	In the second example however, there was no refresh on submit. This is because SvelteKit
	also makes it possible to progressively enhance the form interactions. In other words,
	to not use JS at first, but to enable certain behaviours when it does become available.
	This is done by adding the <code>use:enhance</code>
	directive to the form html element.
</p>
<ul>
	<p>
		This will emulate the browser-native behaviour (with the exception of the full-page
		reload) and it will:
	</p>
	<li>
		Update the <code>form prop</code>
		;
	</li>
	<li>
		Invalidate all data on a successful response, calling <code>load</code>
		functions to re-run;
	</li>
	<li>Navigate to a new page on a redirect response;</li>
	<li>Render the nearest error page if one occurs.</li>
</ul>
<Note>
	<p class="text-sm">
		It's an interesting and powerful feature, and one you can customize further to improve
		the general form submission experience for users, including things like controlling
		when the form is reset, handling redirects, etc. You can read more about progressive
		enhancement by clicking <Link
			href="https://kit.svelte.dev/docs/form-actions#progressive-enhancement">
			here
		</Link>. You can also read the full documentation about Form Actions in SvelteKit <Link
			href="https://kit.svelte.dev/docs/form-actions">
			here
		</Link>.
	</p>
</Note>

<h2>Form validation</h2>

<p>
	In SvelteKit, we can use the built-in form validation functionality to validate form
	data. To validate the form, we can use the <code>validate</code>
	function from the
	<code>kit</code>
	module. You can check out and example and the code behind it below:
</p>

<Note title="Try it">
	<div class="flex justify-center">
		<Link
			isInternal
			href="./forms/validation">
			Form validation
		</Link>
	</div>
</Note>
