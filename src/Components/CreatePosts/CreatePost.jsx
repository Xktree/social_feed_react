import React, { useState } from 'react';
import './CreatePost.css';

const CreatePost = (props) => {
    const[userName, setUserName] = useState('');
    const[newPost, setNewPost] = useState('');
    const today = new Date();
    const date = `${today.getMonth()}/${today.getDate()}/${today.getFullYear()}`

    function catchUserInputSubmission(event){
        event.preventDefault();
        let newMessage = {
            userName,
            newPost,
            dateMessagePosted: date
        } 
        props.addContactPost(newMessage);
        setUserName('');
        setNewPost('');
    }
    return ( 
        <div>
        <div className='m-3 container'>
            <h2>Create a Post</h2>
            <form className='form-horizontal-style' onSubmit={catchUserInputSubmission}>
                <div className='form-group'>
                    <label className="control-label">Username</label>
                    <input type='text' className='form-control' value={userName} onChange={(event) => setUserName(event.target.value)} />
                </div>
                <div className='form-group'>
                    <label className='control-label'>Message</label>
                    <textarea className='form-control' value={newMessage} onChange={(event) => setNewPost(event.target.value)} ></textarea>
                </div>
                <div className='form-group'>
                    <input type='submit' className='warning' value='Create Post' />
                </div>
            </form>
        </div>
        <hr />
    </div>
 );
}

export default CreatePost;