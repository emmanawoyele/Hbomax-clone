import Head from 'next/head'
import MainLayout from '../component/Layouts/MainLayout'
import FeaturedMedia from '../component/Ul/FeaturedMedia/FeaturedMedia'
import ForYouList from '../component/Ul/ForYouList/ForYouList'
import Justadded from '../component/Ul/JustAdded/JustAdded'
import PosterView from '../component/Ul/PosterView/PosterView'
import ExploreCollection from '../component/Ul/ExploreCollection/ExploreCollection'

export default function Homeview(props) {
  return (
 <MainLayout>
   <FeaturedMedia/>
   <ForYouList/>
   <Justadded/>
   <PosterView/>
   <ExploreCollection/>
<div>
</div>
</MainLayout>


  )
}
