import React, { useState } from 'react';

const LikeDislike = (props) => {

    const[like, setLike] = useState('');

    function likeHandler(thumb){
        if(thumb === 'up'){
            setLike('like');
        }
        else{
            setLike('dislike');
        }
    }
    return ( 
        <div className='rate-post'>
            <div className={like}>
                <i className='thumbs-up' onClick={() => likeHandler('up')}></i>
                <i className='thumbs-down' onClick={() => likeHandler('down')}></i>
            </div>
        </div>
     );
}
 
export default LikeDislike;