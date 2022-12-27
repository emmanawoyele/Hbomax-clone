import Head from 'next/head'
import MainLayout from '../component/Layouts/MainLayout'
import FeaturedMedia from '../component/Ul/FeaturedMedia/FeaturedMedia'
import AuthCheck from '../component/AuthCheck/AuthCheck'
import MediaRow from '../component/Ul/MediaRow/MediaRow'
import LazyLoad from 'react-lazyload';
import PlaceHolder from '../component/Ul/PlaceHolder/PlaceHolder'
import GenreNav from '../component/Ul/GenreNav/GenreNav'
import { useEffect, useState } from 'react'
import ShuffleArray from '../component/Utilities/shuffleArray'
import { useStateContext } from "../component/HboProvider/hboprovider"
import axios from 'axios'

export default function MediaTypePage(props) {
// console.log({a:props.featuredData})  

const globalState=useStateContext()

console.log(globalState.userInfo)



// This function check GlobalState.randomid original_name and original_title
const checkGlobalRandom=()=>{
  if(globalState.randomid.hasOwnProperty('original_name')){
   return globalState.randomid.original_name
   
  }else if(globalState.randomid.hasOwnProperty('name')){
    globalState.randomid.name
  }else{
    
    // console.log(Object.values(globalState.randomid.original_title).join("").length)
     return globalState.randomid.original_title
  }
  
}


// const checkEmptyKey=()=>{
//   if(globalState.key.key===''){
//     const data=[{adult: false,
//       backdrop_path: "/m4lKVel1iHWdS3i4oaSWBcY5RgU.jpg",
//       genre_ids: (2) [878, 10749],
//       id: 452019,
//       media_type: "movie",
//       original_language: "en",
//       original_title: "Needle in a Timestack",
//       overview: "A devoted husband will stop at nothing to save his marriage when it's destroyed by a time-traveling rival.",
//       popularity: 97.825,
//       poster_path: "/rjGYOszxlaUAe6EC5yZ4Q8l3aVL.jpg",
//       release_date: "2021-10-15",
//       title: "Needle in a Timestack",
//       video: false,
//       vote_average: 6.4,
//       vote_count: 5}]
//     // setKey(129680)
// console.log(data)
//   }
// }
// checkEmptyKey()
// const[key,setKey]=useState[]
let thumbs=ShuffleArray(globalState.thumbTypes)[0]

  useEffect(() => {
    const axios = require('axios')
   const genreData=  axios.get(`https://api.themoviedb.org/3/tv/84958/season/1/videos?api_key=${process.env.PRIVATE_API_KEY}&language=en-US`)
   .then(function (response) {

   }
   )

  }, [])

  
 
  return AuthCheck(
    <MainLayout>

      <FeaturedMedia 

      release_date={` ${globalState.randomid.hasOwnProperty('release_date')?globalState.randomid.release_date:globalState.randomid.first_air_date}`}
        linkUrl={'/movie/id'}
        type="front"
        globalState={globalState}
        movieTitle={checkGlobalRandom()}
        MediaUrl={`https://www.youtube.com/embed/${globalState.key.key}?autoplay=1&loop=1&start=10`}
      />

<LazyLoad offset={-400}
       placeholder={<PlaceHolder title="Series" type={thumbs} />}>
        <MediaRow endpoint="discover/movie?with_genres=80&primary_release_year=2021"
          title="Series"
          mediaType={props.mediaType !=='tv'?'movie':'tv'}
          type={thumbs}
           />
      </LazyLoad>
      <LazyLoad offset={-400}
        placeholder={<PlaceHolder title="Crime" type={thumbs} />}>
        <MediaRow endpoint="discover/movie?with_genres=80&primary_release_year=2021" 
        title="Crime" type={thumbs}
        mediaType={props.mediaType !=='tv'?'movie':'tv'} />
      </LazyLoad>
      <LazyLoad offset={-400} 
      placeholder={<PlaceHolder title="Action" type={thumbs} />}>
        <MediaRow
          endpoint="discover/movie?with_genres=28&primary_release_year=2021"
          title="Action"
          type={thumbs} 
          mediaType={props.mediaType !=='tv'?'movie':'tv'}/>
      </LazyLoad>
      <LazyLoad offset={-400}
       placeholder={<PlaceHolder title="Animation" type={thumbs} />}>
        <MediaRow
          endpoint={"discover/movie?with_genres=16&primary_release_year=2021"}
          title="Animation"
          type={thumbs} 
          mediaType={props.mediaType !=='tv'?'movie':'tv'}/>
      </LazyLoad>
      <LazyLoad offset={-400} 
      placeholder={<PlaceHolder title="Horror" type={thumbs} />}>
        <MediaRow endpoint="discover/movie?with_genres=27&primary_release_year=2021"
          title="Horror"
          type={thumbs} 
          mediaType={props.mediaType !=='tv'?'movie':'tv'}/>
      </LazyLoad>
      <LazyLoad offset={-200}
       placeholder={<PlaceHolder title="Scific" type={thumbs} />}>
        <MediaRow endpoint="discover/movie?with_genres=878&primary_release_year=2021"
          title="Scific"
          type={thumbs}
          mediaType={props.mediaType !=='tv'?'movie':'tv'} />
      </LazyLoad>

      <div>
      </div>
    </MainLayout>


  )
}

export async function getServerSideProps(context) {
 
  // genresData generate different genre
  // feautredData generates movies


let genresData;
let featuredData;
let videoData;
  try{
    genresData= await axios.get(`https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key= ${process.env.PRIVATE_API_KEY}&language=en-US`);
// videoData=await axios.get(`https://api.themoviedb.org/3/tv/84958/season/${}/videos?api_key=${process.env.PRIVATE_API_KEY}`)
 featuredData = await axios.get(`https://api.themoviedb.org/3/discover/${context.query.mediaType}?primary_release_year=2021&api_key=${process.env.PRIVATE_API_KEY}&language=en-US`);
  }catch(error){
 console.log("error")
 console.log({error})
  }


   return {
   
     props: {
      genresData:genresData.data.genres,
      featuredData:featuredData.data.result,
       query:context.query
     } // will be passed to the page component as props
   };
   
 }

