import Head from 'next/head'
import React,{useContext,useState,useEffect} from 'react'
import { useStateContext } from '../../HboProvider/hboprovider'
import next from 'next'


export default function Login() {
  const test= useStateContext()
  

  return (

    <div className="login-user">
      <div className="login-user__top"> 
      <div className="login-user__logo"/> 
      <span className="login-user__title">Who is Watching?</span>
 
       
      </div>
      {/* user image&name */}
      <div className="login-user__form">
           <div className="login-user__user-box">
             <img className="login-user__user-img"  src="https://randomuser.me/api/portraits/men/91.jpg"/>
             <div className="login-user__user">{test.test}</div>
           </div>
         </div>
         <div className="login-user__buttons">
           <div className="login-user__adult">Add Adult</div>
           <div className="login-user__kid">Add Kid</div>
         </div>
    </div>

  )
}
