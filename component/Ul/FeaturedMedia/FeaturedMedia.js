
import { useStateContext } from "../../HboProvider/hboprovider";

import Link from 'next/link';
import { useEffect,useRef,useState } from "react";









export default function FeaturedMedia(props) {
    const[getwidth,setwidth]=useState('')
    const globalState =useStateContext()

    const windowRef = useRef(null);
let width;
  useEffect(() => {
   width= windowRef.current = window;
    if(windowRef.current >500){
        setwidth('container')

    }
    console.log(getwidth)
  }, []);
  
  
   
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
 
    const props_Date =new Date(props.release_date)
 
       let getThis_month= props_Date.getMonth()
 

const newdate = new Date()

if( getThis_month===newdate.getMonth()){
    return <span style={{background:"red",padding:"5px"}}>New</span>
}else{
    return null
}

   }

    const ShowMedia = () => {
    
        if (props.type === "front" ||props.type ==="single") {
         return  <iframe className="featured_media__video " width="100%" height="100%" src={props.MediaUrl} title="YouTube video player" allow="accelerometer ;  clipboard-write; encrypted-media; gyroscope;picture-in-picture " allowFullScreen></iframe>

        } else {
            return <img className="featured_media__img" src={props.MediaUrl} alt={props.movieTitle} />
        }
    }

    return (<div  onClick={closebody}className={`featured_media ${props.type==="single"? "featured-media__single":""}`} >
          {ShowMedia()}
          
        <div className="featured_media__bg">
          
            <div className="featured_media__container">
                <div className="featured_media__title">{props. movieTitle}</div>
                <div className="featured_media__playing">NOW PLAYING {getwidth}</div>

                <div className={`featured_media__location ${props.type==='single' ? 'hide_class' :""}`}>Release Date:  {` ${props.release_date === undefined ?"" :props.release_date}`} <span style={{fontSize:"20px"}}>{idHandler()}</span> </div>
           
                <div className="featured_media__buttons">
                    <div className="featured_media__play-btn" onClick={()=>clickplayHandle(`/${props.mediaType}/${props.mediaId}`)}>
                        <i className="fas fa-play" />
                    </div>
                    <div className={`featured_media__play-btn ${props.type==="front"?'hide_class' :""}`} onClick={()=>{globalState.WishlistHandler(props)}}>
                        <i className="fas fa-plus" />
                    </div>
                    <div className="featured_media__info-btn" >
                   
                            <Link href={ `/${props.mediaType === 'tv' ? 'tv' : 'movie'}/review/${props.mediaType=== '/'? props.globalState.randomid.id:props.mediaId}`} >
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