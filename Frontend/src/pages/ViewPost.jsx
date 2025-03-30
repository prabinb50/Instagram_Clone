import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

export default function ViewPost() {

    // get the postId from the url
    const location = useLocation();
    // console.log(location.pathname, "This is the location");
    // console.log(location.pathname.split('/'), "This is the id");
    // console.log(location.pathname.split('/')[2], "This is the id");
    const postId = location.pathname.split('/')[2];

    const [post, setPost] = useState(null);

    const fetchSinglePost = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/posts/${postId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("myToken")}`,
                },
            });
            console.log(response, "This is the response from the backend");
            setPost(response.data.data);
        } catch (error) {
            console.log("Something went wrong while fetching the single post", error);
        }
    }

    useEffect(() => {
        fetchSinglePost();
    }, [postId]);

    return (
        <div>
            <p>
                {post?.caption}
                <img src={post?.postPicture} alt="" />
            </p>
        </div>
    )
}
