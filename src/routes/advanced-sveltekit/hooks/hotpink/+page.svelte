<script lang="ts">
</script>

<div class="flex w-full flex-col items-center">
	<h1>Welcome to the Pink Page!</h1>

	<p>
		This little hacker girl has made your entire app pink using the handle hook in
		+hooks.server.ts! And when you leave, the rest of the app will be in pink as well!
	</p>

	<div>
		<img
			width="500"
			src="/img/pinkcodegirl.jpg"
			alt="A girl coding with a pink background" />
	</div>

	<p>
		Why did you have to paste this in your browser and why does everything remain pink
		after you leave the page?
	</p>
	<p>
		Because the handle hook is triggered on a server request, and it applies to everything
		else from then onwards (at least until the server is called on to render things again,
		such as after a refresh).
	</p>
	<p>
		In fact, if you reached this page via an internal link from another page, the
		background would be normal, because Sveltekit would be using client-side rendering and
		acting as a Single Page Application.
	</p>
</div>

<style>
	p:first-of-type {
		margin-top: 1rem;
		margin-bottom: 2rem;
	}
</style>
