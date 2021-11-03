import React, {useEffect, useState} from 'react';
import axios from 'axios';


export const LyricButton = () => {
    const [showLyrics, setShowLyrics] = useState();

    const toggleLyrics = () => setShowLyrics(prevState => !prevState)
    
    useEffect(() => {
        async function fetchLyrics() {
            try {
                let options = { headers: {'Accept': 'application/json'} }
               let { data } = await axios.get(`https://api.lyrics.ovh/v1/${name}/${info}`, options)
               console.log(data)
               setShowLyrics(data.lyrics)
            } catch (err) {
                console.warn(err);
                setShowLyrics("We can't find the lyrics for your song")
            }
        }

        fetchLyrics();
    }, [])

    return (
        <>
        <button>Lyrics</button>
        { setShowLyrics ?
            <>
            <div>{setShowLyrics}</div>
            </>
        : <h3>Lyrics coming right up!</h3>
        }
        </>
    )

}