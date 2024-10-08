<script lang="ts">
	import { COMPONENT_CODE, HEADER, href } from './constants';
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import Link from '$lib/components/ui/link/link.svelte';
	import Note from '$lib/components/ui/note/note.svelte';
</script>

<h1 class="text-primary-700">Component Anatomy</h1>
<p>
	A Svelte component encapsulates HTML, CSS and JS (or TS), all written into a single
	<code>.svelte</code>
	file.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText={HEADER.SAMPLE}
		code={COMPONENT_CODE.SAMPLE} />
</div>

<ul>
	<p>The component is composed of three parts:</p>
	<li>
		<em>JS</em>
		- The logic of the component is defined in the
		<code>&lt;script&gt;</code>
		tag;
	</li>
	<li>
		<em>HTML</em>
		- The elements that compose the component are defined after the
		<code>&lt;script&gt;</code>
		tag;
	</li>
	<li>
		<em>CSS</em>
		- The styles are defined in the
		<code>&lt;style&gt;</code>
		tag.
	</li>
</ul>

<Note>
	<p class="text-sm">
		For a component to be valid, we only really need the HTML section, everything else is
		optional. Svelte also allows us to use a shorthand syntax when an element's dynamic
		attribute has the same name and value. We could write <code>{`<img {src} />`}</code>
		and it would still work.
	</p>
</Note>

<h2>Styling</h2>
<p>
	When using the <code>style</code>
	tag, Svelte only applies the rules defined within to the component's scope - i.e, if we define
	styles for
	<code>p</code>
	elements in a component, they won't be applied to
	<code>p</code>
	elements in other components throughout the application.
</p>

<h2>Render/Inject HTML</h2>
<p>
	In order to render/inject HTML code directly in a component, we should use the special
	<code>&#123;@html ...&#125;</code>
	. This is useful when we want to render a string with HTML code that is dynamically generated.
</p>

<Note>
	<p class="text-sm">
		Svelte doesn't perform any sanitization of the expression before it gets inserted into
		the DOM. This isn't an issue if the content is something you trust like an article you
		wrote yourself. However, if the content is user-generated or you don't know its
		source, you should sanitize it before rendering. For this, you can use the
		<Link {href}>sanitize-html</Link>
		package.
	</p>
</Note>
