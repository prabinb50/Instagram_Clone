import axios from 'axios';
import { LoaderCircle } from 'lucide-react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

export default function StoryCreateCard() {
    const [userFullName, setUserFullName] = useState('');
    const [image, setImage] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setIsLoading(true);
            const formData = new FormData();
            formData.append('userFullName', userFullName);
            formData.append('storyPicture', image);

            const response = await axios.post('http://localhost:3000/stories', formData);
            setIsLoading(false);
            toast.success("Stry created successfully");
            setUserFullName('');
            setImage(null);
        } catch (error) {
            setIsLoading(false);
            console.log("Error in creating story: ", error);
            toast.error("Failed to create story");
        }
    }

    return (
        <form className='border border-gray-300 rounded-md p-4 space-y-4 shadow-md' onSubmit={handleSubmit}>
            <h1 className='text-2xl font-bold text-center'>Create New Story</h1>

            <div className='flex flex-col gap-2'>
                <label htmlFor="story-user-full-name" className='text-lg font-medium'>User Full Name</label>
                <input name="story-user-full-name" id="story-user-full-name" placeholder="Enter user full name" className='border border-gray-300 rounded-md p-2 outline-blue-200' value={userFullName} onChange={(e) => setUserFullName(e.target.value)}></input>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="story-picture" className='text-lg font-medium'>Story Picture</label>
                <input type="file" id="story-picture" name="story-picture" className='border border-gray-300 rounded-md p-2 outline-blue-200' onChange={(e) => setImage(e.target.files[0])}></input>
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
