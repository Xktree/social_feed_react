import React, { useState } from 'react';
import Post from '../Post/Post';

const DisplayPost = (props) => {
    return (  
        <div className='display_post'>
            {props.postDetails.map((post, index) => {
                return(
                    <Post key={index} data={post} />
                );
            })}
        </div> 
    );
}
 
export default DisplayPost;