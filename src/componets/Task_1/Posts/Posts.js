import React, {useState, useEffect} from 'react';

import Post from '../Post/Post'
import './Posts.css'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts([...value]))
    }, [])
    const getFullInfo = (info) => {
        setPost(info)
    }

    return (
        <div className={'wrapper'}>
            <div>
                <h1>Posts</h1>{posts && posts.map(post => <Post key={post.id} post={post} getFullInfo={getFullInfo}/>)}
            </div>
            {post &&
                <div className={'full_info'}>
                    <h3>Details:</h3>
                    <li>{post.id}</li>
                    <li>{post.userId}</li>
                    <li>{post.title}</li>
                    <li>{post.body}</li>
                </div>}
        </div>
    );
};

export default Posts;