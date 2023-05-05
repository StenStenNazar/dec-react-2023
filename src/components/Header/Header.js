import React from 'react';
import {Link} from "react-router-dom";

import './Header.css'

const Header = () => {
    return (
        <div className={'header'}>
            <Link to={'cars'}>Cars</Link>
            <Link to={'/'}>Users</Link>
            <Link to={'comments'}>Comments</Link>
        </div>
    );
};

export{ Header} ;