import React from 'react';
import {Link} from "react-router-dom";
import './Heder.css'

const Header = () => {
    return (
        <div className={'header'}>
            <Link className={'home_link'} to={'/'}>Home</Link>
            <Link className={'todo_link'} to='/todos'>Todos</Link>
            <Link className={'albums_link'} to={'/albums'}>Albums</Link>
            <Link className={'comments_link'} to={'/comments'}>Comments</Link>
        </div>
    );
};

export default Header;