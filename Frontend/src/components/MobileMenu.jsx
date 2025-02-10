import { Film, Home, Search, SquarePlus, User } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

export default function MobileMenu() {
    return (
        <div className='fixed bottom-0 bg-gray-50 w-full border-t border-gray-300 p-4 block md:hidden'>
            <div className='flex justify-between items-center'>
                <NavLink to={"/"}>
                    <Home></Home>
                </NavLink>

                <NavLink to={"/"}>
                    <Search></Search>
                </NavLink>

                <NavLink to={"/create"}>
                    <SquarePlus></SquarePlus>
                </NavLink>

                <NavLink to={"/reels"}>
                    <Film></Film>
                </NavLink>

                <NavLink to={"/profile"}>
                    <User></User>
                </NavLink>
            </div>
        </div>
    )
}
