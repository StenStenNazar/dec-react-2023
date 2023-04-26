import React from 'react';
import {Link} from "react-router-dom";

import './Header.css'

const Header = () => {
    return (
        <div className={'header'}>
            <Link  className={'comments_text'} to={'cats_dogs'}>Cats&Dogs</Link>
            <Link  className={'post_text'} to={'post'}>Posts</Link>
            <Link  className={'comments_text'} to={'comments'}>Comments</Link>
        </div>
    );
};

export default Header;