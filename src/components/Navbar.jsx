import React from 'react';
import { GiRabbit } from 'react-icons/gi';
import { signOut } from 'firebase/auth';
import { useNavigate, Navigate } from 'react-router-dom';
import { auth } from '../config/firebase-config';
import { UserAuth } from '../config/contexts/AuthContext';

function Navbar({setIsAuth}) {

    const {user, logOut} = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <body className="bg-blue-500">
        <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
            <a className="text-3xl font-bold leading-none" href="/">
            <GiRabbit style={{color: "white", backgroundColor: "#3B82F6", borderRadius: '10%' }} />
            </a>
            <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                <li><a className="text-sm text-gray-400 hover:text-gray-500" href="/">Home</a></li>
                <li className="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </li>
                <li><a className="text-sm text-gray-400 hover:text-gray-500" href="/create">Create Post</a></li>
                <li className="text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </li>
                <li><a className="text-sm text-gray-400 hover:text-gray-500" href="/about">About</a></li>
            </ul>
            {user?.displayName ? <button onClick={handleSignOut}>Logout</button> : <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="/login">Login</a>}
            
        </nav>
    </body>

  )
}

export default Navbar
