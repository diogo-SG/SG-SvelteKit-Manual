export const href = 'https://www.npmjs.com/package/sanitize-html';

export const HEADER = {
	SAMPLE: 'app.svelte'
};

export const COMPONENT_CODE = {
	SAMPLE: `
    <script>
        let name = 'Diogo';
        let src = '/party-parrot.gif';
    </script>

        <h1>Hello {name}</h1>
        <p>This is a paragraph.</p>
        <img src={src} alt="Party parrot" />
    
    <style>
            p {
        color: goldenrod;
        font-family: 'Comic Sans MS', cursive;
            font-size: 2em;
            }
    </style>
        `
};

export const CODE_EXAMPLE = {
	SAMPLE_1:
		'<div class="bg-[lightgray] flex flex-col items-center p-3"><h4 class="text-[red]">This is an H4 tag</h4><p class="text-[1rem] text-[#fff]">This is a p tag</p></div>',
	SAMPLE_2: '<strong>hello world</strong><p>I was sanitized before rendering!</p>'
};
