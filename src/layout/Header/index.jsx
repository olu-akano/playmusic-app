import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css'

export const Header = () => {
    return(
        <nav>
            <Link exact to='/'>Home</Link>
            <Link to='https://www.youtube.com/watch?v=eldeaIAv_wE'>Song of the Day</Link>
            <Link to='https://open.spotify.com/playlist/37i9dQZF1DXan38dNVDdl4'>Playlist</Link>
        </nav>
    )
};