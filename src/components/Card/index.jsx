import React from 'react';
import '../Card/style.css';
import {LikeButton} from '../LikeButton/index'

export const Card = ({ size, name, genre, intro }) => {
    return (
        <>
            <div className={`card ${size}`}>
                <h3>{name}</h3>
                <em>{genre}</em>
                <h4>{intro}</h4>
                <LikeButton/>
            </div>
        </>
    )
}