<script lang="ts">
	import PropsExample from '$lib/components/examples/props-example-component/props-example.svelte';
	import PropsMultipleExample from '$lib/components/examples/props-multiple-example-component /props-multiple-example.svelte';
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import Note from '$lib/components/ui/note/note.svelte';
	import { COMPONENT_CODE, HEADER } from './constants';

	const props = {
		name: 'Snickerdoodle',
		age: 6,
		country: 'Fluffy Land',
		question: "Help me, I'm trapped in a component! 😵‍💫"
	};
</script>

<h1 class="text-primary-700">Props</h1>
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

<div class="flex flex-col items-center gap-2">
	<p>And here's the component:</p>
	<PropsExample exampleName="wait a minute...am i a prop? 🤔" />
</div>

<Note>
	<p class="text-sm">
		You can define a default value for a prop by assigning it in the script tag or leave
		it empty if no default is required.
	</p>
</Note>

<div class="flex flex-col gap-2">
	<p>If we have multiple props, we can pass them like so:</p>
	<CodeWrapper
		headerText={HEADER.APP}
		code={COMPONENT_CODE.MULTIPLE_PROPS} />
</div>
<div class="flex flex-col items-center gap-2">
	<p>And here's the component:</p>
	<PropsMultipleExample {...props} />
</div>
<div class="flex flex-col gap-2">
	<p>
		Since Svelte provides us with a shorthand syntax if the variable name matches the prop
		name, we can also pass props like this:
	</p>
	<CodeWrapper
		headerText={HEADER.APP}
		code={COMPONENT_CODE.MULTIPLE_PROPS_SHORTHAND} />
</div>

<div class="flex flex-col gap-2">
	<p>Or we could even spread an object into the component as props:</p>
	<CodeWrapper
		headerText={HEADER.APP}
		code={COMPONENT_CODE.SPREAD_PROPS} />
</div>

<Note>
	<p class="text-sm">
		Another nifty trick that Svelte allows is to access props that were not
		exported/declared on the component. Imagine that the component is only receiving
		<code>firstName</code>
		as a prop , but we are passing
		<code>lastName</code>
		as well. The
		<code>lastName</code>
		can still be used and we can access it by writing
		<code>&#123;$$props.lastName&#125;</code>
		. It's not generally recommended, but it can still be a very useful trick in some rare
		cases.
	</p>
</Note>
