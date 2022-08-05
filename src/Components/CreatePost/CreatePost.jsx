import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import NavBar from './Components/Nav/NavBar';
import './App.css'
import './Components/Nav/Nav.css'


function App() {

  const [navButtons, setNavButtons] = useState([{navbutton:'Home',navlink:'#'},{navbutton:'About Us',navlink:'#about'},{navbutton:'Contact Us',navlink:'#contact'}])

  const [newPosts,setNewPosts] = useState([])

  function addNewPost(post){
      let tempPost = [...newPosts, post];
      setNewPosts(tempPost);
  }

  
  return (
    <div className="container-fluid m-0 mb-1 p-0">
      <NavBar navProps={navButtons} />  
      <div className="container">  
        <CreatePost addNewPost={addNewPost} />
        <DisplayPost postInfo={newPosts} />
      </div>
    </div>
  );
}

export default App;