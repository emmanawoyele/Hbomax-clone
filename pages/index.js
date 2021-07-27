import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
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
           <div className="login-user__user-box">
             <img className="login-user__user-img"  src="https://randomuser.me/api/portraits/men/91.jpg"/>
             <div className="login-user__user">Sango</div>
           </div>
         </div>
         <div className="login-user__buttons">
           <div className="login-user__adult">Add Adult</div>
           <div className="login-user__kid">Add Kid</div>
         </div>
    </div>
    </div>
  )
}
