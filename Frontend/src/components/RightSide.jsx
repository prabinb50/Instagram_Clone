import React from 'react'

export default function RightSide() {

    const people = [
        {
            profilePicture: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            username: "Prabin Joshi",
            followedBy: "Yangma Lama"
        },
        {
            profilePicture: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            username: "Prabin Joshi",
            followedBy: "Yangma Lama"
        },
        {
            profilePicture: "https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
            username: "Prabin Joshi",
            followedBy: "Yangma Lama"
        },
        {
            profilePicture: "https://images.unsplash.com/photo-1466112928291-0903b80a9466?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
            username: "Prabin Joshi",
            followedBy: "Yangma Lama"
        },
        {
            profilePicture: "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            username: "Prabin Joshi",
            followedBy: "Yangma Lama"
        },
    ]

    return (
        <div className='bg-gray-50 px-4'>
            {/* first child */}
            <div className='flex items-center justify-between font-semibold opacity-70'>
                <p>Suggested for you</p>
                <p className='text-blue-500 cursor-pointer'>See All</p>
            </div>

            {/* second child */}
            <div className='space-y-4'>
                {people.map((eachItem, index) => (
                    <div className='flex items-center justify-between gap-4' key={index}>
                        {/* second child: left  */}
                        <div className='flex gap-2'>
                            <img src={eachItem.profilePicture} alt="" height={50} width={50} className='rounded-full object-cover' />

                            <div>
                                <p className='text-lg font-semibold'>{eachItem.username}</p>
                                <p className='opacity-60'>{eachItem.followedBy}</p>
                            </div>
                        </div>

                        {/* second child: right */}
                        <div className='font-semibold text-blue-500'>Follow</div>
                    </div>
                ))}
            </div>
        </div>
    )
}


