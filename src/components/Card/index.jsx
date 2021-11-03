import React, {useState} from 'react';
import '../Card/style.css';
import {LikeButton} from '../LikeButton/index'

<<<<<<< HEAD
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
=======
export const Card = ({ size, name, genre, intro, img }) => {
    return (
        <>
            <div className="cardCont">
                <div className={`card ${size}`}>
                    <img className="imgCss"src={img}/>
                    <h3>{name}</h3>
                    <em>{genre}</em>
                    <h4>{intro}</h4>
                    
                </div>
                <div className="likeBtn">
                    <LikeButton/>
                </div>
            </div>
            
>>>>>>> 67b22e2486483f3f9ad21ae86082273543cca763
        </>
    )
}