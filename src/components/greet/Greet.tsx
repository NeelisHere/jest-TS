import { GreetProps } from "./Greet.types"

function Greet(props: GreetProps) {
	return (
		<div>Hello {props.name? props.name : 'guest'}</div>
	)
}

export default Greet