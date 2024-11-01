import React from 'react'
import { authenticate } from '../context/contextProvider'

export const Home = () => {

    const {logout} = authenticate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await logout();
    };

    return (
        <>
        <div className='min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 w-full flex items-center justify-center flex-col gap-6 p-8'>
    <div className='flex flex-col items-center gap-4'>
        <h1 className='text-white font-extrabold text-3xl tracking-wide'>
            <span className='text-green-400'>Welcome</span> to Home
        </h1>
        <i className="fa-brands fa-react text-8xl text-blue-400 animate-spin-slow"></i>
    </div>
    <button
        className='text-white font-semibold bg-blue-500 px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200 hover:bg-blue-600 focus:outline-none'
        onClick={handleSubmit}
    >
        Logout
    </button>
</div>
        </>
    )
}
