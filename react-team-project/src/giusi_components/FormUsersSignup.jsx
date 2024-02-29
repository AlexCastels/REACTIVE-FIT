import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export function FormUsersSignup() {
	const [userData, setUserData] = useState({
		username: '',
		firstName: '',
		lastName: '',
		email: '',
		gender: '',
		height: 0,
		weight: 0,
		streetAddress: '',
		city: '',
		region: '',
		postalCode: 0,
	})

	const [errorUserData, setErrorUserData] = useState('')

	let postUserData = {};

	function handleChangeInput(identifier, e) {
		// const checked = e.target.checked
		// const type = e.target.type

		setUserData(prev => {
			return {
				...prev,
				[identifier]: e.target.value
			}
		})

	}
	console.log(userData);


	function handleSubmitData(e) {
		e.preventDefault();
		let isUserDataComplete = Object.keys(userData).every(key => userData[key] !== null && userData[key] !== undefined && userData[key] !== "");

		if (isUserDataComplete) {
			postUserData = { ...userData }
			setErrorUserData('')
		} else {
			setErrorUserData('Please, complete all fields.')
		}

		console.log('post', postUserData);
		return postUserData;
	}

	return (
		<>
			<h2 className='text-center p-5 bg-orange-500 text-neutral-900 font-bold '>SIGN-UP USER</h2>
			<div className='p-14'>
				<form onSubmit={handleSubmitData}>
					<div className="space-y-12">
						<div className="border-b border-gray-900/10 pb-12">
							<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
								<div className="sm:col-span-4">
									<label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
										Username *
									</label>
									<div className="mt-2">
										<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus:ring-slate-500 sm:max-w-md">

											<input
												type="text"
												name="username"
												id="username"
												autoComplete="username"
												className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
												placeholder="janesmith"
												required
												onChange={(e) => handleChangeInput('username', e)}
											/>
										</div>
									</div>
								</div>

								<div className="col-span-full">
									<label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
										About
									</label>
									<p className="mt-1 text-sm leading-6 text-gray-600">Raccontaci di te, dei tuoi obiettivi di fitness e nutrizione.</p>

									<div className="mt-2">
										<textarea
											id="about"
											name="about"
											rows={3}
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6"
											defaultValue={''}
										/>
									</div>
								</div>

								<div className="col-span-full">
									<label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
										Photo
									</label>
									<div className="mt-2 flex items-center gap-x-3">
										<UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
										<button
											type="button"
											className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
										>
											Change
										</button>
									</div>
								</div>

								<div className="col-span-full">
									<label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
										Cover photo
									</label>
									<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
										<div className="text-center">
											<PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
											<div className="mt-4 flex text-sm leading-6 text-gray-600">
												<label
													htmlFor="file-upload"
													className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
												>
													<span>Upload a file</span>
													<input id="file-upload" name="file-upload" type="file" className="sr-only" />
												</label>
												<p className="pl-1">or drag and drop</p>
											</div>
											<p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="border-b border-gray-900/10 pb-12">
							<h2 className="text-base font-semibold leading-7 text-gray-900">Informazioni personali</h2>
							<p className="mt-1 text-sm leading-6 text-gray-600">Utilizza un indirizzo email permanente dove puoi ricevere la posta.</p>

							<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
								<div className="sm:col-span-3">
									<label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
										First name *
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="firstName"
											id="firstName"
											autoComplete="given-name"
											required
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6"
											onChange={(e) => handleChangeInput('firstName', e)}
										/>
									</div>
								</div>

								<div className="sm:col-span-3">
									<label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
										Last name *
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="lastName"
											id="lastName"
											autoComplete="family-name"
											required
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6"
											onChange={(e) => handleChangeInput('lastName', e)}
										/>
									</div>
								</div>

								<div className="sm:col-span-4">
									<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
										Email address *
									</label>
									<div className="mt-2">
										<input
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											required
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6"
											onChange={(e) => handleChangeInput('email', e)}
										/>
									</div>
								</div>

								<div className="sm:col-span-3">
									<label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
										Gender *
									</label>
									<div className="mt-2">
										<select
											id="gender"
											name="gender"
											autoComplete="gender-name"
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-500 sm:max-w-xs sm:text-sm sm:leading-6"
											onChange={(e) => handleChangeInput('gender', e)}
										>
											<option value='male'>Male</option>
											<option value='female'>Female</option>
											<option value='other'>Other</option>
										</select>
									</div>
								</div>

								<div className="sm:col-span-1">
									<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
										Height (cm) *
									</label>
									<div className="mt-2">
										<input
											id="height"
											name="height"
											type="number"
											autoComplete="height"
											placeholder='cm'
											required
											className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-3 focus:ring-2 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6"
											onChange={(e) => handleChangeInput('height', e)}
										/>
									</div>
								</div>
								<div className="sm:col-span-1">
									<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
										Weight (kg) *
									</label>
									<div className="mt-2">
										<input
											id="weight"
											name="weight"
											type="number"
											autoComplete="weight"
											placeholder='kg'
											required
											className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-3 focus:ring-2 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6"
											onChange={(e) => handleChangeInput('weight', e)}
										/>
									</div>
								</div>

								<div className="col-span-full">
									<label htmlFor="streetAddress" className="block text-sm font-medium leading-6 text-gray-900">
										Street address *
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="streetAddress"
											id="streetAddress"
											autoComplete="streetAddress"
											required
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6"
											onChange={(e) => handleChangeInput('streetAddress', e)}
										/>
									</div>
								</div>

								<div className="sm:col-span-2 sm:col-start-1">
									<label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
										City *
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="city"
											id="city"
											autoComplete="address-level2"
											required
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6"
											onChange={(e) => handleChangeInput('city', e)}
										/>
									</div>
								</div>

								<div className="sm:col-span-2">
									<label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
										State / Province *
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="region"
											id="region"
											autoComplete="address-level1"
											required
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6"
											onChange={(e) => handleChangeInput('region', e)}
										/>
									</div>
								</div>

								<div className="sm:col-span-2">
									<label htmlFor="postalCode" className="block text-sm font-medium leading-6 text-gray-900">
										ZIP / Postal code *
									</label>
									<div className="mt-2">
										<input
											type="text"
											name="postalCode"
											id="postalCode"
											autoComplete="postalCode"
											required
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6"
											onChange={(e) => handleChangeInput('postalCode', e)}
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="border-b border-gray-900/10 pb-12">
							<div className="mt-10 space-y-10">
								<fieldset>
									<div className="mt-6 space-y-6">
										<div className="relative flex gap-x-3">
											<div className="flex h-6 items-center">
												<input
													id="comments"
													name="comments"
													type="checkbox"
													onChange={(e) => handleChangeInput('checkbox', e)}
													className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-slate-500"
												/>
											</div>
											<div className="text-sm leading-6">
												<label htmlFor="comments" className="font-medium text-gray-900">
													Terms and Conditions
												</label>
												<p className="text-gray-500">By registering you agree to our Terms of Use. Please see our <span className='text-blue-600 cursor-pointer hover:underline'>Privacy Policy</span></p> 
											</div>
										</div>
									</div>
								</fieldset>
							</div>
						</div>
					</div>

					<div className="mt-6 flex items-center justify-end gap-x-6">
						<button type="button" className="text-sm font-semibold leading-6 text-gray-900">
							Cancel
						</button>
						<button
							type="submit"
							className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Save
						</button>
					</div>
					<div>
						{errorUserData && <p>{errorUserData}</p>}
					</div>
				</form>
			</div>
		</>
	)
}