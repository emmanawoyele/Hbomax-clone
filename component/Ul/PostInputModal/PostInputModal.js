import { useState } from "react"
import { useStateContext } from "../../HboProvider/hboprovider";

export default function PostModal(props){
  const globalState = useStateContext()
  const [text,setText] = useState("")
    const SendPost=()=>{

    }
    return ( 
      <>

    <div className="Modal-container">

      <div className="Modal-container_informations">
      <div className="Modal-container_writeReveiw-closebtn">
          <h4>Create a Review</h4>
          <div className="Modal-container_writeReveiw-closebtn-btn">  <i  onClick={()=>props.OpenAndCloseModal()} className="fa fa-times" /></div>
          
        </div>
        <div className="Modal-container_user">
         <div className="Modal-container_user_userProfile">
        <img src="http://localhost:3000/_next/image?url=https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fmen%2F91.jpg&w=64&q=75"></img>

        </div>
      <div  onInput={(e)=>setText(e.target.innerText)} 
  className="Modal-container_user_input"
   data-gramm="false" contentEditable={true} suppressContentEditableWarning={true} data-placeholder="Add a comment…" 
   aria-placeholder="Add a comment…" 
   aria-label="Text editor for creating content" 
   role="textbox" aria-multiline="true" spellCheck="false">
{/* <p></p> */}
  </div>

  </div>
  <div className="Modal-container_user_btn-post" onClick={SendPost}>Post</div>

  </div>
  
      </div>
    
  </>
   
    )
    }
    