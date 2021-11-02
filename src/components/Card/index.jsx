import React, {useState} from 'react';
import '../Card/style.css';
import {LikeButton} from '../LikeButton/index'

export const Card = ({ size, name, genre, intro }) => {
    const [showIntro, setshowIntro] =useState();

    const mouseEnter = () => setshowIntro(true);
    const mouseLeave = () => setshowIntro(false);

    return (
        <>
            <div className={`card ${size}`}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}>
                <h3>{name}</h3>
                <em>{genre}</em>
                <h4>{showIntro ? intro: "Hover for more..."}</h4>
                <LikeButton/>
            </div>
        </>
    )
}
const index = document.getElementById('root')