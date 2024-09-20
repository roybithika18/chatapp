import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import { User, Lock, Mail, UserPlus } from 'lucide-react';

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
			<div className='w-full max-w-2xl p-8 space-y-8 bg-white rounded-xl shadow-2xl'>
				<div className="text-center">
					<h1 className='text-4xl font-bold text-gray-800'>
						Join <span className='text-purple-600'>ChatApp</span>
					</h1>
					<p className="mt-2 text-gray-600">Create your account</p>
				</div>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="relative">
							<User className="absolute top-3 left-3 text-gray-400" size={20} />
							<input
								type='text'
								placeholder='Full Name'
								className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600'
								value={inputs.fullName}
								onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
							/>
						</div>

						<div className="relative">
							<Mail className="absolute top-3 left-3 text-gray-400" size={20} />
							<input
								type='text'
								placeholder='Username'
								className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600'
								value={inputs.username}
								onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
							/>
						</div>

						<div className="relative">
							<Lock className="absolute top-3 left-3 text-gray-400" size={20} />
							<input
								type='password'
								placeholder='Password'
								className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600'
								value={inputs.password}
								onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
							/>
						</div>

						<div className="relative">
							<Lock className="absolute top-3 left-3 text-gray-400" size={20} />
							<input
								type='password'
								placeholder='Confirm Password'
								className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600'
								value={inputs.confirmPassword}
								onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
							/>
						</div>
					</div>

					<div className="flex justify-center space-x-4">
						{['male', 'female', 'other'].map((gender) => (
							<label key={gender} className="flex items-center space-x-2 cursor-pointer">
								<input
									type="radio"
									checked={inputs.gender === gender}
									onChange={() => setInputs({ ...inputs, gender })}
									className="form-radio h-4 w-4 text-purple-600"
								/>
								<span className="capitalize text-gray-700">{gender}</span>
							</label>
						))}
					</div>

					<button 
						className='w-full px-4 py-2 text-white font-semibold bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50'
						disabled={loading}
					>
						{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
					</button>
				</form>

				<div className="text-center">
					<Link to='/login' className='text-sm text-purple-600 hover:underline'>
						Already have an account? Sign in
					</Link>
				</div>
			</div>
		</div>
	);
};
export default SignUp;

// STARTER CODE FOR THE SIGNUP COMPONENT
// import GenderCheckbox from "./GenderCheckbox";

// const SignUp = () => {
// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Sign Up <span className='text-blue-500'> ChatApp</span>
// 				</h1>

// 				<form>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Full Name</span>
// 						</label>
// 						<input type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' />
// 					</div>

// 					<div>
// 						<label className='label p-2 '>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' />
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Confirm Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Confirm Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>

// 					<GenderCheckbox />

// 					<a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
// 						Already have an account?
// 					</a>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default SignUp;