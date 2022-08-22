import { useState } from "react"

const TestComponent = () => {
	const [name, setName] = useState("subash");
	const [isAdmin, setIsAdmin] = useState(false);
	return (
		<div>
			<h3>{name}</h3>
			
			<button onClick={() => {
				setName("Ramesh");
				setIsAdmin(!isAdmin);
			}}>Click me</button>

			{isAdmin && <h3> Yeah this is showing true.</h3>}
		</div>
	)
}


export default TestComponent;