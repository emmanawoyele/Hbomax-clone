import Head from 'next/head'
import MainLayout from '../component/Layouts/MainLayout'
import FeaturedMedia from '../component/Ul/FeaturedMedia/FeaturedMedia'
import CastInfo from '../component/Ul/CastInfo/CastInfo'
import AuthCheck from '../component/AuthCheck/AuthCheck'
import MediaRow from '../component/Ul/MediaRow/MediaRow'

export default function Homeview(props) {
  return AuthCheck (
 <MainLayout>
   <FeaturedMedia/>   
 <MediaRow title="More Like This" type="small-v"/>
   <CastInfo/>

<div>
</div>
</MainLayout>


  )
}
