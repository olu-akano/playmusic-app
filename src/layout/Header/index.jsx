import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css'

export const Header = () => {
    return(
        <nav>
            <Link ClassName='Navbar' exact to='/'>Home</Link>
            <NavLink ClassName='Navbar' to='https://www.youtube.com/watch?v=eldeaIAv_wE'>Song of the Day</NavLink>
            <NavLink ClassName='Navbar' to='https://open.spotify.com/playlist/37i9dQZF1DXan38dNVDdl4'>Playlist</NavLink>
        </nav>
    )
};