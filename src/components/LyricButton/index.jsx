import React, {useEffect, useState} from 'react';
import axios from 'axios';


export const LyricButton = ({ close, name, intro }) => {
    const [showLyrics, setShowLyrics] = useState();
  

    useEffect(() => {
        async function fetchLyrics() {
            try {
                let options = { headers: {'Accept': 'application/json'} }
                let { data } = await axios.get(`https://api.lyrics.ovh/v1/${name}/${intro}`, options)
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
        <button onClick={close} style={{cursor: "pointer"}}>Hide Lyrics</button>
        { showLyrics ?
            <>
            <div>{showLyrics}</div>
            </>
        : <h2>Lyrics coming right up!</h2>
        }
        </>
    )

}
