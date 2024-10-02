export const href = 'https://www.npmjs.com/package/sanitize-html';

export const HEADER = {
	SAMPLE: 'App.svelte'
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
