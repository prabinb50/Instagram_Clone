import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { LoaderCircle } from 'lucide-react';

export default function PostCreateCard() {
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setIsLoading(true);
            const formData = new FormData();
            formData.append('caption', caption);
            formData.append('postPicture', image);

            const response = await axios.post('http://localhost:3000/posts', formData);
            setIsLoading(false);
            toast.success("Post created successfully");
            setCaption('');
            setImage(null);
        } catch (error) {
            setIsLoading(false);
            console.log("Error in creating post: ", error);
            toast.error("Failed to create post");
        }
    }

    return (
        <form className='border border-gray-300 rounded-md p-4 space-y-4 shadow-md' onSubmit={handleSubmit}>
            <h1 className='text-2xl font-bold text-center'>Create New Post</h1>

            <div className='flex flex-col gap-2'>
                <label htmlFor="post-image" className='text-lg font-medium'>Post Caption</label>
                <textarea name="post-image" id="post-image" placeholder='Write a caption....' className='border border-gray-300 rounded-md p-2 outline-blue-200' value={caption} onChange={(e) => setCaption(e.target.value)}></textarea>
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="post-picture" className='text-lg font-medium'>Post Picture</label>
                <input type="file" id="post-picture" name="post-picture" className='border border-gray-300 rounded-md p-2 outline-blue-200' onChange={(e) => setImage(e.target.files[0])}></input>
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
