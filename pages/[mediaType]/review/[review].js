
import MainLayout from "../../../component/Layouts/MainLayout";

import { useStateContext } from '../../../component/HboProvider/hboprovider'
import Review from "../../../component/Ul/Review/review3";
import axios from "axios";
import Backdrop from "../../../component/Ul/Backdrop/Backdrop";
import PostModal from "../../../component/Ul/PostInputModal/PostInputModal";
import ls from "local-storage";
import { useEffect } from "react";

let localstorageToken= ls("token")



export default function ReviewIdComponent(props) {


    const globalState =useStateContext()

useEffect(()=>{
  
 globalState.setMovieId(props)
})
  return (
    
    <MainLayout>

     <Review reviewProps={props.media}/>

 
  
     </MainLayout>
  )
}

export async function getServerSideProps(context) {
  // genresData generate different genre
  // feautredData generates movies
 

  let mediaData;
  let featuredData;
 let UpdatingUsersComments;
  try{
    mediaData= await axios.get(`https://api.themoviedb.org/3/${context.query.mediaType}/${context.query.review}?api_key=${process.env.PRIVATE_API_KEY}&append_to_response=credits&language=en-US`);
    featuredData = await axios.get(`https://api.themoviedb.org/3/discover/${context.query.mediaType}?primary_release_year=2021&with_genres=${context.query.genre_id}&api_key=${process.env.PRIVATE_API_KEY}&language=en-US`);


  }catch(error){
 console.log("error")
 console.log(error)
  }


   return {
     props: {
      media:mediaData.data,
       query:context.query
     } // will be passed to the page component as props
   };
   
 }
