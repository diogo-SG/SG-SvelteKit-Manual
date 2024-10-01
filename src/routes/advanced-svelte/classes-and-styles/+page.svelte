<script lang="ts">
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { CODE } from './constants';
	const headerText = 'App.svelte';
</script>

<h1>Classes and Styles</h1>

<h2>Class directive</h2>

<p>Like any other attribute, you can specify classes with a JavaScript attribute.</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		{headerText}
		code={CODE.CLASS} />
</div>
<p>
	Dissecting the above example, we can see that there is a class that is being applied if <code>
		isActive
	</code>
	is set to true. This works just fine as it is, but it's possible to use a shorthand version
	to achieve the same result and, therefore, clear some unecessary code.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		{headerText}
		code={CODE.CLASS_SHORTHAND} />
</div>

<div class="flex flex-col gap-2">
	<h5>Note</h5>
	<p>
		This directive means "add the <code>isActive</code>
		class if
		<code>isActive</code>
		is true".
		<span class="underline">
			Since the name of the class will be the same as the value it depends on, we can even
			go a little further and use this syntax
		</span>
		<code>class:isActive</code>
		.
	</p>
</div>

<h2>Style directive</h2>

<p>
	Just like the <code>class</code>
	directive, the
	<code>style</code>
	directive can be used to apply styles based on a condition.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		{headerText}
		code={CODE.STYLE} />
</div>

<p>
	You can simplify the previous code using a shorthand version, which will greatly improve
	readability and maintainability, especially as you add more styles to an element.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		{headerText}
		code={CODE.STYLE_SHORTHAND} />
</div>

<h2>Component styles</h2>

<p>
	Sometimes you may want to apply styles to a component from the outside. This can be done
	by passing a CSS variable directly to the component, as a prop.
</p>

<div class="flex flex-col gap-2">
	<h5>Example:</h5>
	<CodeWrapper
		headerText="Button.svelte"
		code={CODE.COMPONENT_STYLE_CHILD} />

	<CodeWrapper
		{headerText}
		code={CODE.COMPONENT_STYLE_PARENT} />
</div>

<p>
	By passing the CSS variable <code>--color</code>
	with a value of
	<code>red</code>
	to the
	<code>Button.svelte</code>
	component, the background color is going to change accordingly.
</p>
