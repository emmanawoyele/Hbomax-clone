import { useState,useEffect } from "react";
import HideComment from "./Comment";
import ls from "local-storage";
import axios from 'axios'
import DeleteComp from "./DeleteComp";





export default function ReviewReplyCard(props){
  let localstorageToken= ls("token")
  let localstorageId =ls('users')[0]._id
  const [text,setText] = useState('')
    const [like, setLike]=useState(0)
    const [dislike, setDisLike]=useState(0)
    const [hidecomment, setHidecomment]=useState(false)
const[hideDeleteButton, setDeleteButton]=useState(false)
// This function handler checks is the current user by comparing id thats stored in
// localstorage and id on the local. This function allows user to see delete button or not.
const CheckUser=(ownerId)=>{
if(ownerId===localstorageId){
return <div className=" reply_container-userInfo-userImg-dot"  onClick={()=>HideDeleteHandler()}>
<i class="fas fa-ellipsis-h"></i>
</div>
}else{
  null
}

}

    const ReviewCommentsHandler=(e)=>{
        var contenteditable = document.querySelector('[contenteditable]'),
        text = contenteditable.textContent;
      setText(text)
 
        }

    const LikeButtonHandlers=()=>{
        const number =1
        if(like ===0){
         setLike(like+number)
        }else{
          setLike(like-1)
        }
     
      }

      const DisLikeButtonHandlers=()=>{
        const number =1
        if(dislike ===0){
         setDisLike(dislike+number)
        }else{
          setDisLike(dislike-1)
        }
      
      }
     
      const HideCommentHandler=(e)=>{
        
        setHidecomment((prevState)=>!prevState)

      }
      const HideDeleteHandler=()=>{
        setDeleteButton((prevState)=>!prevState)

      }
    return(
        <>
    <div className="reply_container"> 
  
    <div className="reply_container-userInfo">
      <div className="reply_container-userInfo-userImg">
        
        <img src="http://localhost:3000/_next/image?url=https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F91.jpg&w=64&q=75"></img>
        <span>Emmanuel</span>
        {CheckUser(props.feed.OwnerId)}
      </div >

      {/* this is the delete container for post */}
   {hideDeleteButton? <DeleteComp  feedId={props.feed}/>:null}
    <div className="reply_comments-userInfo_text">
    <p style={{color:"black"}}>
      {props.feed.comments}
     </p>
    </div>
    
     <div className="reply_container-userInfo-icons">
     <div className="reply_container-userInfo-icons-count">
       <div className="reply_container-userInfo-icons-count-like">
       <span onClick={LikeButtonHandlers} className="reply_container__userInfo-container-icon-count-container_span" ><i className="fas fa-thumbs-up"></i></span>
       <span  className="reply_container__userInfo-container-icon-count-container_like" >{like}</span>
       </div>
       <div className="reply_container-userInfo-icons-count-like">
       <span onClick={DisLikeButtonHandlers} className="reply_container__userInfo-container-icon-count-container_span" ><i className="fas fa-thumbs-down"></i></span>
      <span  className="reply_container__userInfo-container-icon-count-container_like">{dislike}</span> 
       {/* <span>  <i className="fas fa-comment"></i> Comment</span>
       <span>  <i className="fas fa-share"></i> share</span> */}
       </div>
       </div>
       
     <div className="reply_container-userInfo-icons-thumbs-up">
       <div className="reply_container-userInfo-icons-thumbs-up-like" onClick={LikeButtonHandlers}>
       <span  ><i className="fas fa-thumbs-up" ></i></span> 
       <span style={{paddingLeft:8+"px"}}>Like</span>
       </div>
       <div className="reply_container-userInfo-icons-thumbs-up-comment" onClick={HideCommentHandler}>
      <span className="reply_container-userInfo-icons-thumbs-up-comment-likeIcon" >  <i className="fas fa-comment"></i> </span>
      <span reply_container-userInfo-icons-thumbs-up-comment-likeIcon style={{paddingTop:8+"px"}}>Comment</span>
      </div>
      {/* <div className="reply_container__userInfo-container-thumbs-up__like">
      <span>  <i className="fas fa-share"></i> share</span>
      </div> */}
      </div>
    {hidecomment?<HideComment ReviewCommentsHandler={ReviewCommentsHandler}/>: null}
    
    
      </div>
    </div>
    
    </div>
    
    </>
    )
       
}