import { useEffect,useState } from "react";
import { useRouter } from "next/router";
import { useMounted } from "../Hooks/useMounted";
import ls from "local-storage";
import  {useStateContext} from "../HboProvider/hboprovider"

const AuthCheck=(component)=>{
 
  
    const globalState= useStateContext()
    
    const[UserLoggedIn,setUserLoggedIn]=useState(false)
    const router=useRouter();
    const {hasMounted} =useMounted()
   
    let activeUId =ls("activeUId")
    let users = ls('users')!==null ?ls('users'):[]
    useEffect(() => {
        if(activeUId ===null && users.length<1){
            router.push('/login')
        }else if(users.length >1 &&activeUId!==null ){
            return hasMounted ?(component):(<div className="create-user">
                <div className="create-user__top">
                    <div className="create-user__logo"></div>
                </div>

            </div>)
        }else{
            <div className="create-user">
                <div className="create-user__top">
                    <div className="create-user__logo"></div>
                </div>

            </div>
        }
    }, [])
    return component

}
export default AuthCheck