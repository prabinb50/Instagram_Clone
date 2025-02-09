import { Film, Home, Search, SquarePlus, User } from 'lucide-react'
import React from 'react'

export default function MobileMenu() {
    return (
        <div className='fixed bottom-0 bg-gray-50 w-full border-t border-gray-300 p-4 block md:hidden'>
            <div className='flex justify-between items-center'>
                <Home></Home>
                <Search></Search>
                <SquarePlus></SquarePlus>
                <Film></Film>
                <User></User>
            </div>
        </div>
    )
}
