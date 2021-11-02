import React from 'react'

export const Playlist = ({name, genre, intro}) => {
    return (
        <li>
            <strong>{name}</strong> sings {genre}. Quick fact: <em> {intro} </em>
        </li>
    )
}