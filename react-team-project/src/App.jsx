import { UserAccessForm } from "./alex-components/UserAccessForm";
import { RegistrationInformation } from "./benni-component/RegistrationInformation";
import { RegistrationUser } from "./benni-component/RegistrationUser";
import { HelloWorld } from "./components/HelloWorld";
import { Link, Route , Routes } from 'react-router-dom'

export function App() {
	return (
		<>
			{/* <Routes>
				<Route path='/' element={<HelloWorld/>}/>
			</Routes> */}
			<RegistrationInformation/>
		</>
	)
}
