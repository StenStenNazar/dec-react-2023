import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import './CommentsPosts.css'

const CommentsPosts = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        postsService.getById(id).then(value => setPost(value))
    }, [id])

    return (
        <div className={'wrapper'}>
            {post &&
                <div className={'comments_post'}>
                    <h1>Comment's post</h1>
                    <li><b>id:</b>{post.id}</li>
                    <li><b>userId:</b>{post.userId}</li>
                    <li><b>title:</b>{post.title}</li>
                    <li><b>body:</b>{post.body}</li>
                </div>}
        </div>
    );
};

export default CommentsPosts;