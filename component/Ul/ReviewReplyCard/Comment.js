import { useState } from "react"


const HideComment=(props)=>{
    const[response,setresponse]=useState("ts a ts a very good movie you should watchits a very good movie you should watchits a very good movie you should watchits a very good movie you should watchits a very good movie you should watchiits a very good movie you should watchitts a very good movie you should watchits a very good movie you should watchits a very good movie you should watchits a very good movie you should watchits a very good movie you should watchiits a very good movie you should watchitts a very good movie you should watchits a very good movie you should watchits a very good movie you should watchits a very good movie you should watchits a very good movie you should watchiits a very good movie you should watchitts a very good movie you should watchits a very good movie you should watchits a very good movie you should watchits a very good movie you should watchits a very good movie you should watchiits a very good movie you should watchitts a very good movie you should watchits a very good movie you should watchits a very good movie you should watchits a very good movie you should watchits a very good movie you should watchiits a very good movie you should watchit very good movie you should watchits a very good movie you should watchits a very good movie you should watchits a very good movie you should watchits a very good movie you should watchiits a very good movie you should watchit")
    const [name,setName]=useState("Emmanuel  awoyele")

    let a=[]
    let b;
    while(b=0,b<10,b++){
return <div className="comments_card " >
   
       
<div className="comments_card-container-userImg"  key={b}> 
<img src="http://www.tellafrica.com.ng/wp-content/uploads/2019/10/20191016_160311.jpg"/>
</div > 
<div className="comments_card-container">

<div className="comments_card-container-response">
<div  className="comments_card-container-response-usersInformation">
<span className="comments_card-container-response-usersInformation-span1">
{name}</span>

</div>
<p>{response}</p>
</div>

</div>

</div>

    }
    return<>
    <div className="card-container">
   
      <div className="card-container-userImg" > 
        <img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-732x549.jpg"/>
      </div >

      <div className="card-container-form">
      
      <form>
    <div  className="card-container-form-contenteditable" 
    data-gramm="false" contentEditable={true} suppressContentEditableWarning={true} 
    data-placeholder="Add a comment…" aria-placeholder="Add a comment…" 
    aria-label="Text editor for creating content" role="textbox" 
    aria-multiline="true"  
    spellCheck="false">
  
    </div>
    </form>
      
      </div>
      </div>
    
  
    <div className="comments_card " >
    <h1 style={{color:"red"}}>hello</h1>
        <div className="comments_card-container-userImg" > 
        <img src="https://gorillas.org/wp-content/uploads/thumb-gorillaaboutus.jpg"/>
      </div > 
<div className="comments_card-container">
  
      <div className="comments_card-container-response">
      <div  className="comments_card-container-response-usersInformation">
<span className="comments_card-container-response-usersInformation-span1">
    {name}</span>
   
  </div>
        <p>{response}</p>
      </div>

      </div>

      </div>
     
      </>
  }
  export default HideComment


  