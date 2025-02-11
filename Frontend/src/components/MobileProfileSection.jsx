import { Lock, Menu, SquarePlus } from 'lucide-react';
import React from 'react';

export default function MobileProfileSection() {
    return (
        <div>
            {/* first child */}
            <div className='flex items-center justify-between cursor-pointer'>
                <p className='flex items-center gap-2 font-semibold'><span><Lock size={15} /></span> joshi_prabin1006</p>

                <div className='flex items-center gap-6'>
                    <SquarePlus />
                    <Menu />
                </div>
            </div>

            {/* second child */}
            <div className='flex items-center gap-8 mt-5'>
                <img src="./profilepage_logo.jpg" alt="" className='w-20 h-20 rounded-full object-cover' />

                <div className='text-sm'>
                    <p className='font-semibold'>Prabin Joshi</p>

                    <div className='flex gap-8 mt-2.5'>
                        <p className='flex flex-col'><span className='font-semibold'>6</span> posts</p>
                        <p className='cursor-pointer flex flex-col'><span className='font-semibold'>346</span> followers</p>
                        <p className='cursor-pointer flex flex-col'><span className='font-semibold'>240</span> following</p>
                    </div>
                </div>
            </div>

            {/* third child */}
            <p className='text-sm cursor-pointer mt-4'>Libra♎ Oct 06🎂</p>
            <p className='text-sm cursor-pointer'>It's coOl😎 tO bE diFfereNt aNd jUst bE wHo yOu aRe😊aNd sHock peoPle iN a goOd waY🤟</p>
            <p className='mt-4 font-semibold text-sm'>@joshi_prabin1006</p>

            <div className='mt-4 flex items-center justify-between mb-5'>
                <p className='rounded-md bg-gray-200 px-4 p-1 hover:bg-gray-300 font-semibold text-sm'>Edit profile</p>
                <p className='rounded-md bg-gray-200 px-4 p-1 hover:bg-gray-300 font-semibold text-sm'>Share</p>
            </div>
        </div>
    );
}