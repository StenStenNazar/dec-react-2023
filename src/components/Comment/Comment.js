import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import './Comment.css'


const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment

    return (
        <div className={'comment'}>
            <li><b>postId:</b>{postId}</li>
            <li><b>id:</b>{id}</li>
            <li><b>name:</b>{name}</li>
            <li><b>email:</b>{email}</li>
            <li><b>body:</b>{body}</li>
            <Link to={`${postId}`}><button>this post</button></Link>
        </div>
    );
};

export default Comment;