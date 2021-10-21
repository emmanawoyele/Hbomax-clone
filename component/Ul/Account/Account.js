import Link from "next/link"
import { useStateContext} from "../../HboProvider/hboprovider"
import { useState } from "react"
import { useEffect } from "react"
import router from "next/router"
import ls from "local-storage"

 function Account(props) {
     console.log({props})
    const globalState =useStateContext()
   
    const localstorgeData =globalState.WishList
console.log({localstorgeData})


const LogoutUser=(id)=>{
console.log({id})
ls.remove('users')
router.push('/')
}


  const watchlist=(url)=>{
      console.log({url})
    router.push(url)
    console.log({nonense:router.push(url)})
     globalState.setAccountOpen((prev) => !prev)
  }

    const addwishList=()=>{
        let loopdata;
        if(localstorgeData !==null){
    loopdata= localstorgeData.map((WishlistData)=>{
return  <div key={WishlistData.mediaId} className="account__watch-video"> 
 <img src={`https://image.tmdb.org/t/p/original ${WishlistData.MediaBackdrop}`}/>
 <div className="account__watch-overlay">
<div className="account__watch-buttons">
<div className="account__watch-circle" onClick={()=>watchlist(`/${WishlistData.mediaType}/${WishlistData.mediaId}`)}>
    <i className="fas fa-play"/>
</div>
<div className="account__watch-circle" onClick={()=>globalState.RemoveMovieList(WishlistData.mediaId)} >
    <i className="fas fa-times"/>
</div>
</div>
</div>
</div>
        })
  return  loopdata
}else{
    return <div></div>
}
 
    }


    useEffect(() => {
        if(globalState.accountOpen){
            document.body.style.overflowY="hidden"

        }else{
           document.body.style.overflowY="auto" 
        }
    }, [globalState.accountOpen])
//     const loopComp=(comp,digit)=>{
//         let thumbNails=[]
//         for(let index =1; index<=digit;index++){
//             thumbNails.push(comp)
//         }
//   return thumbNails
//       }
     
    return (<div className={`account ${globalState.accountOpen?'account--active':''}`}>
        <div className="account__details">
        <div className="account__title"> My list</div>
            <div className="account__watch-list"> 
           {addwishList()}
         
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
               <Link href="/">
          <a  onClick={()=>LogoutUser()}>Sign Out</a>
        </Link>
               </li>
           </ul>
       </div>
    </div>
        
    )
}
export default Account