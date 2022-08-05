import LikeDislike from "../LikeDislike/LikeDislikeButton";
import './Post.css'

const Post = (props) => {
    return ( 
        <div className="container p-0 mb-4">
            <div className="d-flex p-2 justify-content-between post_header">
                <h2 className="col-xl-6">Posted by: {props.postData.userName}</h2>
                <div className="col-xl-6 text-end post_date">Date Posted:{props.postData.datePosted}</div>
            </div>
            <div className="messagebox">
                <div className="post_message">{props.postData.newMessage}</div>
                <div className="thumbs text-end"><LikeDislike /></div> 
            </div>
                    
        </div>
     );
}
 
export default Post; 