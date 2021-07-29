import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import {useStateContext} from '../component/HboProvider/hboprovider'
import Login from '../component/Ul/login/login'




export default function Home() {
  const router =useRouter()
  const globalState= useStateContext()
  useEffect(() => {
   const loggedIn =false;
   if(loggedIn ===false){
router.push('/create')
   }
  }, [])

  return (
    <div>
<Login/>
    
    </div>
  )
}
