import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

export default function LoginCard() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // console.log(email, password);

    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post("http://localhost:3000/users/login", {
                email: email,
                password: password
            });
            console.log(response);
            toast.success(response?.data?.message);
            localStorage.setItem("myToken", response?.data?.token);
            setEmail('');
            setPassword('');
        } catch (error) {
            console.log("Error in login", error);
            toast.error("Something went wrong, please try again later");
        }
    }

    return (
        <form className='border border-gray-200 rounded-md p-4  mt-12 space-y-4' onSubmit={handleLogin}>
            <div className='flex flex-col gap-1'>
                <label htmlFor='email'>Email</label>
                <input type="email" id='email' placeholder='Enter your email' className='border border-gray-200 px-2 py-1.5 rounded-md outline-blue-400' value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor='password'>Password</label>
                <input type="password" id='password' placeholder='******' className='border border-gray-200 px-2 py-1.5 rounded-md outline-blue-400' value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type='submit' className='bg-blue-500 text-white px-8 py-2 rounded-md'>Login</button>
            </div>
        </form>
    )
}
