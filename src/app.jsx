import React, { useState } from 'react';
import CreatePost from './Components/CreatePosts/CreatePost';
import DisplayPost from './Components/DisplayPosts/DisplayPost';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import './Components/NavBar/NavBar.css';

function App() {

  const[navElements, setNavBarElements] = useState([{navelement: 'About Us', navelement: 'Contact Us'}])

  const[newPosts, setNewPosts] = useState([])

  function addNewPost(post){
    let tempPost = [...newPosts, post];
    setNewPosts(tempPost);
  }

  return (
    <div className='container-fluid'>
        <NavBar navProps={navElements} />
        <div className='container'>
            <CreatePost addContactPost={addNewPost} />
            <DisplayPost postDetails={newPosts} />
        </div>
    </div>
  );
}

export default App;
