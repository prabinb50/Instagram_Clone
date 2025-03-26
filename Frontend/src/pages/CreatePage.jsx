import React from 'react'
import PostCreateCard from '../components/PostCreateCard'
import StoryCreateCard from '../components/StoryCreateCard'

export default function CreatePage() {
    return (
        <div className='px-4'>
            <PostCreateCard></PostCreateCard>
            <StoryCreateCard></StoryCreateCard>
        </div>
    )
}
