export const HEADER = {
	PROPS: 'props.svelte'
};

export const COMPONENT_CODE = {
	PROPS: `
    <script>
        export let exampleName = 'Props Example';
    </script>

    <div>
        This is an example of a component that accepts props. The prop passed to this component is: <strong>{exampleName}</strong>
    </div>

    <style>
        div {
        background-color: #1f4a65;
        padding: 1rem;
        border-radius: 5px;
        }
    </style>
`,
	MULTIPLE_PROPS: `
<PropsMultipleExample name="Diogo" age="33" country="Portugal" city="Barreiro" />
    `,
	MULTIPLE_PROPS_SHORTHAND: `
    <PropsMultipleExample {name} {age} {country} {city} />
    `,
	SPREAD_PROPS: `
    <script>
        let props = {
        name: 'Diogo',
        age: 33,
        country: 'Portugal',
        city: 'Barreiro'
        }
    </script>

    <PropsMultipleExample {...props} />
`
};
