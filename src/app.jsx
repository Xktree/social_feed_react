import React, { useState } from 'react';
import CreatePost from './Components/CreatePosts/CreatePost';
import DisplayPost from './Components/DisplayPosts/DisplayPost';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import './Components/NavBar/NavBar.css';

function App() {

  const[navElements, setNavBarElements] = useState([{navelement: 'About Us', navelement: 'Contact Us'}])

  const[newContactPosts, setContactPosts] = useState([])

  function addContactPost(post){
    let tempPost = [...newContactPosts, post];
    setNewContactPosts(tempPost);
  }

  return (
    <div className='container-fluid'>
        <NavBar navProps={navElements} />
        <div className='container'>
            <CreatePost addContactPost={addContactPost} />
            <DisplayPost postDetails={newContactPosts} />
        </div>
    </div>
  );
}

export default App;
