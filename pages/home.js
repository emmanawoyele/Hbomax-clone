import Head from 'next/head'
import MainLayout from '../component/Layouts/MainLayout'
import FeaturedMedia from '../component/Ul/FeaturedMedia/FeaturedMedia'
import AuthCheck from '../component/AuthCheck/AuthCheck'
import MediaRow from '../component/Ul/MediaRow/MediaRow'


export default function Homeview(props) {
  return AuthCheck (
 <MainLayout>
   
   <FeaturedMedia/>
   <MediaRow title="Movies" type="large-v"/>
   <MediaRow title="Series" type="small-h"/>
   <MediaRow title="Action"type="small-v"/>
   <MediaRow title="Animation" type="large-h"/>
   <MediaRow title="Horror" type="large-v"/>
   <MediaRow title="Scific" type="large-v"/>
<div>
</div>
</MainLayout>


  )
}
