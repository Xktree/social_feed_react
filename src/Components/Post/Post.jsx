import LikeDislike from "../LikeDislikeButtons/LikeDislikeButton";
import './Post/css';

const Post = (props) => {
    return (  
        <div className='container'>
            <div className='post_header_justification_text'>
                <h2 className='column'> Poster: {props.postData.userName}</h2>
                <div className='column post_date'> Date of Post: {props.postData.datePosted}</div>
            </div>
            <div className='message vessel'>
                <div className='post_message'></div>{props.postData.newMessage}</div>
                <div className='thumbs_icon'><LikeDislike /></div>
            </div>
    );
}
 
export default Post;