import { useState } from "react";
import "./LikeDislike.css"

const LikeDislike = (props) => {

    const [likeClass, setLikeClass] = useState("");

    function handleLikes(thumb){
          if(thumb === 'up'){
            setLikeClass("like");
          }else{
            setLikeClass("dislike");
          }
     }
     return ( 
        <div className="rate_post text-end"> 
          <div className={likeClass}>                 
            <i className="fas fa-thumbs-up" onClick={() => handleLikes('up')}></i>
            <i className="fas fa-thumbs-down" onClick={() => handleLikes('down')}></i>     
          </div>            
        </div>
     );
}
 
export default LikeDislike;