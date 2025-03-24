import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function RightSide() {

    // state to store the users
    const [users, setUsers] = useState(null);

    // state to store the fetching status
    const [isFetching, setIsFetching] = useState(false);

    // fetch the users from the backend
    const fetchUsers = async () => {
        try {
            setIsFetching(true);
            const response = await axios.get('http://localhost:3000/users');
            console.log(response.data.data, 'response');
            setUsers(response.data.data);
            setIsFetching(false);
        }
        catch (error) {
            setIsFetching(false);
            console.log("Something went wrong", error);
        }

    }

    // call the fetchUsers function
    useEffect(() => {
        fetchUsers();
    }, []);

    // const people = [
    //     {
    //         profilePicture: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    //         username: "wtf_berojgarr",
    //         followedBy: "sapna93675"
    //     },
    //     {
    //         profilePicture: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    //         username: "sapna93675",
    //         followedBy: "wtf_berojgarr"
    //     },
    //     {
    //         profilePicture: "https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    //         username: "anilnath781",
    //         followedBy: "sapna93675"
    //     },
    //     {
    //         profilePicture: "https://images.unsplash.com/photo-1466112928291-0903b80a9466?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    //         username: "yangma_lama",
    //         followedBy: "joshi_prabin1006"
    //     },
    //     {
    //         profilePicture: "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    //         username: "joshi_prabin1006",
    //         followedBy: "yangma_lama"
    //     },
    // ]

    return (
        <div className=' px-4 pt-10 text-sm '>
            {/* first child */}
            <div className='flex items-center justify-between font-semibold '>
                <p className='opacity-50'>Suggested for you</p>
                <p className='text-black cursor-pointer hover:text-gray-400'>See All</p>
            </div>

            {/* second child */}
            <div className='space-y-4 mt-5'>
                {users?.map((eachItem, index) => (
                    <div className='flex items-center justify-between' key={index}>
                        {/* second child: left  */}
                        <div className='flex gap-2'>
                            <img src={eachItem.profilePicture} alt="" height={50} width={40} className='rounded-full object-cover' />

                            <div>
                                <p className='font-semibold cursor-pointer '>{eachItem.fullName}</p>
                                <p className=' opacity-60'>Followed by Prabin Joshi</p>
                            </div>
                        </div>

                        {/* second child: right */}
                        <div className='font-semibold text-blue-500 cursor-pointer hover:text-black hover:opacity-80 '>Follow</div>
                    </div>
                ))}
            </div>
        </div>
    )
}


