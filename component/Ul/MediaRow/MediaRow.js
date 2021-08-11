import { useState,useEffect } from "react"



 function MediaRow(props) {
     const[loadingData, setLoadingData]=useState(false)

    const loopComp=(comp,digit)=>{
      let thumbNails=[]
      for(let index =1; index<=digit;index++){
          thumbNails.push(comp)
      }
return thumbNails
    }
    const showThumbNails=()=>{
        setTimeout(()=> setLoadingData(true),6000);
        return loadingData
        ? loopComp(<ThumbNails/>,10)
       : loopComp(<SkeletonComp/>,10)

        
    };
   return (<div className={`mediaRow-list ${props.type}`}>
       <h3 className="mediaRow-list__title"> {props.title}</h3>
       <div className="mediaRow-list__thumbnails"> 

    {showThumbNails()}
       </div>
   </div>
   )
}
const ThumbNails=()=>{
    return (
        <div className="mediaRow-list__thumbnail"> 
        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362"/>
        <div className="mediaRow-list__top-layer">
            <i className="fas fa-play"></i>
        </div>
        </div>

    )
}
const SkeletonComp=()=>{
    return (
        <div className="mediaRow-list__thumbnail-skeleton"> 
        <div className="mediaRow-list__thumbnail--skeleton-img"></div> 
               </div> 

    )
}
export default MediaRow