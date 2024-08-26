<script lang="ts">
	import CodeBlock from '$lib/components/ui/code-block/code-block.svelte';

	const sampleCode1 = `
        <script>
        let name = 'Diogo';
        let src = '/party-parrot.gif';
        <\/script>

        <h1>Hello {name}</h1>
        <p>This is a paragraph.</p>
        <img src={src} alt="Party parrot" />
        <style>

            p {
        color: goldenrod;
        font-family: 'Comic Sans MS', cursive;
            font-size: 2em;
            }
</${''}style>
        `;
</script>

<div>
	<h1>Component Anatomy</h1>
	<p>
		A Svelte component encapsulates HTML, CSS and JS (or TS), all written into a single .svelte
		file.
	</p>
	<p>Here is an example of a simple component:</p>
	<CodeBlock>
		{sampleCode1}
	</CodeBlock>
	<p>As you can see, the component is composed of three parts:</p>
	<ul>
		<li>
			<strong>JS:</strong> The logic of the component is defined in the <code>&lt;script&gt;</code> tag.
		</li>
		<li>
			<strong>HTML:</strong> The elements the component is composed of are defined after the
			<code>&lt;script&gt;</code> tag.
		</li>
		<li>
			<strong>CSS:</strong> The styles are defined in the <code>&lt;style&gt;</code> tag.
		</li>
	</ul>

	<h2>Notes</h2>
	<p>
		For a component to be valid, we only really need the HTML section - everything else is optional.
	</p>
	<p>
		Also of note is the fact that Svelte allows us to use a shorthand syntax when an element's
		dynamic attribute has the same name and value. For example, instead of
		<code> {`<img src={src} alt="Party parrot" />`}</code> we could use simply
		<code> {`<img {src} alt="Party parrot" />`}</code>
	</p>

	<h2>Styling</h2>
	<p>
		When using the <code>style</code> tag, Svelte only applies the rules defined within to the
		component's scope - i.e, if we define styles for <code>p</code> elements in a component, they
		won't be applied to <code>p</code> elements in other components throughout the application
	</p>
</div>
