import Head from 'next/head'
import { useStateContext } from '../../HboProvider/hboprovider'
import { useState,useEffect } from 'react'
import ls from "local-storage"
import next from 'next'
import router, { useRouter } from 'next/router'
import { useMounted } from '../../Hooks/useMounted'
import Image from 'next/image'
import LoginUser from "../TestingNewLogin/Login_2"


export default function Login() {
  const globalState= useStateContext()
  const[loadingUsers, setloadingUsers]=useState(false)
  let users= ls("user")!==null?ls("users"):[]
  let {hasMounted}=useMounted()
  
  useEffect(() => {
    if(users<1){
      setloadingUsers(false)
    }
    console.log('load effect', users)
  }, [])
console.log("declared users",users)


const selectUser=(id)=>{
ls('activeUid',id)
router.push('/')
}


const showUsers=()=>{
  if(!loadingUsers){
return users.map((user,index)=>{
  console.log(user)
return ( 
<div  onClick={()=>selectUser(user._id)} key={index}className="login-user__user-box">
<Image className="login-user__user-img" width={125} height={125}  src="https://randomuser.me/api/portraits/men/91.jpg" alt={user.id}/>
<div className="login-user__user">{user.user}</div>
</div>)
})
  }
}

const createUser=()=>{
  router.push('/create')
}
  return (
<>
    <div>
      <LoginUser/>
    </div>
    </>
  )
}
