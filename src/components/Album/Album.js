import React from 'react';

import './Album.css'
const Album = ({album}) => {
    const {userId, id, title} = album
    return (
        <div className={'album'}>
            <li><b>id:</b>{id}</li>
            <li><b>userId:</b>{userId}</li>
            <li><b>title:</b>{title}</li>
        </div>
    );
};
export default Album;