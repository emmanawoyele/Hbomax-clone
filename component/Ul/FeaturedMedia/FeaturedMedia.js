import { useEffect, useState } from 'react'
import router from "next/router"
import { useStateContext } from "../../HboProvider/hboprovider";
import axios from 'axios';
import Link from 'next/link';
import { get } from 'local-storage';
// import Review from '../Review/review';








export default function FeaturedMedia(props) {
//   console.log({props})
    const globalState =useStateContext()
   
//  console.log({globalrandomid:props.globalState.randomid.id })
//  console.log({globalkey:props.globalState.key.key})
//  console.log({mediaId:props.mediaId})
const closebody=()=>{
   globalState.setAccountOpen(false)
}

const clickedPlay = (props) => {
        
      globalState.WishlistHandler(props)


   
       
    }
// method to hide props type
const hideMoreInfo=()=>{
    if(props.type==="single" ){
     null
    }else{
        return  <div className="featured_media__info-btn" onClick={clickedPlay}>
        MORE INFO
    </div>
    }
}


// method to play traillers
// const clickplayHandle=(props,url)=>{
    
//         axios.get(`https://api.themoviedb.org/3/movie/${props.mediaId}/videos?api_key=a5879fe83cace23de294d0b28bb346d5&language=en-US`)
//         .then(function (response) {
//             let lists= response.data.results   
//            console.log(lists)
//            let a=lists.filter((response)=>{
//           let b=  response.official!==false || response.type==="Trailer"
//           console.log({b})
//               return b
//            })
//        console.log(props)
//     console.log(props.MediaUrl)
//     console.log(props.type)
//     //    console.log(myRouter)
//       router.push(a.key)
//           console.log({a})
         
//         })
  
// }
    
   
const idHandler=()=>{
    console.log({Sango:props})
    const props_Date =new Date(props.release_date)
  console.log({props_Date})
       let getThis_month= props_Date.getMonth()
       console.log(getThis_month)
 

const a = new Date()

if( getThis_month===a.getMonth()){
    return <span style={{background:"red",padding:"5px"}}>New</span>
}else{
    return null
}

   }

    const ShowMedia = () => {
    
        if (props.type === "front" ||props.type ==="single") {
         return  <iframe className="featured_media__video " width="100%" height="100%" src={props.MediaUrl} title="YouTube video player" frameBorder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope;picture-in-picture " allowFullScreen></iframe>

        } else {
            return <img className="featured_media__img" src={props.MediaUrl} alt={props.movieTitle} />
        }
    }

    return (<div  onClick={closebody}className={`featured_media ${props.type==="single"? "featured-media__single":""}`} >
          {ShowMedia()}
          
        <div className="featured_media__bg">
          
            <div className="featured_media__container">
                <div className="featured_media__title">{props. movieTitle}</div>
                <div className="featured_media__playing">NOW PLAYING</div>

                <div className={`featured_media__location ${props.type==='single' ? 'hide_class' :""}`}>Release Date:   {props.release_date} <span style={{fontSize:"20px"}}></span> </div>
           
                <div className="featured_media__buttons">
                    <div className="featured_media__play-btn" onClick={()=>clickplayHandle(`/${props.mediaType}/${props.mediaId}`)}>
                        <i className="fas fa-play" />
                    </div>
                    <div className={`featured_media__play-btn ${props.type==="front"?'hide_class' :""}`} onClick={()=>clickedPlay(props)}>
                        <i className="fas fa-plus" />
                    </div>
                    <div className="featured_media__info-btn" >
                   
                            <Link href={ `/${props.mediaType === 'tv' ? 'tv' : 'movie'}/review/${props.mediaType=== '/'? props.globalState.randomid.id:props.mediaId}`}>
                      <a>  Read Reviews</a>
                        </Link>
    
    </div>
                    {/* {hideMoreInfo()} */}
                </div>
            </div>

        </div>
    </div>

    )
}


export async function getServerSideProps(context) {

    return {

        props:{query: context.query}, // will be passed to the page component as props
    }

}
FeaturedMedia.defaultProps = {
    mediaType: '/'
}