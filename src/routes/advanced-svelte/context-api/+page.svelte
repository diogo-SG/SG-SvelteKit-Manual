<script lang="ts">
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { CODE } from './constants';

	const headerText = 'App.svelte';
	const cardHeaderText = 'Card.svelte';
</script>

<h1>Context API</h1>

<p>
	The <code>context</code>
	API is used to pass data down the component tree without the need to pass data through props.
	This API provides two methods -
	<code>setContext</code>
	and
	<code>getContext</code>
	.
</p>

<h2>setContext</h2>

<p>
	The <code>setContext</code>
	method, as the name suggests, is used to set the context value. It accepts two arguments
	- the context
	<em>key</em>
	and the
	<em>value</em>
	. It is declared on the parent component so that other components down the component tree
	can access and consume the data. In the next example, the
	<code>App.svelte</code>
	component will use
	<code>setContext</code>
	method to set a value for a context key called
	<code>color</code>
	:
</p>

<CodeWrapper
	{headerText}
	code={CODE.SET_CONTEXT} />

<h2>getContext</h2>

<p>
	The <code>getContext</code>
	method allows you to access the context value. It accepts one argument - the context
	<em>key</em>
	. Let's use the
	<code>Card.svelte</code>
	as an example to consume the context value set by the
	<code>App.svelte</code>
	component:
</p>

<CodeWrapper
	headerText={cardHeaderText}
	code={CODE.GET_CONTEXT} />

<p>
	Your context object can include anything you want, including stores. This makes it
	possible to pass values that change over time to any component down the component tree.
	Here's just a small example for you to have a reference:
</p>

<CodeWrapper
	{headerText}
	code={CODE.SET_CONTEXT_WITH_STORE} />

<CodeWrapper
	headerText={cardHeaderText}
	code={CODE.GET_CONTEXT_WITH_STORE} />
