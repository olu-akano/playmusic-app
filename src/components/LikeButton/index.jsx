import React, {useState} from 'react';

export const LikeButton = () => {
    const [liked, setLiked] = useState(false);

    const handleFave = e => {
        e.stopPropagation()
        setLiked(prev => !prev)
    }

    return(
        <span role="switch" onClick={handleFave} className="heartBtn" style={{ color: liked ? 'red' : 'grey'}}>❤</span>
    );
}