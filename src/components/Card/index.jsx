import React, {useState} from 'react';
import '../Card/style.css';
import {LikeButton} from '../LikeButton/index'


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