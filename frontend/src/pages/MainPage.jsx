import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-purple-400 to-blue-500 flex flex-col justify-center items-center p-4 sm:p-8 md:p-12 lg:p-16">
            <div className="text-center max-w-4xl w-full">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 text-blue">
                CHAT<span className="text-purple-900">APP</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8 md:mb-10">
                    Connect effortlessly with friends and family!
                </p>
                <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
                    <Link to="/login">
                        <button className="bg-white text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-100 transition duration-300 text-sm sm:text-base">
                            Login
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button className="bg-white text-purple-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-100 transition duration-300 text-sm sm:text-base">
                            Sign Up
                        </button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default MainPage;
