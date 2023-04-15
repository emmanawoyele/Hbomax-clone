import Link from "next/link"
import { useStateContext} from "../../HboProvider/hboprovider"
import { useState } from "react"
import { useEffect } from "react"
import ls from "local-storage"
import Image from "next/image"
import axios from "axios"
import AddwishList from "./AddedMovies"
import { useRouter } from 'next/router'

 function Account(props) {
    const router=useRouter()

    const globalState =useStateContext()
    const localstorgeData =globalState.WishList
    let localstorageToken= ls("token")
    useEffect(() => {
    }, [])

const LogoutUser=async(e)=>{

   await axios({ 
        method: "post",
        // url: "https://hboback-end.herokuapp.com/create/logout",
        url: "http://localhost:9000/create/logout",

        headers:{
        Authorization:`Bearer ${localstorageToken}`,
        }
      }).then((response)=>{
     
        if(response.status===200){
         ls.remove('activeUId')
        ls.remove('users')
        ls.remove('token')
        ls.remove('list')
           return router.push('/login')
        }
       
      
      }).catch((e)=>{
console.log({e})
      });


}




    useEffect(() => {
        if(globalState.accountOpen){
            document.body.style.overflowY="hidden"

        }else{
           document.body.style.overflowY="auto" 
        }
    }, [globalState.accountOpen])

     
    return (
    <div className={`account ${globalState.accountOpen?'account--active':''}`}>
        <div className="account__details">
        <div className="account__title"> My list</div>
            <div className="account__watch-list"> 
           <AddwishList/>
         
            </div>
        </div>
       <div className="account__menu">
       <ul className="account__main">
           <li>
           <Link href="/">
           <a  className="active">My List</a>
        </Link>
              
           </li>
           </ul>  
           <div className="side-nav__divider"/>
           <ul className="account__main">
               <li>
               <Link href="/">
          <a>Account</a>
        </Link>
               </li>
               <li>
               
          <a  onClick={()=>LogoutUser()}>Sign Out</a>
        
               </li>
           </ul>
       </div>
    </div>
    
        
    )
}
export default Account