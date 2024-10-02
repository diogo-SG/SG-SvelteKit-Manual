<script>
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import Link from '$lib/components/ui/link/link.svelte';
	import { CODE_EXAMPLES } from './constants';
</script>

<h1>Environment variables</h1>

<p>
	Since SvelteKit uses Vite under the hood, you can use Vite's environment variables in
	your SvelteKit project. That means <code>.env</code>
	,
	<code>.env.local</code>
	, or
	<code>.env.[mode]</code>
	files are all valid. You can check the <Link
		href="https://vitejs.dev/guide/env-and-mode.html#env-files">
		Vite documentation
	</Link> for more information. Environment variables in
	<code>process.env</code>
	are also available via
	<code>$env/static/private</code>
	.
</p>

<h2>Private env variables</h2>
<p>
	After defining an env variable in a <code>.env</code>
	file, you can import it in server files as such -
	<code>{`import {MY_ENV_VAR} from '$env/static/private';`}</code>
</p>

<ul>
	<p class="font-bold">
		That means it can only be imported into server modules, for example:
	</p>
	<li>
		<code>+page.server.js</code>
		;
	</li>
	<li>
		<code>+layout.server.js</code>
		;
	</li>
	<li>
		<code>+server.js</code>
		;
	</li>
	<li>
		any modules ending with <code>.server.js</code>
		;
	</li>
	<li>
		any modules inside
		<code>src/lib/server</code>
		.
	</li>
</ul>

<div class="flex flex-col gap-2">
	<h5>Note</h5>
	<p>
		If you try to import this in a <code>+page.svelte</code>
		file, where it would be available on the browser, SvelteKit will throw an error to prevent
		us from exposing it and therefore compromising our app's security.
	</p>
</div>

<h2>Static vs Dynamic</h2>
<p>
	The <code>static</code>
	in
	<code>$env/static/private</code>
	indicates that these values are known at build time, and thus can be statically replaced.
	This means that we can tell SvelteKit to optimize the code based on this information.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText="+server.ts"
		code={CODE_EXAMPLES.env1} />
</div>

<p>
	On the other hand, some <code>env</code>
	variables can be dynamic and we can't (or don't want to) know their value until we run the
	app. For these, we can use
	<code>$env/dynamic/private</code>
	.
</p>

<h2>Public env variables</h2>
<p>
	You can also define public <code>env</code>
	variables in your
	<code>.env</code>
	file, which can be safely exposed to the browser, and therefore can be accessed in any file
	in your project. You do this by prefixing those variables with the
	<code>PUBLIC_</code>
	prefix - for example,
	<code>PUBLIC_THEME="SG_BLUE"</code>
	. You can then access these variables by importing them using
	<code>$env/static/public</code>
	. If you need these variables to be dynamic values, you can import them from
	<code>$env/dynamic/public</code>
	instead.
</p>
