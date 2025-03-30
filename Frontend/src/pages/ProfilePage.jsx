import React from 'react'
import LeftSide from '../components/LeftSide'
import { Bookmark, CircleEllipsis, Grid3x3, Heart, MessageCircle, Tag } from 'lucide-react';
import MobileProfileSection from '../components/MobileProfileSection';
import UserRegisterCard from '../components/UserRegisterCard';
import LoginCard from '../components/LoginCard';

export default function ProfilePage() {

    const highlights = [
        {
            profileImage: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            storyImage: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            username: "Travelling"
        },

        {
            profileImage: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            storyImage: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            username: "USA"
        },

        {
            profileImage: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            storyImage: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            username: "Family"
        },

        {
            profileImage: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            storyImage: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            username: "Concert"
        },

        {
            profileImage: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            storyImage: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            username: "IIMS Frns"
        },
        {
            profileImage: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            storyImage: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            username: "Mustang"
        },
        {
            profileImage: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            storyImage: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            username: "Pokhara"
        },
        {
            profileImage: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            storyImage: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            username: "Favone"
        },
        {
            profileImage: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            storyImage: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            username: "Favone"
        },
        {
            profileImage: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            storyImage: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            username: "Favone"
        },
    ]

    const postPictures = [
        {
            image: "./profilepage_logo.jpg"
        },
        {
            image: "./profilepage_logo.jpg"
        },
        {
            image: "./profilepage_logo.jpg"
        },
        {
            image: "./profilepage_logo.jpg"
        },
        {
            image: "./profilepage_logo.jpg"
        },
        {
            image: "./profilepage_logo.jpg"
        },
    ]

    return (
        <div className='p-4 sm:p-10 overflow-y-auto h-screen w-full sm:w-10/12 '>
            {/* Mobile Profile Section (visible only on small devices) */}
            <div className="sm:hidden">
                <MobileProfileSection />
            </div>

            {/* Desktop Profile Section (hidden on small devices) */}
            <div className="hidden sm:block ">
                <div className='flex px-15 space-x-20'>
                    <img src="./profilepage_logo.jpg" alt="" className='w-35 h-35 rounded-full object-cover mt-5' />

                    <div className='space-y-4'>
                        <div className='flex gap-4 items-center cursor-pointer'>
                            <p className='text-lg'>joshi_prabin1006</p>
                            <p className='rounded-md bg-gray-200 px-4 p-1 hover:bg-gray-300 font-semibold text-sm'>Edit profile</p>
                            <p className='rounded-md bg-gray-200 px-4 p-1 hover:bg-gray-300 font-semibold text-sm'>View archive</p>
                            <CircleEllipsis />
                        </div>

                        <div className='flex gap-10'>
                            <p><span className='font-semibold'>6</span> posts</p>
                            <p className='cursor-pointer'><span className='font-semibold'>346</span> followers</p>
                            <p className='cursor-pointer'><span className='font-semibold'>240</span> following</p>
                        </div>

                        <div className='space-y-1'>
                            <p className='font-semibold'>Prabin Joshi</p>
                            <p className='rounded-full bg-gray-200 text-sm mr-110 p-1 px-2 cursor-pointer hover:bg-gray-300'>@joshi_prabin1006</p>
                            <p className='text-sm cursor-pointer'>Libra♎ Oct 06🎂</p>
                            <p className='text-sm cursor-pointer'>It's coOl😎tO bE diFfereNt aNd jUst bE wHo yOu aRe😊aNd sHock peoPle iN a goOd waY🤟</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* right child: second */}
            <div className="mt-2 md:mt-10 overflow-x-auto ">
                <div className="flex gap-10 px-10 whitespace-nowrap">
                    {highlights.map((eachHighlight, index) => (
                        <div key={index} className="shrink-0">
                            <img src={eachHighlight.profileImage} alt="" className="rounded-full object-cover h-19 w-19 border-2 border-red-500 p-0.5" />
                            <p className="text-sm text-center font-semibold">{eachHighlight.username.slice(0, 10)}</p>
                        </div>
                    ))}
                </div>
            </div>

            <hr className='text-gray-200 mt-10 hidden sm:block' />

            {/* right child: third */}
            <div className='hidden sm:block'>
                <div className='flex items-center justify-center gap-8 mt-5 text-sm font-semibold opacity-70 cursor-pointer'>
                    <p className='flex gap-2 items-center'><span><Grid3x3 size={15} /></span>POSTS</p>
                    <p className='flex gap-2 items-center'><span><Bookmark size={15} /></span>SAVED</p>
                    <p className='flex gap-2 items-center'><span><Tag size={15} /></span>TAGGED</p>
                </div>
            </div>

            {/* right child: fourth */}
            <div className='grid grid-cols-3 gap-2 mt-5 cursor-pointer'>
                {
                    postPictures.map((eachPost, index) => (
                        <div key={index} className="relative group cursor-pointer">
                            <img src={eachPost.image} alt="" className="w-full h-full object-cover" />
                            <div className="absolute inset-0  group-hover:bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <Heart className="text-white w-8 h-8" />
                                <MessageCircle className="text-white w-8 h-8" />
                            </div>
                        </div>
                    ))
                }
            </div>

            <UserRegisterCard />
            <LoginCard></LoginCard>
        </div>

    )
}
