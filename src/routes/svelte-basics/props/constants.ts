export const HEADER = {
	PROPS: 'props.svelte'
};

export const COMPONENT_CODE = {
	PROPS: `
    <script>
        export let exampleName;
    </script>

    <div>
	    <h2>I'm a component.</h2>
	    <p>
		    The prop passed is:
            <br />
		    <strong>{exampleName}</strong>
	    </p>
    </div>

    <style>
        div {
        display: flex;
        width: fit-content;
        flex-direction: column;
        gap: 0.5rem;
        border-radius: 0.5rem;
        background-color: #5b859f;
        padding: 1rem;
        color: #fff;
        }
    </style>
`,
	MULTIPLE_PROPS: `
    <PropsMultipleExample 
        name="Snickerdoodle" 
        age={6} 
        country="Fluffy Land" 
        question: "Help me, I'm trapped in a component! 😵‍💫" 
    />
    
    `,
	MULTIPLE_PROPS_SHORTHAND: `
    <PropsMultipleExample {name} {age} {country} {question} />
    `,
	SPREAD_PROPS: `
    <script>
        let props = {
		name: 'Snickerdoodle',
		age: 6,
		country: 'Fluffy Land',
		question: "Help me, I'm trapped in a component! 😵‍💫"
	};
    </script>

    <PropsMultipleExample {...props} />
`
};
