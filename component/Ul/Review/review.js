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

console.log(props.reviewProps.credits.cast)
 

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

 const LikeButtonHandlers=()=>{
   const number =1
setLike(like+number)
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
      <Image objectFit="cover" objectPosition="center"width={300} height={300} src ={`https://image.tmdb.org/t/p/original/${props.reviewProps.backdrop_path}`}/>
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
<div className="review__comments__userInfo">
  <div className="review__comments__userInfo__userImg">
    
    <img src="http://localhost:3000/_next/image?url=https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F91.jpg&w=64&q=75"></img>
    <span>Emmanuel</span>
  </div >

<p>An LA girl, unlucky in love, falls for an East Coast guy on a dating app and decides to surprise him for Christmas, only to discover that she’s been catfished. But the object of her affection actually lives in the same town, and the guy who duped her offers to set them
 up if she pretends to be his own girlfriend for the holidays
 An LA girl, unlucky in love, falls for an East Coast guy on a dating app and decides to surprise him for Christmas, only to discover that she’s been catfished. But the object of her affection actually lives in the same town, and the guy who duped her offers to set them up if she pretends to be his own girlfriend for the holidays
 An LA girl, unlucky in love, falls for an East Coast guy on a dating app and decides to surprise him for Christmas, only to discover that she’s been catfished. But the object of her affection actually lives in the same town, and the guy who duped her offers to set them up if she pretends to be his own girlfriend for the holidays
 </p>
 <div className="review__comments__userInfo-container">
 <div className="review__comments__userInfo-container-icon-count">
   <div className="review__comments__userInfo-container-icon-count-container">
   <span className="review__comments__userInfo-container-icon-count-container_span" ><i className="fas fa-thumbs-up"></i></span>
   <span className="review__comments__userInfo-container-icon-count-container_like" >{like}</span>
   </div>
   <div className="review__comments__userInfo-container-icon-count-container">
   <span  className="review__comments__userInfo-container-icon-count-container_span" ><i className="fas fa-thumbs-down"></i></span>
  <span  className="review__comments__userInfo-container-icon-count-container_like">3</span> 
   {/* <span>  <i className="fas fa-comment"></i> Comment</span>
   <span>  <i className="fas fa-share"></i> share</span> */}
   </div>
   </div>
   
 <div className="review__comments__userInfo-container-thumbs-up">
   <div className="review__comments__userInfo-container-thumbs-up__like" onClick={LikeButtonHandlers}>
   <span ><i className="fas fa-thumbs-up"></i>Like</span>
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


<div className="review__comments__userInfo">
An LA girl, unlucky in love, falls for an East Coast guy on a dating app and decides to surprise him for Christmas, only to discover that she’s been catfished. But the object of her affection actually lives in the same town, and the guy who duped her offers to set them
 up if she pretends to be his own girlfriend for the holidays
 An LA girl, unlucky in love, falls for an East Coast guy on a dating app and decides to surprise him for Christmas, only to discover that she’s been catfished. But the object of her affection actually lives in the same town, and the guy who duped her offers to set them up if she pretends to be his own girlfriend for the holidays
 An LA girl, unlucky in love, falls for an East Coast guy on a dating app and decides to surprise him for Christmas, only to discover that she’s been catfished. But the object of her affection actually lives in the same town, and the guy who duped her offers to set them up if she pretends to be his own girlfriend for the holidays
</div>
<div className="review__comments__userInfo">
An LA girl, unlucky in love, falls for an East Coast guy on a dating app and decides to surprise him for Christmas, only to discover that she’s been catfished. But the object of her affection actually lives in the same town, and the guy who duped her offers to set them
 up if she pretends to be his own girlfriend for the holidays
 An LA girl, unlucky in love, falls for an East Coast guy on a dating app and decides to surprise him for Christmas, only to discover that she’s been catfished. But the object of her affection actually lives in the same town, and the guy who duped her offers to set them up if she pretends to be his own girlfriend for the holidays
 An LA girl, unlucky in love, falls for an East Coast guy on a dating app and decides to surprise him for Christmas, only to discover that she’s been catfished. But the object of her affection actually lives in the same town, and the guy who duped her offers to set them up if she pretends to be his own girlfriend for the holidays
</div>
  <form>
  <div onInput={ReviewCommentsHandler} className="infomation-container_input" data-gramm="false" contentEditable="true" data-placeholder="Add a comment…" aria-placeholder="Add a comment…" aria-label="Text editor for creating content" role="textbox" aria-multiline="true" data-test-ql-editor-contenteditable="true" 
  spellCheck="false">

  </div>
  </form>
</div>

<div className="review__similar-movies">
  {props.reviewProps.credits.cast.map((cast ,index)=>{
    return <div Key={cast.credit_id} className="review__similar-movies-cast_container">
      {cast.profile_path!=null ?<img alt={cast} className={'review__similar-movies-cast_container-image'} layout="responsive"   objectFit="cover" objectPosition="center"  src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}/>:<span>
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
    <div onInput={props.ReviewCommentsHandler} className="review__comments__userInfo__contenteditable" data-gramm="false" contentEditable="true" data-placeholder="Add a comment…" aria-placeholder="Add a comment…" aria-label="Text editor for creating content" role="textbox" aria-multiline="true" data-test-ql-editor-contenteditable="true" 
    spellCheck="false">
  
    </div>
    </form>
    </div>
}


const Like=(props)=>{

}