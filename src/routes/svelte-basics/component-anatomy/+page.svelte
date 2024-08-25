<script lang="ts">
	import CodeBlock from "$lib/components/ui/code-block/code-block.svelte";
    
    const sampleCode1 = `
        <script>
        let name = 'Svelte';
        <\/script>

        <h1>Hello world!</h1>
        <p>This is a paragraph.</p>

        <style>

            p {
        color: goldenrod;
        font-family: 'Comic Sans MS', cursive;
            font-size: 2em;
            }
</${''}style>
        `
    
</script>

<div>
    <h1>
        Component Anatomy
    </h1>
    <p>A Svelte component encapsulates HTML, CSS and JS (or TS), all written into a single .svelte file.</p>
    <p>Here is an example of a simple component:</p>
    <CodeBlock>
        {sampleCode1}
    </CodeBlock>
</div>