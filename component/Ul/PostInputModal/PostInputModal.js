import axios from "axios";
import { useEffect, useState } from "react"
import { useStateContext } from "../../HboProvider/hboprovider";
import ls from "local-storage";




export default function PostModal(props){
  let localstorageToken= ls("token")
  console.log({getreay:props})
  const globalState = useStateContext()
  const [text,setText] = useState({comments:"", movieId:"",Title:""})
  

// send form datahandler
    const SendPost=async()=>{
await axios({
      
      method: "post",
      url: "https://crowded-turtleneck-eel.cyclic.app/comment",
      data:text ,
      headers:{  "Content-Type": "application/json",
      Authorization:"Bearer " + localstorageToken},
    }).then((response)=>{
      console.log(response)
      if(response.status===201){
        props.OpenAndCloseModal(false)

      }
  
    
    }).catch((e)=>{
      console.log({error:e})

    });
    
 
}
console.log(text)
    
    return ( 
      <>

    <div className="Modal-container">

      <div className="Modal-container_informations">
      <div className="Modal-container_informations_writeReveiw-closebtn">
          <h4>Create a Review</h4>
          <div onClick={()=>props.OpenAndCloseModal()}className="Modal-container_writeReveiw-closebtn-btn">  <i   className="fa fa-times" /></div>
          
        </div>
        <div className="Modal-container_informations_user">
         <div className="Modal-container_informations_user_userProfile">
        <img src="http://localhost:3000/_next/image?url=https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F91.jpg&w=64&q=75"></img>

        </div>
      <div  onInput={(e)=>setText({...text,comments:e.target.innerText,
      movieId:props.reviewProps.reviewProps.id,
    Title:props.reviewProps.reviewProps.original_title})} 
  className="Modal-container_informations_user_input"
   data-gramm="false" contentEditable={true} suppressContentEditableWarning={true} data-placeholder="Add a comment…" 
   aria-placeholder="Add a comment…" 
   aria-label="Text editor for creating content" 
   role="textbox" aria-multiline="true" spellCheck="false">
  </div>

  </div>
  <div className="Modal-container_informations_user_btn-post" onClick={SendPost}>Post</div>

  </div>
  
      </div>
    
  </>
   
    )
    }
    