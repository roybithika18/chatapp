import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import MainPage from './pages/MainPage';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import About from "./pages/about/About";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
    const { authUser } = useAuthContext();

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/about' element={<About />} />
                <Route path='/home' element={authUser ? <Home /> : <Navigate to='/login' />} />
                <Route path='/login' element={authUser ? <Navigate to='/home' /> : <Login />} />
                <Route path='/signup' element={authUser ? <Navigate to='/home' /> : <SignUp />} />
            </Routes>
            <Toaster />
        </>
    );
}

export default App;