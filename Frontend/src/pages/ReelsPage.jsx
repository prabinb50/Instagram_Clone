import React from 'react'
import { Camera, ChevronDown, Heart, MessageCircle, MoreHorizontal, Music, Send } from 'lucide-react';

export default function ReelsPage() {

    const reels = [
        {
            id: 1,
            username: "joshiprabin1009",
            video: "https://videos.pexels.com/video-files/30379625/13019659_360_640_30fps.mp4",
            music: "srv songs"
        },
        {
            id: 2,
            username: "yangma_lama",
            video: "https://videos.pexels.com/video-files/30379625/13019659_360_640_30fps.mp4",
            music: "arijit singh songs"
        },
        {
            id: 3,
            username: "joshipooja12",
            video: "https://videos.pexels.com/video-files/30379625/13019659_360_640_30fps.mp4",
            music: "neha kakkar songs"
        },
        {
            id: 4,
            username: "joshisapna32",
            video: "https://videos.pexels.com/video-files/30379625/13019659_360_640_30fps.mp4",
            music: "sushant kc songs"
        },
    ]

    return (
        <div className=''>

            {
                reels.map((eachReels, index) => (
                    <div className='relative' key={index}>
                        <video src={eachReels.video} className='w-full' autoPlay={true} muted={true} controls={true}></video>

                        <div className='absolute top-0 flex items-center justify-between w-full text-white p-4'>
                            <div className='flex items-center '>
                                <p className='text-2xl font-semibold'>Reels</p>
                                <ChevronDown size={28} />
                            </div>

                            <Camera size={28}></Camera>
                        </div>

                        <div className='absolute bottom-12 flex justify-between items-end w-full text-white p-4'>

                            <div className='flex items-center gap-2'>
                                <img src="./profilepage_logo.jpg" alt="" className='rounded-full h-12 w-12 object-cover' />

                                <div>
                                    <p className='sm'>{eachReels.username}</p>
                                    <p className='xs flex items-center gap-1'><Music size={10}></Music>{eachReels.music}</p>
                                </div>
                            </div>

                            <div className='space-y-6'>
                                <Heart size={28}></Heart>
                                <MessageCircle size={28}></MessageCircle>
                                <Send size={28}></Send>
                                <MoreHorizontal size={28}></MoreHorizontal>
                                <Music size={28}></Music>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
