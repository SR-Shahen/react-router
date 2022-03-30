import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const { postid } = useParams();
    const [post, setPost] = useState({})
    useEffect(() => {
        const url = (`https://jsonplaceholder.typicode.com/posts/${postid}`)
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [postid])
    return (
        <div>
            <h1>this is post details for:{postid}</h1>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;