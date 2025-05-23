import { Bookmark, Eye, Heart, MessageCircle, MoreHorizontal, Share, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router';

export default function NewsFeedSection() {

    // state to store the posts
    const [posts, setPosts] = useState(null);

    // fetch the posts from the backend
    const fetchAllPosts = async () => {
        try {
            const response = await axios.get("http://localhost:3000/posts", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("myToken")}`,
                },
            });
            setPosts(response.data.data);
            console.log(response, "This is the response from the backend");
        } catch (error) {
            console.log("Something went wrong while fetching the posts", error);
        }
    }

    // call the fetchAllPosts function
    useEffect(() => {
        fetchAllPosts();
    }, []);

    const deletePost = async (_id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/posts/${_id}`);
            fetchAllPosts();
        } catch (error) {
            console.log("Something went wrong while deleting the post", error);
        }
    }

    // return the posts
    return (
        <div className='mt-8 space-y-8 px-4 lg:px-20'>
            {
                posts?.map((eachPost, index) => (
                    <div className='space-y-2' key={index}>
                        <div className='flex items-center justify-between cursor-pointer'>
                            {/* single post */}
                            <div className='flex gap-2 items-center'>
                                {/* <img src={eachPost.postPicture} alt="" className='h-12 w-12 object-cover rounded-full' /> */}
                                <div className='h-12 w-12 rounded-full bg-gray-400'></div>
                                <p>{eachPost.caption} <span className='text-sm opacity-50 font-semibold'>{eachPost.createdAt}</span></p>
                            </div>
                            <Link to={`/view-post/${eachPost._id}`} >
                                <Eye></Eye>
                            </Link>
                            <Trash onClick={() => deletePost(eachPost._id)}></Trash>
                            <MoreHorizontal></MoreHorizontal>
                        </div>

                        <img src={eachPost.postPicture} alt="" className='h-[70vh] w-full object-cover rounded-sm cursor-pointer' />

                        <div className='flex items-center justify-between cursor-pointer ' >
                            <div className='flex gap-4'>
                                <Heart className='hover:text-gray-500'></Heart>
                                <MessageCircle className='hover:text-gray-500'></MessageCircle>
                                <Share className='hover:text-gray-500'></Share>
                            </div>

                            <Bookmark className='hover:text-gray-500'></Bookmark>
                        </div>

                        <p className='text-sm'><span className='font-semibold text-sm cursor-pointer'>{eachPost.username}</span> {eachPost.caption}</p>
                        <hr className='opacity-10' />
                    </div>
                ))
            }
        </div >
    )
}
