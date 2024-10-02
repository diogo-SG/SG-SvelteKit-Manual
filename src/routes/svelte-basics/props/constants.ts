export const HEADER = {
	PROPS: 'Component.svelte',
	APP: 'App.svelte'
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
`,
	MULTIPLE_PROPS: `
    <PropsMultipleExample 
        name="Snickerdoodle" 
        age={6} 
        country="Fluffy Land" 
        question="Help me, I'm trapped in a component! 😵‍💫" 
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
