import React from 'react';

const UserPost = ({post}) => {
    const {userId, title, body, id} = post
    return (
        <div className={'user_post'}>
            <li>id:{id}</li>
            <li><b>userId:</b>{userId}</li>
            <li><b>title:</b>{title}</li>
            <li><b>body:</b>{body}</li>
        </div>
    );
};

export default UserPost;