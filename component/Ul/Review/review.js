import MainLayout from "../../Layouts/MainLayout";
import MediaRow from "../MediaRow/MediaRow";
import { useStateContext } from '../../HboProvider/hboprovider'
import { useState,useEffect } from "react";
import { set } from "local-storage";
import Image from 'next/image'
import  FeaturedMedia from "../FeaturedMedia/FeaturedMedia"
import axios from "axios";




export default function Review(props) {
  
  const globalState =useStateContext()
  const [text,setText] = useState("")
  const [hidecomment, setHidecomment]=useState(false)
  const [like, setLike]=useState(0)
  const [dislike, setDisLike]=useState(0)


 

  // All HANDLERS FUNCTIONS BELOW
  // get the text from div
  const ReviewCommentsHandler=(e)=>{
  var contenteditable = document.querySelector('[contenteditable]'),
  text = contenteditable.textContent;
setText(text)
console.log(text)
  }
 const HideCommentHandler=()=>{
   setHidecomment(!false)
 }


 const SendPost=()=>{
   console.log({text})
   
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
//  END ALL HANDLERS FUNCTIONS
  useEffect(() => {

    const axios = require('axios')

    
    // Make a request for a user with a given ID
    // axios. get(`https://api.themoviedb.org/3/movie/ ${props.reviewProps.review}/list?api_key=${process.env.PRIVATE_API_KEY}&language=en-US`)
    //     .then(function (response) {
          
    //        console.log(response)

    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     })
    //     .then(function () {
    //         // always executed

    //     })
}, [])

 
  return (
    <MainLayout>
    <div className="review">
      <div className="review__container-image">
        <div className="review__image">
      <Image alt={props.reviewProps.name} objectFit="cover"  layout="responsive"objectPosition="center"width={300} height={300} src ={`https://image.tmdb.org/t/p/original/${props.reviewProps.backdrop_path}`}/>
      </div>
    
<div className="review__infomation">
<h1>{props.reviewProps.original_title}</h1>
<span>
Release Date: {props.reviewProps.release_date}

</span>
<p>{props.reviewProps.overview}</p>
</div>
      
    </div>

    <div className="review__comments">
      
     <div  className="review__comments-top">
     <div className="review__comments-container">
        <div className="review__comments-container-userProfile">
        <img src="http://localhost:3000/_next/image?url=https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F91.jpg&w=64&q=75"></img>

        </div>
      <div onInput={(e)=>setText(e.target.innerText)} 
  className="review__comments_input"
   data-gramm="false" contentEditable={true} suppressContentEditableWarning={true} data-placeholder="Add a comment…" 
   aria-placeholder="Add a comment…" 
   aria-label="Text editor for creating content" 
   role="textbox" aria-multiline="true" spellCheck="false">
<p></p>
  </div>
  
    
  
      </div>
      <div className="review__comments-container_btn-post" onClick={SendPost}>Post</div>
     </div>

      
<div className="review__comments__userInfo">
  <div className="review__comments__userInfo__userImg">
    
    <img src="http://localhost:3000/_next/image?url=https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F91.jpg&w=64&q=75"></img>
    <span>Emmanuel</span>
  </div >
<div className="review__comments__userInfo_text">
<p>
  {text}
 </p>
</div>

 <div className="review__comments__userInfo-container">
 <div className="review__comments__userInfo-container-icon-count">
   <div className="review__comments__userInfo-container-icon-count-container">
   <span onClick={LikeButtonHandlers} className="review__comments__userInfo-container-icon-count-container_span" ><i className="fas fa-thumbs-up"></i></span>
   <span  className="review__comments__userInfo-container-icon-count-container_like" >{like}</span>
   </div>
   <div className="review__comments__userInfo-container-icon-count-container">
   <span onClick={DisLikeButtonHandlers} className="review__comments__userInfo-container-icon-count-container_span" ><i className="fas fa-thumbs-down"></i></span>
  <span  className="review__comments__userInfo-container-icon-count-container_like">{dislike}</span> 
   {/* <span>  <i className="fas fa-comment"></i> Comment</span>
   <span>  <i className="fas fa-share"></i> share</span> */}
   </div>
   </div>
   
 <div className="review__comments__userInfo-container-thumbs-up">
   <div className="review__comments__userInfo-container-thumbs-up__like" onClick={LikeButtonHandlers}>
   <span  ><i className="fas fa-thumbs-up"></i>Like</span>
   </div>
   <div className="review__comments__userInfo-container-thumbs-up__like">
  <span onClick={HideCommentHandler}>  <i className="fas fa-comment"></i> Comment</span>
  </div>
  <div className="review__comments__userInfo-container-thumbs-up__like">
  <span>  <i className="fas fa-share"></i> share</span>
  </div>
  </div>
{hidecomment?<HideComment ReviewCommentsHandler={ReviewCommentsHandler}/>: null}


  </div>
</div>



  <form>
  <div style={{background:"red"}}onInput={(e)=>setText(e.target.innerText)} 
  className="infomation-container_input"
   data-gramm="false" contentEditable={true} suppressContentEditableWarning={true} data-placeholder="Add a comment…" 
   aria-placeholder="Add a comment…" 
   aria-label="Text editor for creating content" 
   role="textbox" aria-multiline="true" 
    
  spellCheck="false">
{text}
  </div>
  </form>

</div>

<div className="review__movies-casts">
  {props.reviewProps.credits.cast.map((cast ,index)=>{
    return <div key={cast.credit_id} className="review__movies-casts_container">
      {cast.profile_path!=null ?<img alt={cast} className={'review__movies-casts_container-image'} layout="responsive"   objectfit="cover" objectposition="center"  src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}/>:<span>
      <i className="fas fa-image"></i><p>{cast.name} image is missing  </p>
      </span>}
    </div>
  })}

 
</div>
    </div>
     </MainLayout>
     
  )
}

const HideComment=(props)=>{
  return<div className="review__comments__userInfo-userProfile" >

  
  <div className="review__comments__userInfo__userImg" > 
      <img src="http://localhost:3000/_next/image?url=https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F91.jpg&w=64&q=75"></img>
     
    </div >
   <form>
    <div onInput={props.ReviewCommentsHandler} className="review__comments__userInfo__contenteditable" 
    data-gramm="false" contentEditable={true} suppressContentEditableWarning={true} 
    data-placeholder="Add a comment…" aria-placeholder="Add a comment…" 
    aria-label="Text editor for creating content" role="textbox" 
    aria-multiline="true"  
    spellCheck="false">
  
    </div>
    </form>
    </div>
}


const Like=(props)=>{

}