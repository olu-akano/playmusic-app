import React from 'react';
import { Playlists } from './components/Playlists';
import {FeaturedArticle} from './components/FeaturedArticle/index'
import { Header } from './layout/Header'
import { useSelector } from 'react-redux';

function App() {
    const username = useSelector((store) => store.username);
    const location = useSelector((store) => store.location);

    return (
        <>
            <Header />
            <h1>Full of Vibes Playlist ♫</h1>
            <p className="introMsg">{username} is in {location}</p>
            
            
            
            <Playlists />
           
           <div className="footer">
                <p>Olu & Zerh</p>
           </div>
        </>
    )
};

export default App;