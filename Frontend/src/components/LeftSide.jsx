import React from 'react'
import { AtSign, Compass, Film, House, Menu, MessageCircleMore, User } from 'lucide-react';
import { Search } from 'lucide-react';
import { Bell } from 'lucide-react';
import { SquarePlus } from 'lucide-react';

export default function LeftSide() {

    const linksTops = [
        {
            icon: <House />,
            title: "Home",
        },
        {
            icon: <Search />,
            title: "Search",
        },
        {
            icon: <Compass></Compass>,
            title: "Explore",
        },
        {
            icon: <Film></Film>,
            title: "Reels",
        },
        {
            icon: <MessageCircleMore></MessageCircleMore>,
            title: "Message",
        },
        {
            icon: <Bell />,
            title: "Notification",
        },
        {
            icon: <SquarePlus />,
            title: "Create",
        },
        {
            icon: <User></User>,
            title: "Profile",
        }
    ]

    const linksBottoms = [
        {
            icon: <AtSign></AtSign>,
            title: "Threads"
        },
        {
            icon: <Menu></Menu>,
            title: "More"
        },
    ]

    return (
        <div className='bg-gray-50 px-4'>
            {/* first child */}
            <p>Instagram</p>

            {/* second child */}
            <div className='flex flex-col h-[96vh] justify-between'>
                {/* upper child */}
                <div>
                    {
                        linksTops.map((eachItem, index) => (
                            <div className='flex items-center gap-2 font-semibold py-2 hover:bg-gray-200 cursor-pointer px-2 rounded-md opacity-80' key={index}>
                                {eachItem.icon}
                                <p>{eachItem.title}</p>
                            </div>
                        ))
                    }
                </div>

                {/* lower child */}
                <div>
                    {
                        linksBottoms.map((eachItem, index) => (
                            <div className='flex items-center gap-2 font-semibold py-2 hover:bg-gray-200 cursor-pointer px-2 rounded-md opacity-80' key={index}>
                                {eachItem.icon}
                                <p>{eachItem.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
