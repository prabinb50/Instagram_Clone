import { ChevronDown, Heart, MessageCircle } from 'lucide-react'
import React from 'react'

export default function MobileNavbar() {
    return (
        <div className='block md:hidden'>
            <div className='flex items-center justify-between p-4'>
                <div className='flex items-center'>
                    <img src="./insta.png" alt="logo" className='w-32' />
                    <ChevronDown size={30}></ChevronDown>
                </div>

                <div className='flex items-center gap-8'>
                    <Heart size={30}></Heart>
                    <MessageCircle size={30}></MessageCircle>
                </div>
            </div>
        </div>
    )
}
