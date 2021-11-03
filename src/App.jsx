import React from 'react';
import { Playlists } from './components/Playlists';
import {FeaturedArticle} from './components/FeaturedArticle/index'
import { Header } from './layout/Header'

function App() {
    return (
        <>
            <Header />
            <h1>Full of Vibes Playlist ♫</h1>
            
            
            
            <Playlists />
           
           <div className="footer">
                <p>Olu & Zerh</p>
           </div>

        
        </>
    )
};

export default App;