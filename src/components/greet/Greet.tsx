
function Greet(props: GreetProps) {
	return (
		<div>Hello { props.name || null }</div>
	)
}

export default Greet