import React, { useState } from 'react';
import { LyricButton } from '../LyricButton';

export const Lyrics = ({ name, intro }) => {
    const [ showLyrics, setShowLyrics ] = useState(false);
    const toggleLyrics = () => setShowLyrics(prevState => !prevState);

    return (
        <div aria-label='lyrics'>
            { showLyrics ? <LyricButton close={toggleLyrics} name={name} intro ={intro}/> : <button onClick={toggleLyrics}>Get Lyrics!</button>}
        </div>
    )
}