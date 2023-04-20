import React from 'react';
import {useState, useEffect} from "react";

import {albumsService} from "../../services/albums.service";
import Album from "../Album/Album";
import './Albums.css'

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll().then(value => setAlbums([...value]))
    }, [])

    return (
        <div>
            <div className={'albums_text'}><h1>Albums</h1></div>
            <div className={'albums'}>
                {albums && albums.map(album => <Album key={album.id} album={album}/>)}
            </div>
        </div>
    );
};
export default Albums;