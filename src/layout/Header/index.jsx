import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css'

export const Header = () => {
    return(
        <nav>
            <NavLink exact to='/'>Home</NavLink>
            <a href='https://www.youtube.com/watch?v=eldeaIAv_wE'>Song of the Day</a>
            <a  href='https://open.spotify.com/playlist/37i9dQZF1DXan38dNVDdl4'>Playlist</a>
        </nav>
    )
};