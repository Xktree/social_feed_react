import React, { useState } from 'react';
import './LikeDislikeButton.css';

const LikeDislike = (props) => {

    const[likeClass, setLikeClass] = useState('');

    function likeHandler(thumb){
        if(thumb === 'up'){
            setLikeClass('like');
        }
        else{
            setLikeClass('dislike');
        }
    }
    return ( 
        <div className='rate-post'>
            <div className={likeClass}>
                <i className='thumbs-up' onClick={() => likeHandler('up')}></i>
                <i className='thumbs-down' onClick={() => likeHandler('down')}></i>
            </div>
        </div>
     );
}
 
export default LikeDislike;