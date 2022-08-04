import React, { useState } from 'react';
import Post from '../Post/Post';

const DisplayPost = (props) => {
    return (  
        <div className='display_post'>
            {props.postInfo.map((post, index) => {
                return(
                    <Post key={index} Data={post} />
                );
            })}
        </div> 
    );
}
 
export default DisplayPost;

