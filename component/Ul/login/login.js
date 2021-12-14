import Head from 'next/head'
import { useStateContext } from '../../HboProvider/hboprovider'
import { useState,useEffect } from 'react'
import ls from "local-storage"
import next from 'next'
import router, { useRouter } from 'next/router'
import { useMounted } from '../../Hooks/useMounted'
import Image from 'next/image'


export default function Login() {
  const globalState= useStateContext()
  const[loadingUsers, setloadingUsers]=useState(false)
  let users= ls("users")!==null?ls("users"):[]
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
  
return ( 
<div  onClick={()=>selectUser(user.id)} key={index}className="login-user__user-box">
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
           <div className="login-user__adult" onClick={createUser}>Creat User</div>
           <div className="login-user__kid">Add Kid</div>
         </div>
    </div>
    </div>
  )
}
