
import { useStateContext } from '../../HboProvider/hboprovider'
import { useState,useEffect } from "react";
import Backdrop from "../Backdrop/Backdrop";
import ls from "local-storage";
import Image from 'next/image'
import axios from "axios";
import PostModal from "../PostInputModal/PostInputModal";
import ReviewReplyCard from "../ReviewReplyCard/ReviewReplyCard";



export default function Review(props){
 
  const globalState=useStateContext()
    const [openModal,setModal]=useState(false)
    const[text,setText]=useState()
    const[FeedCard,setFeedCard]=useState([])
    let localstorageToken= ls("token")
   
    // sorting fucntion
    function sortByCreatedAt(arr) {
      let i
      i=arr.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
        return i  
    }
    
      

    useEffect(() => {
      let source = new EventSource(`https://hboback-end.herokuapp.com/comment?token=${localstorageToken}`
        // let source = new EventSource(`http://localhost:9000/comment?token=${localstorageToken}&id=${props.reviewProps.id}`,
);
      source.onmessage = (event) => {
        
let i =JSON.parse(event.data)
console.log(i)
        let parsedEventData= JSON.parse(event.data).filter((filterdMovie)=>{
           return filterdMovie.movieId === props.reviewProps.id
        });

       const sortedArray = sortByCreatedAt(i)
        setFeedCard(sortedArray)
        
      };
      source.onerror = (error) => {
        console.error("EventSource failed:", error);
      };
    }, []);

// OPEN AND CLOSE MODAL HADLER
    const OpenAndCloseModal=()=>{
      
        setModal((prev) => !prev)
      }


    return(
    <div className="review__box">
<div className="review__box-left">
        <div className="review__box-left-image">
      <Image alt={props.reviewProps.name} objectFit="cover"  layout="responsive"objectPosition="center"width={300} height={300} src ={`https://image.tmdb.org/t/p/original/${props.reviewProps.backdrop_path}`}/>
      </div>
      <div className="review__box-left-information">
<div className="review__box-left-information-title">
    <span className="review__box-left-information-title-span1">Title:</span>
    <span className="review__box-left-information-title-span2">{props.reviewProps.original_title}</span>
    </div>
<div className="review__box-left-information-title">
<span className="review__box-left-information-title-span1">Release Date: </span>
<span className="review__box-left-information-title-span2">{props.reviewProps.release_date}</span>

</div>
<p>{props.reviewProps.overview}</p>
</div>
      </div>

<div className="review__box-comments-container">
     
   <div className="review__box-comments-container-house">
   <div className="review__box-comments-container-userProfile">
        <img src="http://localhost:3000/_next/image?url=https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F91.jpg&w=64&q=75"></img>

        </div>
     
        <PostModal OpenAndCloseModal={OpenAndCloseModal} reviewProps={props} openModal={openModal}/>
    
      <div disabled onInput={(e)=>setText(e.target.innerText)} 
  className="review__box-comments-container-input"
   data-gramm="false"  contentEditable={true} suppressContentEditableWarning={true} data-placeholder="Add a comment…" 
   aria-placeholder="Add a comment…" 
   aria-label="Text editor for creating content" 
   role="textbox" aria-multiline="true" spellCheck="false"  onClick={OpenAndCloseModal}>
{/* <p>{text}</p> */}
  </div>

   </div>
       

  <div  className="review__box-comments-container-replaycard">
    {FeedCard.map((feeds)=>{
     return <ReviewReplyCard feed={feeds} key={feeds._id}/>
    })}

  </div>
  
      </div>

<div className="review__box-right">
  {props.reviewProps.credits.cast.map((cast ,index)=>{
    return <div key={cast.credit_id} className="review__box-right-container">
      {cast.profile_path!==null ?<img alt={cast.name} className={'review__box-right-container-casts-image'} layout="responsive"   objectfit="cover" objectposition="center"  src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}/>:<span>
      <i className="fas fa-image"></i><p>{cast.name} image is missing  </p>
      </span>
      
      }
    </div>
  })}

 
   </div>
   

    </div>)


}