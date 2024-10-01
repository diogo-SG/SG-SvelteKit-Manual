<script lang="ts">
	import PropsExample from '$lib/components/examples/props-example-component/props-example.svelte';
	import PropsMultipleExample from '$lib/components/examples/props-multiple-example-component /props-multiple-example.svelte';
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { COMPONENT_CODE, HEADER } from './constants';
</script>

<h1>Props</h1>
<h2>Introduction</h2>
<p>
	Props are a way to pass data from a parent component to a child component. In Svelte,
	props are declared in the child component's script tag, and can be used in the
	component's HTML and JS.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText={HEADER.PROPS}
		code={COMPONENT_CODE.PROPS} />
</div>

<div class="flex flex-col gap-2">
	<p>And here's the component that renders:</p>
	<PropsExample exampleName="Props Example" />
</div>

<div class="flex flex-col gap-2">
	<h5>Note</h5>
	<p>
		You can define a default value for a prop by assigning it in the script tag, like in
		the example above, or leave it empty if no default is required.
	</p>
</div>

<div class="flex flex-col gap-2">
	<p>If we have multiple props, we can pass them like so:</p>
	<CodeWrapper
		headerText={HEADER.PROPS}
		code={COMPONENT_CODE.MULTIPLE_PROPS} />
</div>
<div class="flex flex-col gap-2">
	<p>And here's the component that renders:</p>
	<PropsMultipleExample
		name="Diogo"
		age="33"
		country="Portugal"
		city="Barreiro" />
</div>
<div class="flex flex-col gap-2">
	<p>
		Since Svelte provides us with a shorthand syntax, we can also pass props like this:
	</p>
	<CodeWrapper
		headerText={HEADER.PROPS}
		code={COMPONENT_CODE.MULTIPLE_PROPS_SHORTHAND} />
</div>

<div class="flex flex-col gap-2">
	<p>Or we could even spread an object into the component as props:</p>
	<CodeWrapper
		headerText={HEADER.PROPS}
		code={COMPONENT_CODE.SPREAD_PROPS} />
</div>

<div class="flex flex-col gap-2">
	<h5>Note</h5>
	<p>
		Another nifty trick that Svelte allows is to access props that were not
		exported/declared on the component. Imagine that the component is only exporting
		<code>firstName</code>
		, but we are passing
		<code>lastName</code>
		prop as well. The
		<code>lastName</code>
		can still be used and we can access it by writing
		<code>&#123;$$props.lastName&#125;</code>
		.
		<span class="underline">
			It's not generally recommended, since it's difficult for Svelte to optimise.
		</span>
		But it can still be a very useful trick in some rare cases.
	</p>
</div>
