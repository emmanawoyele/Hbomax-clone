import { useEffect,useState } from "react";
import { useRouter } from "next/router";
import { useMounted } from "../Hooks/useMounted";
import ls from "local-storage";
const AuthCheck=(component)=>{
    const[UserLoggedIn,setUserLoggedIn]=useState(false)
    const router=useRouter();
    const {hasMounted} =useMounted()
    let activeUId =ls("activeUId")
    let users = ls('users')!==null ?ls('users'):[]
    useEffect(() => {
        // if(users.length >=1){
        //     router.push('/login')
        // }
        if(activeUId ===null &&users.length<1){
            router.push('/create')
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