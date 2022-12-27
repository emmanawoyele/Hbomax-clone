import { useEffect,useState } from "react";
import { useRouter } from "next/router";
import { useMounted } from "../Hooks/useMounted";
import ls from "local-storage";
import  {useStateContext} from "../HboProvider/hboprovider"

const AuthCheck=(component)=>{
    console.log({component})
  
    const globalState= useStateContext()
    
    const[UserLoggedIn,setUserLoggedIn]=useState(false)
    const router=useRouter();
    const {hasMounted} =useMounted()
    console.log("hey1")
    let activeUId =ls("activeUId")
    console.log({activeUId})
    let users = ls('users')!==null ?ls('users'):[]
    useEffect(() => {
        if(activeUId ===null &&users.length<1){
            router.push('/login')
        }
       
        
        if(users.length >1 &&activeUId!==null ){
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