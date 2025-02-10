import React from 'react'
import { AtSign, Compass, Film, House, Menu, MessageCircleMore, User } from 'lucide-react';
import { Search } from 'lucide-react';
import { Bell } from 'lucide-react';
import { SquarePlus } from 'lucide-react';
import { NavLink } from 'react-router';

export default function LeftSide() {

    const linksTops = [
        {
            icon: <House />,
            title: "Home",
            path: "/"
        },
        {
            icon: <Search />,
            title: "Search",
            path: "/"
        },
        {
            icon: <Compass></Compass>,
            title: "Explore",
            path: "/explore"
        },
        {
            icon: <Film></Film>,
            title: "Reels",
            path: "/reels"
        },
        {
            icon: <MessageCircleMore></MessageCircleMore>,
            title: "Messages",
            path: "/messages"
        },
        {
            icon: <Bell />,
            title: "Notifications",
            path: "/notifications"
        },
        {
            icon: <SquarePlus />,
            title: "Create",
            path: "/create"
        },
        {
            icon: <User></User>,
            title: "Profile",
            path: "/profile"
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
        <div className='bg-gray-50 px-4 pt-10 '>
            {/* first child */}
            <p className='cursor-pointer px-2'>
                <img src="./insta.png" alt="instagrma_logo" className='w-25 object-cover' />
            </p>

            {/* second child */}
            <div className='flex flex-col h-[90vh] justify-between'>
                {/* upper child */}
                <div className='space-y-3 mt-8 text-sm'>
                    {
                        linksTops.map((eachItem, index) => (
                            <NavLink to={eachItem.path} className='flex items-center gap-2 py-2 px-2 hover:bg-gray-200 cursor-pointer rounded-md' key={index}>
                                {eachItem.icon}
                                <p>{eachItem.title}</p>
                            </NavLink>
                        ))
                    }
                </div>

                {/* lower child */}
                <div className='text-sm space-y-3 '>
                    {
                        linksBottoms.map((eachItem, index) => (
                            <div className='flex items-center gap-2 py-2 hover:bg-gray-200 cursor-pointer rounded-md' key={index}>
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
