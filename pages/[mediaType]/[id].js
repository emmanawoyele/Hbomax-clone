import { useRouter } from 'next/router'
import Head from 'next/head'
import MainLayout from '../../component/Layouts/MainLayout'
import FeaturedMedia from '../../component/Ul/FeaturedMedia/FeaturedMedia'
import CastInfo from '../../component/Ul/CastInfo/CastInfo'
import AuthCheck from '../../component/AuthCheck/AuthCheck'
import MediaRow from '../../component/Ul/MediaRow/MediaRow'
import { useState,useEffect } from 'react'
import axios from 'axios'
import LazyLoad from 'react-lazyload'
import PlaceHolder from '../../component/Ul/PlaceHolder/PlaceHolder'
export default function SingleMediapage(props) {
const[defaultMovies,setDefaultMovies]=useState([])
const[RandomId,setRandomId]=useState([])
function shuffle(array) {
  let currentIndex= array.find((array)=>{

    console.log({behind:array})
    return array.offical!=false
   
  })
  console.log({currentIndex})
   currentIndex= array.length

  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);

    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  console.log({array})
  return array[0];
}
 const CheckRandom=()=>{
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=a5879fe83cace23de294d0b28bb346d5')
      .then((response) => {
        let id=shuffle(response.data.results)
        let key= id.id
        console.log(key)
        setRandomId(id)

   axios.get(`https://api.themoviedb.org/3/movie/${key}/videos?api_key=a5879fe83cace23de294d0b28bb346d5&language=en-US`)
      .then(function (response) {
    console.log({repson:response})
    let filtermovies= response.data.results
 if(filtermovies.length<=0){
   console.log(id.id)
  const video=[{id: "614259b4af85de002a28c33c",
  iso_639_1: "en",
  iso_3166_1: "US",
  key: "ZPKL9aSgbCw",
  name: "Needle in a Timestack (2021 Movie) Teaser Trailer – Leslie Odom Jr., Cynthia Erivo, Orlando Bloom",
  official: true,
  published_at: "2021-09-15 16:07:13 UTC",
  site: "YouTube",
  size: 1080,
  type: "Trailer",}]
   console.log("Your Array is empty")
   setkey(video)
 }else{
console.log({filtermovies})
    setDefaultMovies(shuffle(filtermovies))}
      }).catch((error)=>{
console.log(error.response)
      })
      })
  }, [])
 
 }

  const router = useRouter()


  const checkname=()=>{
    
    if(  props.mediaData.results.length===0){
     
      return   "Games of Throne"
    }else if(props.query.mediaType==='movie' ||'tv'){
       return props.mediaData.results[0].name
    }else{  props.mediaData.results[0].name
    }
  }

  return AuthCheck (

 <MainLayout>

    <FeaturedMedia location={'In theaters and on HBO MAX.SStreaming throught July 23'}
   mediaId={props.query.id}
   mediaType={props.query.mediaType}
   linkUrl={'/movies/id'}
   type="single"
   movieTitle={checkname()}
     MediaBackdrop={`https://image.tmdb.org/t/p/original${props.mediaBackDrop_Path.backdrop_path}`}
    MediaUrl={`https://www.youtube.com/embed/${props.mediaData.results.length==0?"EI0ib1NErqg":props.mediaData.results[0].key}?autoplay=1&loop=1&start=10`}
 
 
     />   
    <LazyLoad offset={-200}placeholder={<PlaceHolder title="Drama"  type="small-h"/>}> 
      <MediaRow 
      update={props.query.id}
     title="Similar To This" 
     mediaType={props.query.mediaType}
     endpoint={`${props.query.mediaType==='movie' ?'movie':'tv'}/${props.query.id}/similar?`}
      type="small-v"
     
       /> 
    </LazyLoad>
    <CastInfo credits={`${props.query.id}/credits`}  mediaType={props.query.mediaType}/> 

<div>
</div>
</MainLayout>


  )
}


export async function getServerSideProps(context) {
  
 let mediaData;
 let check
 let mediaBackDrop_Path
 try{

mediaBackDrop_Path= await axios.get(`https://api.themoviedb.org/3/${context.query.mediaType}/${context.query.id}?api_key=a5879fe83cace23de294d0b28bb346d5&language=en-US`)
mediaData= await axios.get(`https://api.themoviedb.org/3/${context.query.mediaType}/${context.query.id}/videos?api_key=a5879fe83cace23de294d0b28bb346d5&language=en-US`)
check= await axios.get(`https://api.themoviedb.org/3/${context.query.mediaType}/${context.query.id}/videos?api_key=a5879fe83cace23de294d0b28bb346d5&language=en-US`)

 }catch(error){


 }
  return {
  
    props: {mediaData:mediaData.data,
      check:check.data,
      mediaBackDrop_Path: mediaBackDrop_Path.data, 
      query:context.query} // will be passed to the page component as props
  };
  
}