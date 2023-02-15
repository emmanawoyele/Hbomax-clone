import Head from 'next/head'
import { useStateContext } from '../component/HboProvider/hboprovider'
import { useRouter } from 'next/router'
import { useEffect,useRef,useState } from 'react'
import{faCheck,faTimes,faInfoCircle} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import ls from "local-storage"
import {v4} from 'uuid'
import Image from 'next/image'
import axios from 'axios'
import React from 'react'
import Link from 'next/link'





export default function CreateUser() {
  const[validateName, setvalidateName]=useState(false)
  const router=useRouter()
  const globalState= useStateContext()
  const User_REGEX=/^[a-z]{1}[a-z0-9_]{3,23}$/;

  const SendFormDataHandler=async(e)=>{
    var bodyFormData = new FormData();
    bodyFormData.append('name',globalState.InformationUser.name);
    bodyFormData.append('username',globalState.InformationUser.username);
    bodyFormData.append('email',globalState.InformationUser.email);
    bodyFormData.append('password',globalState.InformationUser.password);
    console.log(bodyFormData)
    
  axios({
        
        method: "post",
        url: "https://hboback-end.herokuapp.com/create",
        // url: "http://localhost:8000/create",

        data: globalState.InformationUser,
      headers:{   'Content-Type': 'application/json' }
      }).then((response)=>{
        if(response.status===201){
          globalState.setUserInfo(response.data)
         return router.push('/login')
        
        }else{
          return null
        }
      
    //     let users=[],
    //  user;
    //     if(ls("users")>1){
    //        user={
    //         id:globalState.userInfo._id,
    //         user:globalState.userInfo,
    //         myListID:[],
    //       }
    //       users.push(user),
    //       ls('users',users)
    //     }else{
    //       users=ls("users")
    //       user={
    //             id:globalState.user._id,
    //             user:globalState.user,
    //             myListID:[]
    //           }
    //           users.push(user)
    //           ls('users',users)
             
             
    //     }
      
      }).catch((e)=>{
console.log({e})
      });
      
   
}


  // const saveUser=()=>{

  //  let users=[],
  //   user;
  //  if(ls('users')<1 ){
     
  //    user={
  //      id:v4(),
  //      user:globalState.user,
  //      myListID:[]
  //    }
  //    users.push(user)
  //    ls('users',users)
  //  }
  //  else{
  //    users=ls('users')
  //   user={
  //     id:v4(),
  //     user:globalState.user,
  //     myListID:[]
  //   }
  //   users.push(user)
  //   ls('users',users)
  //  }
  //  router.push('/login')


  // }
  return (
    <div>
      {/* container */}
    <div className="create-user">
      <div className="create-user__top"> 
      <div className="create-user__logo"/> 
      <span className="create-user__title">Create A User Account</span>
      <Image width={125} height={125} className="create-user__user-img"  src={globalState.defaultImage} alt="image"/>

       
      </div>
      {/* user image&name */}
      <form method="post"  >
      <div className="create-user__form">
    
             <div className="create-user__input-group">
                 <label htmlFor='create-user__inputText'>Name</label>
                 <input type="text"  name="name" value={globalState.InformationUser.name} className="create-user__inputText" onChange={globalState.createUserAction} autoComplete="off"/>
                 <label>UserName</label>
                 <input type="text"  name="username" value={globalState.InformationUser.username}  className="create-user__inputText" onChange={globalState.createUserAction}/>
                 <label>email</label>
                 <input type="email"  name="email" value={globalState.InformationUser.email}  className="create-user__inputText" onChange={globalState.createUserAction}/>
                 <label>Password</label>
                 <input type="password"  name="password" value={globalState.InformationUser.password}  className="create-user__inputText" onChange={globalState.createUserAction}/>
                <div  className="create-user__colors">
                                <div className="create-user__color create-user__color--active" style={{
                     background: "rgb(2,0,36)",
                     background: "linear-gradient(234deg, rgba(2,0,36,1) 0%, rgba(82,151,31,0.9252743333661589) 34%, rgba(0,212,255,1) 100%)"
                 }}/>
                   <div className="create-user__color create-user__color" style={{
                    background: 'rgb(2,0,36)',
                    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'
                 }}/>
                   <div className="create-user__color create-user__color" style={{
                     background: 'rgb(2,0,36)',
                     background: '  radial-gradient(circle, rgba(153,153,153,1) 42%, rgba(152,64,64,1) 77%)'
                 }}/>
                   <div className="create-user__color create-user__color" style={{
                     background: 'rgb(153,153,153)',
                     background: 'linear-gradient(234deg, rgba(0,86,8,0.6115488431700805) 0%, rgba(231,20,32,0.9925012241224614)'
                 }}/>
                 </div>
             </div>
          
         </div>
         <div className="create-user__buttons">
           <button type='submit' className="create-user__cancel">Cancel</button>
           <div className="create-user__save"  onClick={()=>SendFormDataHandler()}>Save</div>
         </div>
         </form>
         <div className="create-user__register"  >
           <span>
            Already have an account? <Link href="/login">
   <a>Login</a>
        </Link>      
            </span>
        </div>
    </div>
    </div>
  )
}
