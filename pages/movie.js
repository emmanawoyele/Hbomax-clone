import Head from 'next/head'
import MainLayout from '../component/Layouts/MainLayout'
import FeaturedMedia from '../component/Ul/FeaturedMedia/FeaturedMedia'
import ForYouList from '../component/Ul/ForYouList/ForYouList'
import Justadded from '../component/Ul/JustAdded/JustAdded'
import PosterView from '../component/Ul/PosterView/PosterView'
import ExploreCollection from '../component/Ul/ExploreCollection/ExploreCollection'
import CastInfo from '../component/Ul/CastInfo/CastInfo'

export default function Homeview(props) {
  return (
 <MainLayout>
   <FeaturedMedia/>   
     <PosterView/>
   <CastInfo/>

<div>
</div>
</MainLayout>


  )
}
