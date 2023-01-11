import Head from 'next/head'
import { useStateContext } from '../../HboProvider/hboprovider'
import { useRouter } from 'next/router'
import ls from "local-storage"
import {v4} from 'uuid'
import Image from 'next/image'
import axios from 'axios'
import React from 'react'
import PropTypes from 'prop-types';
import { useEffect ,useRef} from 'react'
import Link from 'next/link'





export default function LoginUser() {
    const router=useRouter()
    const userRef=useRef()
    const globalState= useStateContext()
 


useEffect(()=>{
userRef.current.focus();
},[])

    const SendFormDataHandler=async(e)=>{
      
      let  users=[],
       user;
       let storeTokens=[],
       stored_Token;
   await axios({
          
          method: "post",
          url: "https://crowded-turtleneck-eel.cyclic.app/create/login",
          data:  globalState.user_login,
          headers:{  "Content-Type": "application/json"},
        }).then((response)=>{
          if(response.status===201){
           globalState.setUserInfo(response.data)
           
           globalState.setToken(response)
         
            if(ls("users")||("token")>1){
            user= response.data.user
            users.push(user)
            stored_Token=response.data.token
            storeTokens.push(stored_Token)
         ls("users",users)
           return router.push('/userDash')
            }else{
             ls("users")
             ls("token")
             user= response.data.user
            stored_Token=response.data.token
            storeTokens.push(stored_Token)

         users.push(user)

                  ls('users',users)
                  ls('token',storeTokens)
             return router.push('/userDash')
             
            }
           
            
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
          console.log({error:e})
  return globalState.setErormessage(e.response.data)
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
    console.log(globalState.userInfo)
    console.log({my:globalState.token})
    return (
      <div>
        {/* container */}
      <div className="create-user">
        <div className="create-user__top"> 
        <div className="create-user__logo"/> 
        <span className="create-user__title">User Login</span>
        <Image width={125} height={125} className="create-user__user-img"  src={globalState.defaultImage} alt="image"/>

         
        </div>
        {/* user image&name */}
        <form method="post"  >
        <div className="create-user__form">
      
               <div className="create-user__input-group">
            
                   <input type="email" ref={userRef}  name="email" value={globalState.user_login.email}  className="create-user__inputText" onChange={globalState.createUserLoginAction}/>
                   <label>Password</label>
                   <input type="password"  name="password" value={globalState.user_login.password} autoComplete="on" className="create-user__inputText" onChange={globalState.createUserLoginAction}/>
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
            <div>
                <p>{globalState.errorMessage}</p>
            </div>
           </div>
           <div className="create-user__buttons">
             <button type='submit' className="create-user__cancel">Cancel</button>
             <div className="create-user__save"  onClick={()=>SendFormDataHandler()}>Save</div>
           </div>
           </form>
           <div className="create-user__register"  >
           <span>
            New to Moviethriller? <Link href="/create">
   <a>Register</a>
        </Link>      
            </span>
        </div>

      </div>
      </div>
    )
  }
  