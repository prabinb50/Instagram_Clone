import { Bookmark, Heart, MessageCircle, MoreHorizontal, Share } from 'lucide-react'
import React from 'react'

export default function NewsFeedSection() {

    const posts = [
        {
            profilePicture: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&",
            username: "joshiprabin1006",
            postPicture: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repudiandae porro sequi autem repellat velit sit quisquam modi aut ut."
        },
        {
            profilePicture: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&",
            username: "yangma_lama",
            postPicture: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repudiandae porro sequi autem repellat velit sit quisquam modi aut ut."
        },
        {
            profilePicture: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&",
            username: "joshipooja11",
            postPicture: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repudiandae porro sequi autem repellat velit sit quisquam modi aut ut."
        },
        {
            profilePicture: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&",
            username: "joshisapna123",
            postPicture: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repudiandae porro sequi autem repellat velit sit quisquam modi aut ut."
        },
        {
            profilePicture: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&",
            username: "pantkalapna435",
            postPicture: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repudiandae porro sequi autem repellat velit sit quisquam modi aut ut."
        }
    ]
    return (
        <div className='mt-8 space-y-8'>
            {
                posts.map((eachPost, index) => (
                    <div className='space-y-2' key={index}>
                        <div className='flex items-center justify-between cursor-pointer'>
                            {/* single post */}
                            <div className='flex gap-2 items-center'>
                                <img src={eachPost.profilePicture} alt="" className='h-12 w-12 object-cover rounded-full' />
                                <p className='font-semibold text-sm'>{eachPost.username} <span className='text-sm opacity-50 font-semibold'>10 mins ago</span></p>
                            </div>
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
