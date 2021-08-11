import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import {useStateContext} from '../component/HboProvider/hboprovider'
import Login from '../component/Ul/login/login'
import HomePage from './home'
import AuthCheck from '../component/AuthCheck/AuthCheck'



export default function Home() {
  const router =useRouter()
  const globalState= useStateContext()
  useEffect(() => {
   
   
  }, [])

  return AuthCheck (
    <div  >
<HomePage/>
    
    </div>
  )
}
