import axios from 'axios';
import { LoaderCircle } from 'lucide-react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

export default function StoryCreateCard() {
    // const [userFullName, setUserFullName] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setIsLoading(true);
            const formData = new FormData();
            formData.append('fullName', fullName);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('profilePicture', image);

            const response = await axios.post('http://localhost:3000/users/register', formData);
            setIsLoading(false);
            toast.success("User created successfully");
            setFullName('');
            setEmail('');
            setPassword('');
            setImage(null);
        } catch (error) {
            setIsLoading(false);
            console.log("Error in creating user: ", error);
            toast.error("Failed to create user");
        }
    }

    return (
        <form className='border border-gray-300 rounded-md p-4 space-y-4 shadow-md' onSubmit={handleSubmit}>
            <h1 className='text-2xl font-bold text-center'>Register New User</h1>

            <div className='flex flex-col gap-2'>
                <label htmlFor="fullName" className='text-lg font-medium'>User Full Name</label>
                <input name="fullName" id="fullName" placeholder="Enter user full name" className='border border-gray-300 rounded-md p-2 outline-blue-200' value={fullName} onChange={(e) => setFullName(e.target.value)}></input>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="email" className='text-lg font-medium'>Email</label>
                <input name="email" id="email" placeholder="Enter email" className='border border-gray-300 rounded-md p-2 outline-blue-200' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="password" className='text-lg font-medium'>Password</label>
                <input name="password" id="password" placeholder="Enter password" className='border border-gray-300 rounded-md p-2 outline-blue-200' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="profile-picture" className='text-lg font-medium'>Profile Picture</label>
                <input type="file" id="profile-picture" name="profile-picture" className='border border-gray-300 rounded-md p-2 outline-blue-200' onChange={(e) => setImage(e.target.files[0])}></input>
            </div>

            <button
                disabled={isLoading}
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-1">
                {isLoading && <LoaderCircle
                    size={16}
                    className=" animate-spin"
                />}
                Create Post
            </button>
        </form >
    )
}
