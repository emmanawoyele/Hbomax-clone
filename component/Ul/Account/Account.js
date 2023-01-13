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
console.log(localstorageToken)
   await axios({
        
        method: "post",
        url: "https://crowded-turtleneck-eel.cyclic.app/create/logout",
    
        headers:{
        Authorization:"Bearer " + localstorageToken,
        
        }
      }).then((response)=>{
      console.log({onethenthisfuck:response})
        if(response.status===200){
        ls.remove('users')
        ls.remove('token')
        ls.remove('list')


          return router.push('/login')
        }
       
      
      }).catch((e)=>{
console.log({e})
      });


}


  
// 
//     const AddwishList=()=>{
//         console.log(localstorgeData)
//         let loopdata;
//         if(localstorgeData !==null){
//     loopdata= localstorgeData.map((WishlistData)=>{
// return  <div key={WishlistData.mediaId} className="account__watch-video"> 
//  <Image width={200} height={200}src={`https://image.tmdb.org/t/p/original ${WishlistData.MediaBackdrop}`} alt={WishlistData.movieTitle}></Image>
//  <div className="account__watch-overlay">
// <div className="account__watch-buttons">
// <div className="account__watch-circle" onClick={()=>watchlist(`/${WishlistData.mediaType}/${WishlistData.mediaId}`)}>
//     <i className="fas fa-play"/>
// </div>
// <div className="account__watch-circle" onClick={()=>globalState.RemoveMovieList(WishlistData.mediaId)} >
//     <i className="fas fa-times"/>
// </div>
// </div>
// </div>
// </div>
//         })
//   return  loopdata
// }else{
//     return <div className="account__watch-video"></div>
// }
 
//     }


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