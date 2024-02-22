import { UserAccessForm } from "./alex-components/UserAccessForm";
import { HelloWorld } from "./components/HelloWorld";
import { Link, Route , Routes } from 'react-router-dom'

export function App() {
	return (
		<>
			{/* <Routes>
				<Route path='/' element={<HelloWorld/>}/>
			</Routes> */}
			<UserAccessForm/>
		</>
	)
}
