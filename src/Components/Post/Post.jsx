import LikeDislike from "../DisplayButton/LikeDislikeButton";
import './Post.css'

const Post = (props) => {
    return ( 
        <div className="container p-0 mb-4">
            <div className="d-flex p-2 justify-content-between post_header">
                <h2 className="col-xl-6">Posted by: {props.data.userName}</h2>
                <div className="col-xl-6 text-end post_date">Date Posted:{props.data.dateMessagePosted}</div>
            </div>
            <div className="messagebox">
                <div className="post_message">{props.data.newMessage}</div>
                <div className="thumbs text-end"><LikeDislike /></div> 
            </div>
                    
        </div>
     );
}
 
export default Post; 