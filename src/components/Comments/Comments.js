import React from 'react';
import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {commentsService} from "../../services/comments.service";
import Comment from "../Comment/Comment";
import './Comments.css'
const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        commentsService.getAll().then(value => setComments([...value]))
    }, [])

    return (
        <div className={'cont'}>
            <div>
                <div className={'text_comments'}><h1>Comments</h1></div>
                <div className={'comments'}>
                    {comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
                </div>
            </div>
            <div className={'outlet'}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Comments;