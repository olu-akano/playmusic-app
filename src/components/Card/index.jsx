import React, {useState} from 'react';
import '../Card/style.css';
import {LikeButton} from '../LikeButton/index'

<<<<<<< HEAD
=======

>>>>>>> 3ab84e6b0ca56fc035e257c61ef9d8e47e628359
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
        </>
    )
}