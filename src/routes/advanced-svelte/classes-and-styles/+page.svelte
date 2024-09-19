<script lang="ts">
	import CodeWrapper from '$lib/components/ui/code-wrapper/code-wrapper.svelte';
	import { CODE } from './constants';
	const headerText = 'App.svelte';
</script>

<h1>Classes and Styles</h1>

<h2>Class directive</h2>

<p>
	Like any other attribute, you can specify classes with a JavaScript attribute. Here's a
	simple example:
</p>

<CodeWrapper
	{headerText}
	code={CODE.CLASS} />

<p>
	Dissecting the above example, we can see that there is a class that is being applied if <code>
		isActive
	</code>
	is set to true. This works just fine as it is, but it's possible to use a shorthand version
	to achieve the same result and, therefore, clear some unecessary code. Take a look at this:
</p>

<CodeWrapper
	{headerText}
	code={CODE.CLASS_SHORTHAND} />

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

<h2>Style directive</h2>

<p>
	Just like the <code>class</code>
	directive, the
	<code>style</code>
	directive can be used to apply styles based on a condition.
</p>

<CodeWrapper
	{headerText}
	code={CODE.STYLE} />

<p>
	You can simplify the previous code using a shorthand version, which will greatly improve
	readability and maintainability, especially as you add more styles to an element. Take a
	look at this:
</p>

<CodeWrapper
	{headerText}
	code={CODE.STYLE_SHORTHAND} />
