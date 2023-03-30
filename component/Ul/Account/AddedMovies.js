import axios from "axios";
import { useEffect } from "react";
import { useStateContext } from "../../HboProvider/hboprovider";
import ls from "local-storage"
import { useState } from "react";
import Image from "next/image"
import router from "next/router"

export default  function AddwishList(){
    
    let localstorageToken= ls("token")
    const globalState =useStateContext()
    // method to play added movie in my list. 
    const watchlist=(url)=>{
      console.log(url)
    router.push(url)
   
     globalState.setAccountOpen((prev) => !prev)
  }

    useEffect(()=>{
     
        axios({
        
            method: "get",
            url: `https://hboback-end.herokuapp.com/movie/wishlist`,
            // url: `http://localhost:9000/movie/wishlist`,
            headers:{
                "Content-Type": "application/json",
                Authorization:"Bearer " + localstorageToken,
            
            }
        
          }).then((response)=>{
          
            globalState.setmovies(response.data)
           
           
            let mymovieList = ls('list')
           if(mymovieList!==null){
            let itemGet = ls.get('list')
            itemGet.push(globalState.WishList)
         
            
      
           }else{
         
             ls.set('list',globalState.WishList)
            
           }
            
          
          }).catch((e)=>{
      console.log({e})
          });
      
    },[])
    // let localstorgeData =WishList
  
    let loopdata;
 
    if(globalState.favouriteMovies!==[]){
loopdata= globalState.favouriteMovies.map((WishlistData)=>{
  
return  <div key={WishlistData.mediaId} className="account__watch-video"> 
<Image width={200} height={200}src={`https://image.tmdb.org/t/p/original ${WishlistData.MediaBackdrop}`} alt={WishlistData.movieTitle}></Image>
<div className="account__watch-overlay">
<div className="account__watch-buttons">
<div className="account__watch-circle" onClick={()=>watchlist(`/${WishlistData.mediaType}/${WishlistData.mediaId}`)}>
<i className="fas fa-play"/>
</div>
<div className="account__watch-circle" onClick={()=>globalState.RemoveMovieList(WishlistData._id)} >
<i className="fas fa-times"/>
</div>
</div>
</div>
</div>
    })
return  loopdata
}else{
return <div className="account__watch-video"></div>
}

}