import React, { useEffect, useState } from 'react'
import NewsFeedSection from './NewsFeedSection'
import axios from 'axios';

export default function MiddleArea() {

    // state to store the stories
    const [stories, setStories] = useState(null);

    // state to store the fetching status
    const [isFetching, setIsFetching] = useState(false);

    // fetch the stories from the backend
    const fetchAllStories = async () => {
        try {
            setIsFetching(true);
            const response = await axios.get("http://localhost:3000/stories");
            // console.log(response.data.stories, "This is the response from the backend");
            setStories(response.data.stories);
            setIsFetching(false);
        } catch (error) {
            setIsFetching(false);
            console.log("Something went wrong while fetching the stories", error);
        }
    }

    // call the fetchAllStories function
    useEffect(() => {
        fetchAllStories();
    }, []);

    // return the stories and the news feed section
    return (
        < div className='pt-2 md:pt-5'>
            <div className='flex gap-4 overflow-x-scroll px-2 '>

                {isFetching ? (
                    Array(6).fill().map((eachItem, index) => ( //  show a five pulse loader with array of 6 elements
                        <div key={index} className='h-16 w-16 bg-gray-300 rounded-full animate-pulse'></div>
                    ))
                )
                    : (
                        <div>
                            {
                                stories?.map((eachStory, index) => (
                                    <div key={index}>
                                        <img src={eachStory.storyPicture} alt="" className='rounded-full object-cover h-16 w-16 border-2 border-red-500 p-0.5' />
                                        <p className='text-sm text-center'>{eachStory.userFullName.slice(0, 10)}</p>
                                    </div>
                                ))
                            }
                        </div>)}
            </div>

            <NewsFeedSection></NewsFeedSection>
        </div>
    )
}
