import React from 'react';
import {Playlist} from './Playlist'
import { Card } from './Card';

const musicList = [
    { name: "Davido", genre: "Afrobeats", intro: "Song by a popular Nigerian musician" },
    { name: "VybzKartel", genre: "Dancehall", intro: "Legend still releases bangers from jail" },
    { name: "Nailah Blackman", genre: "Soca", intro: "23-year old artist in Trinidad & Tobago" },
    { name: "Kes", genre: "Soca", intro: "Upbeat band, best song is Hello" }
];

export const Playlists = () => {
    const renderPlaylists = () => musicList.map((m, i) => <Card key ={i} name={m.name} genre={m.genre} intro={m.intro}/>)

    return (
        <section id="playlists">
            <h2>Choose an artist</h2>
            <ol>
                { renderPlaylists() }
            </ol>
        </section>
    )
}