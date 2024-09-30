<script lang="ts">
	import sanitizeHtml from 'sanitize-html';
	import { CODE_EXAMPLE, COMPONENT_CODE, HEADER, href } from './constants';
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import Link from '$lib/components/ui/link/link.svelte';
	const sanitizedHTML = sanitizeHtml(CODE_EXAMPLE.SAMPLE_2);
</script>

<h1>Component Anatomy</h1>
<p>
	A Svelte component encapsulates HTML, CSS and JS (or TS), all written into a single
	<code>.svelte</code>
	file.
</p>
<p>Here is an example of a simple component:</p>

<CodeWrapper
	headerText={HEADER.SAMPLE}
	code={COMPONENT_CODE.SAMPLE} />

<ul>
	<p class="font-bold">As you can see, the component is composed of three parts:</p>
	<li>
		<em>JS:</em>
		The logic of the component is defined in the
		<code>&lt;script&gt;</code>
		tag.
	</li>
	<li>
		<em>HTML:</em>
		The elements the component is composed of are defined after the
		<code>&lt;script&gt;</code>
		tag.
	</li>
	<li>
		<em>CSS:</em>
		The styles are defined in the
		<code>&lt;style&gt;</code>
		tag.
	</li>
</ul>

<h2>Notes</h2>
<p>
	For a component to be valid, we only really need the HTML section, everything else is
	optional. Svelte also allows us to use a shorthand syntax when an element's dynamic
	attribute has the same name and value. For example, instead of
	<code>{`<img src={src} alt="Party parrot" />`}</code>
	we could use simply
	<code>{`<img {src} alt="Party parrot" />`}</code>
</p>

<h2>Styling</h2>
<p>
	When using the <code>style</code>
	tag, Svelte only applies the rules defined within to the component's scope - i.e, if we define
	styles for
	<code>p</code>
	elements in a component, they won't be applied to
	<code>p</code>
	elements in other components throughout the application
</p>

<h2>Render/Inject HTML from plain text</h2>
<p>
	In order to render/inject HTML code directly in a component, we should use the special
	<code>&#123;@html ...&#125;</code>
	. This is useful when we want to render HTML code that is dynamically generated.
</p>
<p>
	For example, if we have a string with HTML code, we can render it like this:
	{@html CODE_EXAMPLE.SAMPLE_1}
</p>
<p>
	<span class="underline">
		Svelte doesn't perform any sanitization of the expression before it gets inserted into
		the DOM.
	</span>
	This isn't an issue if the content is something you trust like an article you wrote yourself.
	However, if the content is user-generated or you don't know its source, you should sanitize
	it before rendering. For this, you can use the
	<Link {href}>sanitize-html</Link>
	package. Click the link to learn more about it.
</p>
<p>Here's an example of sanitized code using the package mentioned before:</p>
<div class="flex flex-col items-center bg-[lightgray] p-3">
	{@html sanitizedHTML}
</div>
