
import MainLayout from "../../../component/Layouts/MainLayout";
import MediaRow from "../../../component/Ul/MediaRow/MediaRow"
import { useStateContext } from '../../../component/HboProvider/hboprovider'
import Review from "../../../component/Ul/Review/review";
import axios from "axios";



export default function ReviewIdComponent(props) {
    const globalState =useStateContext()

 console.log(props)
  return (
    <MainLayout>
  <Review reviewProps={props.media}/>
    
     {/* <MediaRow></MediaRow>
    */}
     </MainLayout>
  )
}

export async function getServerSideProps(context) {
  // genresData generate different genre
  // feautredData generates movies

  let mediaData;
  let featuredData;
  try{
    mediaData= await axios.get(`https://api.themoviedb.org/3/movie/${context.query.review}?api_key=${process.env.PRIVATE_API_KEY}&language=en-US`);

 featuredData = await axios.get(`https://api.themoviedb.org/3/discover/${context.query.mediaType}?primary_release_year=2021&with_genres=${context.query.genre_id}&api_key=${process.env.PRIVATE_API_KEY}&language=en-US`);

  }catch(error){
 console.log("error")
 console.log(error)
  }


   return {
     props: {
      media:mediaData.data,
      // featuredData:ShuffleArray(featuredData.data.results)[0],
       query:context.query
     } // will be passed to the page component as props
   };
   
 }
