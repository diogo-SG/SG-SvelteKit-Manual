<script lang="ts">
	import PropsExample from '$lib/components/examples/props-example-component/props-example.svelte';
	import PropsMultipleExample from '$lib/components/examples/props-multiple-example-component /props-multiple-example.svelte';
	import CodeBlock from '$lib/components/ui/code-block/code-block.svelte';
</script>

<h1>Props</h1>
<h2>Introduction</h2>
<p>
	Props are a way to pass data from a parent component to a child component. In Svelte, props are
	declared in the child component's script tag, and can be used in the component's HTML and JS.
</p>
<p>Here is an example of a component that accepts props:</p>
<CodeBlock>
	{`<script>
    export let exampleName = 'Props Example';
<\/script>

<div>
    This is an example of a component that accepts props. The prop passed to this component is: <strong>{exampleName}</strong>
</div>

<style>
    div {
        background-color: #1f4a65;
        padding: 1rem;
        border-radius: 5px;
    }
</style>`}
</CodeBlock>

<p>And here's the component that renders:</p>
<PropsExample exampleName="Props Example" />

<p>
	Note that you can define a default value for a prop by assigning it in the script tag, like in the
	example above, or leave it empty if no default is required.
</p>

<p>If we have multiple props, we can pass them like so:</p>
<CodeBlock>
	{`<PropsMultipleExample name="Diogo" age="33" country="Portugal" city="Barreiro" />`}
</CodeBlock>

<p>And here's the component that renders:</p>
<PropsMultipleExample name="Diogo" age="33" country="Portugal" city="Barreiro" />

<p>But since Svelte provides us with a shorthand syntax, we can also pass props like this:</p>
<CodeBlock>
	{`<PropsMultipleExample {name} {age} {country} {city} />`}
</CodeBlock>

<p>Or we could even spread an object into the component as props:</p>

<CodeBlock>
	{`<script>
    let props = {
        name: 'Diogo',
        age: 33,
        country: 'Portugal',
        city: 'Barreiro'
    }
<\/script>

<PropsMultipleExample {...props} />`}
</CodeBlock>
