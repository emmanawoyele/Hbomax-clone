import Head from 'next/head'
import { useStateContext } from '../component/HboProvider/hboprovider'
import { useRouter } from 'next/router'
import ls from "local-storage"
import {v4} from 'uuid'
import Login from '../component/Ul/login/login'
import Review from '../component/Ul/Review/review'



export default function CreateUser() {
 
 
  return (
    <div>
<Review/>
     </div>
  )
}
