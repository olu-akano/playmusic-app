import React from 'react';
import { Playlists } from './components/Playlists';
import {FeaturedArticle} from './components/FeaturedArticle/index'
import { Header } from './layout/Header'
import { useSelector } from 'react-redux';
import { LyricButton } from './components/LyricButton';

function App() {
    const name = useSelector((store) => store.name);
    const genre = useSelector((store) => store.genre);
    const intro = useSelector((store) => store.intro);
    
    return (
        <>
            <Header />
            <h1>Full of Vibes Playlist ♫</h1>
            <h2>{name} is the {genre}, his best song is {intro}</h2>
            <Playlists />
           
           <div className="footer">
                <p>Olu & Zerh</p>
           </div>
        </>
    )
};

export default App;