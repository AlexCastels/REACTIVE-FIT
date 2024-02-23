import { UserAccessForm } from "./alex-components/UserAccessForm";
import { ChiSono } from "./benni-component/ChiSono";
import { RegistrationInformation } from "./benni-component/RegistrationInformation";
import { RegistrationUser } from "./benni-component/RegistrationUser";

import { Link, Route , Routes } from 'react-router-dom'

export function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<RegistrationInformation/>}/>
				<Route path='/scegli' element={<ChiSono/>}/>
				<Route path='/scegli/useraccess' element={<UserAccessForm/>}/>
				
				<Route path='/scegli/reg' element={<RegistrationUser/>}/>
			</Routes> 
			
		</>
	)
}
