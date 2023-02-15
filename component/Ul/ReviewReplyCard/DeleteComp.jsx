import axios from "axios";
import ls, { get } from "local-storage";
import { useState } from "react"

const localstorageToken = ls("token")




const DeleteComp=(props)=>{


const DeleteHandler=async(getId)=>{

console.log("hey")
await axios({
            method: "delete",
      url: `https://hboback-end.herokuapp.com/comment/${getId}`,
      // url: `http://localhost:9000/comment/${getId}`,

      headers: {
        Authorization: `Bearer ${localstorageToken}`,
        "Content-Type": "application/json",
      },
        
    }).then((respose)=>{
    }).catch((e)=>{

    })
    
 
}
    return ( 
        <div className="reply_container-userInfo-delete"  onClick={()=>{DeleteHandler(props.feedId._id)}} >
        <div className="reply_container-userInfo-delete-info">
        <span  ><i className=" fas fa-trash" ></i></span> 
        <p>Delete</p>
        
      
        </div>
     
      </div>
     );
}

export default DeleteComp ;