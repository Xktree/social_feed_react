import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import './Components/NavBar/NavBar';

function App() {

  const[navElements, setNavElements] = useState([{navbutton: 'About Us'}, {navbutton: 'Contact Us'}])

  const[newPosts, setNewPosts] = useState([])

  function addNewPost(post){
    let tempPost = [...newPosts, post];
    setNewPosts(tempPost);
  }

  return (
    <div className='container-fluid m-0 mb-1 p-0'>
        <NavBar navProps={navElements} />
        <div className='container'>
            <CreatePost addNewPost={addNewPost} />
            <DisplayPost postDetails={newPosts} />
        </div>
    </div>
  );
}

export default App;
