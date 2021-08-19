import Head from 'next/head'
import MainLayout from '../component/Layouts/MainLayout'
import FeaturedMedia from '../component/Ul/FeaturedMedia/FeaturedMedia'
import AuthCheck from '../component/AuthCheck/AuthCheck'
import MediaRow from '../component/Ul/MediaRow/MediaRow'
import LazyLoad from 'react-lazyload';
import PlaceHolder from '../component/Ul/PlaceHolder/PlaceHolder'

export default function Homeview(props) {
  return AuthCheck (
 <MainLayout>
  
   <FeaturedMedia/>


   <LazyLoad offset={-200}placeholder={<PlaceHolder title="Drama"  type="small-h"/>}>
     <MediaRow 
     title="Drama" 
     endpoint="discover/movie?with_genres=18&primary_release_year=2021"
      type="small-h"
       />
   </LazyLoad>

   <LazyLoad offset={-400} placeholder={<PlaceHolder title="Series" type="small-h"/>}>  
    <MediaRow endpoint="discover/movie?tv" title="Series" type="small-h"/>
    </LazyLoad>
   <LazyLoad offset={-400} placeholder={<PlaceHolder title="Crime"  type="small-h"/>}>   <MediaRow endpoint="discover/movie?with_genres=80&primary_release_year=2021" title="Crime" type="small-h"/></LazyLoad>
   <LazyLoad offset={-400} placeholder={<PlaceHolder title="Action" type="small-v"/>}> 
    <MediaRow  
    endpoint="discover/movie?with_genres=28&primary_release_year=2021" 
    title="Action" 
    type="small-v"/>
    </LazyLoad>
   <LazyLoad offset={-400} placeholder={<PlaceHolder title="Animation" type="small-h"/>}>  
   <MediaRow
    endpoint="discover/movie?with_genres=16&primary_release_year=2021" 
    title="Animation"
     type="small-h"/>
     </LazyLoad>
   <LazyLoad offset={-400} placeholder={<PlaceHolder title="Horror" type="large-v"/>}>  
    <MediaRow endpoint="discover/movie?with_genres=27&primary_release_year=2021" 
    title="Horror" 
    type="large-v"/>
    </LazyLoad>
   <LazyLoad offset={-200} placeholder={<PlaceHolder title="Scific" type="large-v"/>}>  
     <MediaRow  endpoint="discover/movie?with_genres=878&primary_release_year=2021" 
     title="Scific"
      type="large-v"/>
      </LazyLoad>

<div>
</div>
</MainLayout>


  )
}
