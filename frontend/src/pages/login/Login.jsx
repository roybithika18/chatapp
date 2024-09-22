import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { User, Lock, Moon, Sun } from 'lucide-react';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    const { loading, login } = useLogin();

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    };

    return (
        <div className={`flex items-center justify-center min-h-screen bg-gradient-to-r ${darkMode ? 'from-gray-900 via-purple-900 to-violet-900' : 'from-blue-100 via-purple-100 to-pink-100'} transition-colors duration-500`}>
            <div className={`w-full max-w-md p-8 space-y-8 ${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-white bg-opacity-50'} backdrop-blur-md rounded-xl shadow-lg transition-colors duration-500`}>
                <div className="text-center">
                    <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        Welcome to <span className={`${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>ChatApp</span>
                    </h1>
                    <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Please sign in to your account</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <User className={`absolute top-3 left-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} size={20} />
                        <input
                            type='text'
                            placeholder='Username'
                            className={`w-full pl-10 pr-4 py-2 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'} border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300`}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="relative">
                        <Lock className={`absolute top-3 left-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} size={20} />
                        <input
                            type='password'
                            placeholder='Password'
                            className={`w-full pl-10 pr-4 py-2 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'} border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button 
                        className={`w-full px-4 py-2 text-white font-semibold ${darkMode ? 'bg-purple-700 hover:bg-purple-800' : 'bg-purple-600 hover:bg-purple-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors duration-300`}
                        disabled={loading}
                    >
                        {loading ? <span className='loading loading-spinner'></span> : "Sign In"}
                    </button>
                </form>

                <div className="text-center">
                    <Link to='/signup' className={`text-sm ${darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'}`}>
                        Don't have an account? Sign up
                    </Link>
                </div>

                <div className="absolute top-4 right-4">
                    <button 
                        onClick={() => setDarkMode(!darkMode)}
                        className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-800'} transition-colors duration-300`}
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
// STARTER CODE FOR THIS FILE
// const Login = () => {
// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Login
// 					<span className='text-blue-500'> ChatApp</span>
// 				</h1>

// 				<form>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
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
// 					<a href='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
// 						{"Don't"} have an account?
// 					</a>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2'>Login</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default Login;