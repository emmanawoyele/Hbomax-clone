import Head from 'next/head'
import MainLayout from '../../component/Layouts/MainLayout'
import FeaturedMedia from '../../component/Ul/FeaturedMedia/FeaturedMedia'
import AuthCheck from '../../component/AuthCheck/AuthCheck'
import MediaRow from '../../component/Ul/MediaRow/MediaRow'
import LazyLoad from 'react-lazyload';
import PlaceHolder from '../../component/Ul/PlaceHolder/PlaceHolder'
import ShuffleArray from '../../component/Utilities/shuffleArray'
import axios from 'axios'
import GenreNav from '../../component/Ul/GenreNav/GenreNav'
import { useEffect } from 'react'
import { useStateContext } from "../../component/HboProvider/hboprovider"
import CastInfo from '../../component/Ul/CastInfo/CastInfo'







export default function Homeview(props) {
 
  const globalState =useStateContext()

const showRandomMedia=()=>{
  let thumbs;
  
  return props.genresData.map((sections)=>{
    
thumbs=ShuffleArray(globalState.thumbTypes)[0]
return <LazyLoad key={sections.id} 
offset={-200} 
placeholder={<PlaceHolder title={sections.name} 
type={thumbs} />}>
<MediaRow
  key={sections.id}
  title={sections.name}
  endpoint={`discover/${props.query.mediaType}?with_genres=${sections.id}&primary_release_year=2021`}
  type={thumbs}
  mediaType={props.query.mediaType !=='tv' ?'movie':'tv'} 
/>
</LazyLoad>

  })
}
  return AuthCheck(
    <MainLayout>

      <FeaturedMedia
      mediaType={props.query.mediaType}
      mediaId={props.featuredData.id}
        linkUrl={`/${props.query.mediaType} /${props.featuredData.id}`}
        type="single"
        movieTitle={props.query.mediaType ==='movie'?props.featuredData.original_title:props.featuredData.name}
        MediaUrl={`https://image.tmdb.org/t/p/original${props.featuredData.backdrop_path}`}
      />
         <GenreNav mediaType={props.query.mediaType !=='tv' ?'movie':'tv'} genresData={props.genresData}/>
     {showRandomMedia()}

     <CastInfo credits={`${props.query.id}/credits`} mediaType={props.query.mediaType}/> 
     {/* <CastInfo />  */}

     
    
    </MainLayout>


  )
}

export async function getServerSideProps(context) {
  // genresData generate different genre
  // feautredData generates movies
 

  let genresData;
  let featuredData;
  try{
 genresData= await axios.get(`https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key=${process.env.PRIVATE_API_KEY}&language=en-US`);

 featuredData = await axios.get(`https://api.themoviedb.org/3/discover/${context.query.mediaType}?primary_release_year=2021&api_key=${process.env.PRIVATE_API_KEY}&language=en-US`);

  }catch(error){
 console.log("error")
 console.log(error)
  }

   return {
   
     props: {
      genresData:genresData.data.genres,
      featuredData:ShuffleArray(featuredData.data.results)[0],
       query:context.query
     } // will be passed to the page component as props
   };
   
 }


