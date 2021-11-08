import MainLayout from "../../Layouts/MainLayout";
import MediaRow from "../MediaRow/MediaRow";
import { useStateContext } from '../../HboProvider/hboprovider'
import { useState,useEffect } from "react";
import { set } from "local-storage";




export default function Review(props) {
  const globalState =useStateContext()
  const [text,setText] = useState("")
  console.log({propsreview:props.reviewProps})
  // get the text from div
  const ReviewCommentsHandler=(e)=>{
  var contenteditable = document.querySelector('[contenteditable]'),
  text = contenteditable.textContent;
setText(text)
console.log(text)
  }

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
    <div className="review_container">
<div className="image-class">
  <img src ={`https://image.tmdb.org/t/p/original/${props.reviewProps.backdrop_path}`}/>
</div>

     </div>
     <div className="infomation-container">
<div className="infomation-container__title_date">

    <h1>{props.reviewProps.original_title}</h1>
    <div className="infomation-container__date">
<p>
 Release Date: {props.reviewProps.release_date}
 {text}
</p>
</div>
</div>


<div className="infomation-container__summary">
<p>{props.reviewProps.overview}</p>
 <div className="infomation-container__comment_card">
<p>{text}</p>
 <div className="reply_card" >
 <div className="infomation-container__comments">
  <form>
  <div className="infomation-container_input" data-gramm="false" 
  spellCheck="false">

  </div>
  </form>
</div>

 </div>
</div>


</div>

<div className="infomation-container__comments">
  <form>
  <div onInput={ReviewCommentsHandler} className="infomation-container_input" data-gramm="false" contentEditable="true" data-placeholder="Add a comment…" aria-placeholder="Add a comment…" aria-label="Text editor for creating content" role="textbox" aria-multiline="true" data-test-ql-editor-contenteditable="true" 
  spellCheck="false">

  </div>
  </form>
</div>
</div>
     <MediaRow></MediaRow>
     </div>
     </MainLayout>
  )
}