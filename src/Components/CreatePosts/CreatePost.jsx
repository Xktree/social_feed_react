import React, { useState } from 'react';

const CreatePost = (props) => {
    const[userName, setUserName] = useState('');
    const[newPost, setNewPost] = useState('');

    function catchUserInputSubmission(input){
        input.preventDefault();
        let newMessage = {
            userName,
            newPost
        } 
        props.addContactPost(newMessage);
        setUserName('');
        setNewPost('');
    }
    return ( 
        <div>
        <div className='m-3 container'>
            <h2>Create a Post</h2>
            <form className='form-horizontal-style' onSubmission={catchUserInputSubmission}>
                <div className='form-group'>
                    <label className="control-label">Username</label>
                    <input type='text' className='form-control' value={userName} onChange={(input) => setUserName(input.target.value)} />
                </div>
                <div className='form-group'>
                    <label className='control-label'>Message</label>
                    <textarea className='form-control' value={newMessage} onChange={(input) => setNewPost(input.target.value)} ></textarea>
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