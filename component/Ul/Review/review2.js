import MainLayout from "../../Layouts/MainLayout";
import MediaRow from "../MediaRow/MediaRow";
import { useStateContext } from '../../HboProvider/hboprovider'
import { useState,useEffect } from "react";
import Backdrop from "../Backdrop/Backdrop";
import { set } from "local-storage";
import Image from 'next/image'
import  FeaturedMedia from "../FeaturedMedia/FeaturedMedia"
import axios from "axios";
import PostModal from "../PostInputModal/PostInputModal";
import ReviewReplyCard from "../ReviewReplyCard/ReviewReplyCard";




export default function Review(props) {
  
  const globalState =useStateContext()

  
  const [openModal,setModal]=useState(false)


 

  // All HANDLERS FUNCTIONS BELOW
  // get the text from div
 


const OpenAndCloseModal=()=>{
 
  setModal((prev) => !prev)
}
 const SendPost=()=>{
   console.log({text})
   
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
      <Backdrop openModal={openModal} OpenAndClose={OpenAndCloseModal}>
        <PostModal OpenAndCloseModal={OpenAndCloseModal}/>
        </Backdrop>  
   
        <div className="review_box">
    
      <div className="left">
        <div className="left__image">
      <Image alt={props.reviewProps.name} objectFit="cover"  layout="responsive"objectPosition="center"width={300} height={300} src ={`https://image.tmdb.org/t/p/original/${props.reviewProps.backdrop_path}`}/>
      </div>
      <div className="left__information">
<h1>{props.reviewProps.original_title}</h1>
<span>
Release Date: {props.reviewProps.release_date}

</span>
<p>{props.reviewProps.overview}</p>
</div>
      </div>
    

      <div className="review__comments-container">
        <div className="review__comments-container-userProfile">
        <img src="http://localhost:3000/_next/image?url=https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F91.jpg&w=64&q=75"></img>

        </div>
   
      <div disabled onInput={(e)=>setText(e.target.innerText)} 
  className="review__comments-container_input"
   data-gramm="false"  contentEditable={true} suppressContentEditableWarning={true} data-placeholder="Add a comment…" 
   aria-placeholder="Add a comment…" 
   aria-label="Text editor for creating content" 
   role="textbox" aria-multiline="true" spellCheck="false" onClick={OpenAndCloseModal}>
<p></p>
  </div>
  
    
  
      </div>
    
    <ReviewReplyCard/>
    <ReviewReplyCard/>
    <ReviewReplyCard/>
    <ReviewReplyCard/>


    <div className="right">
  {props.reviewProps.credits.cast.map((cast ,index)=>{
    return <div key={cast.credit_id} className="right-container">
      {cast.profile_path!=null ?<img alt={cast.name} className={'review__movies-casts_container-image'} layout="responsive"   objectfit="cover" objectposition="center"  src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}/>:<span>
      <i className="fas fa-image"></i><p>{cast.name} image is missing  </p>
      </span>
      
      }
    </div>
  })}

 
   </div>
   
    </div>
    
     </MainLayout>
     
  )
}




const Like=(props)=>{

}