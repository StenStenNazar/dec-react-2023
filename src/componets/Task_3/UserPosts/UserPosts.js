import React, {useEffect, useState} from 'react';

import UserPost from '../UserPost/UserPost'

const UserPosts = ({id}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(value => value.json())
            .then(value => setPosts(value))
    }, [id])

    return (

        <div className={'user_posts'}>
            <div><h1>User's Posts</h1></div>
            <div>{posts && posts.map(post => <UserPost key={post.id} post={post}/>)}</div>
        </div>

    );
};

export default UserPosts;