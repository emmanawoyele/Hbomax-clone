import Head from 'next/head'

import { useStateContext } from '../component/HboProvider/hboprovider'
import { useState,useEffect } from 'react'
import ls from "local-storage"
import next from 'next'
import router, { useRouter } from 'next/router'
import { useMounted } from '../component/Hooks/useMounted'
import Image from 'next/image'
import LoginUser from '../component/Ul/TestingNewLogin/Login_2'

export default function Login() {
  const globalState= useStateContext()
  console.log(globalState)
  const[loadingUsers, setloadingUsers]=useState(false)
  let users= ls("users")!==null?ls("users"):[]
  console.log({dash:users})
  let {hasMounted}=useMounted()
  
  useEffect(() => {
    if(users<1){
      setloadingUsers(false)
    }
    console.log('load effect', users)
  }, [])



const selectUser=(id)=>{
ls('activeUId',id)
router.push('/')
}


const showUsers=()=>{
 
  if(!loadingUsers){
    const convertObj=Object.values(users)
    console.log(convertObj)
return convertObj.map((user,index)=>{
  console.log(user)
 
return ( 
<div   onClick={()=>selectUser(user._id)} key={index}className="login-user__user-box">
<Image className="login-user__user-img" width={125} height={125}  src="https://randomuser.me/api/portraits/men/91.jpg" alt={user.id}/>
<div className="login-user__user">{user.name}</div>
</div>)
})
  }
}

const createUser=()=>{
  router.push('/create')
}

  return (

    
    <div>
      {/* container */}
    <div className="login-user">
      <div className="login-user__top"> 
      <div className="login-user__logo"/> 
      <span className="login-user__title">Who is Watching?</span>
 
       
      </div>
      {/* user image&name */}
      <div className="login-user__form">
        {hasMounted ? showUsers():""}
       
         </div>
         <div className="login-user__buttons">
           <div className="login-user__adult" onClick={createUser}>Create User</div>
           <div className="login-user__kid">Add Kid</div>
         </div>
    </div>
    </div>
  )
}
