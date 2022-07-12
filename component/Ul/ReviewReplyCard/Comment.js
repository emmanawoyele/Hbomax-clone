import { useState } from "react"


const HideComment=(props)=>{
    const[response,setresponse]=useState("its a very good movie you should watchit")
    
    return<>
     <div className="card-form">
        <form>
      <div  className="card-form_contenteditable" 
      data-gramm="false" contentEditable={true} suppressContentEditableWarning={true} 
      data-placeholder="Add a comment…" aria-placeholder="Add a comment…" 
      aria-label="Text editor for creating content" role="textbox" 
      aria-multiline="true"  
      spellCheck="false">
    
      </div>
      </form>
    
        </div>
   
    <div className="comments_card " >
       
        <div className="comments_card-container-userImg" > 
        <img src="http://www.tellafrica.com.ng/wp-content/uploads/2019/10/20191016_160311.jpg"/>
      </div > 
<div className="comments_card-container">
      <div className="comments_card-container-response">
        <p>{response}</p>
      </div>

      </div>

      </div>
      </>
  }
  export default HideComment