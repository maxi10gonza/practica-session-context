import React from 'react';
import { authenticate } from '../context/contextProvider';
import { useForm } from "react-hook-form";

export const Login = () => {
    const { loginUser } = authenticate(); // Obtén `loginUser` directamente
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const { email, password } = data;
        await loginUser(email, password); // Llama a `loginUser` con email y password
    };

    return (
        <div className='min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-gray-700 to-gray-900'>
    <form 
        onSubmit={handleSubmit(onSubmit)} 
        className='flex flex-col gap-6 p-6 rounded-lg shadow-2xl border border-gray-200 bg-white w-full max-w-md'
    >
        <h2 className='text-2xl font-extrabold text-center text-gray-800'>Iniciar Sesión</h2>
        
        <div className='flex flex-col'>
            <label className='text-gray-700 text-lg font-semibold mb-1' htmlFor="email">Correo Electrónico</label>
            <input 
                {...register("email", { 
                    required: "El correo es requerido", 
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "El correo no es válido"
                    }
                })} 
                placeholder='correo@ejemplo.com' 
                className='p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500' 
                type="text" 
                name='email' 
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className='flex flex-col'>
            <label className='text-gray-700 text-lg font-semibold mb-1' htmlFor="password">Contraseña</label>
            <input 
                {...register("password", { 
                    required: "La contraseña es requerida"
                })} 
                className='p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500' 
                type="password" 
                name='password' 
            />
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
        </div>

        <button 
            type='submit' 
            className='bg-blue-600 rounded-md p-3 font-semibold text-white hover:bg-blue-700 transition duration-200'
        >
            Iniciar Sesión
        </button>
    </form>
</div>

    );
};
