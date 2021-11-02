import React from 'react';
import {Playlist} from './Playlist'
import { Card } from './Card';

const musicList = [
    { name: "Davido", genre: "Afrobeats", intro: "One of the biggest afrobeats pioneers" },
    { name: "VybzKartel", genre: "Dancehall", intro: "Legend still releases bangers from jail" },
    { name: "Nailah Blackman", genre: "Soca", intro: "23-year old artist in Trinidad & Tobago" },
    { name: "Kes", genre: "Soca", intro: "Upbeat band, best song is Hello" },
    { name: "Wizkid", genre: "Afrobeats", intro: "One of the best to do it from Africa" },
    { name: "Popcaan", genre: "Dancehall", intro: "Jamaican deejay, singer and songwriter" },
    { name: "Patrice Roberts", genre: "Soca", intro: "Popular Trinidadian soca singer" },
    { name: "Burna Boy", genre: "Afrobeats", intro: "African giant" },
    { name: "Spice", genre: "Dancehall", intro: "Queen of Dancehall" },
    { name: "Beenie Man", genre: "Dancehall", intro: "Redefinded Dancehall through Djing" },
    { name: "Tiwa Savage", genre: "Afrobeats", intro: "Queen of Afrobeats" },
    { name: "Bunji Garlin", genre: "Soca", intro: " Known as the Viking of Soca" }
    
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