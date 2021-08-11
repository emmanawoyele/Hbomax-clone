import Head from 'next/head'
import { useStateContext } from '../component/HboProvider/hboprovider'
import { useRouter } from 'next/router'
import ls from "local-storage"
import {v4} from 'uuid'



export default function CreateUser() {
  const router=useRouter()
  const globalState= useStateContext()
  const saveUser=()=>{
   let users=[],
   user;
   if(ls('users')<1){
     user={
       id:v4(),
       user:globalState.user,
       myListID:[]
     }
     users.push(user)
     ls('users',users)
   }else{
     users=ls('users')
    user={
      id:v4(),
      user:globalState.user,
      myListID:[]
    }
    users.push(user)
    ls('users',users)
   }
   router.push('/login')


  }
  return (
    <div>
      {/* container */}
    <div className="create-user">
      <div className="create-user__top"> 
      <div className="create-user__logo"/> 
      <span className="create-user__title">Who is Watching</span>
 
       
      </div>
      {/* user image&name */}
      <div className="create-user__form">
    
             <img className="create-user__user-img"  src={globalState.defaultImage} alt="image"/>
             <div className="create-user__input-group">
                 <label>Name</label>
                 <input type="text" value={globalState.user}className="create-user__inputText" onChange={globalState.createUserAction}/>
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
           <div className="create-user__cancel">Cancel</div>
           <div className="create-user__save" onClick={saveUser}>Save</div>
         </div>
    </div>
    </div>
  )
}
