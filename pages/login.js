import Head from 'next/head'
import { useStateContext } from '../component/HboProvider/hboprovider'
import { useRouter } from 'next/router'
import ls from "local-storage"
import {v4} from 'uuid'
import Login from '../component/Ul/login/login'



export default function CreateUser() {
 
 
  return (
    <div>
<Login/>
     </div>
  )
}
