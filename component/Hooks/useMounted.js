import  {useEffect,useState}from 'react'
import  {useStateContext} from "../HboProvider/hboprovider"


export const useMounted=()=>{
    const[hasMounted,setHasMounted]=useState(false)
    const globalState= useStateContext()
    
  
    useEffect(() => {
       
       setHasMounted(true)

    }, [])
    return {hasMounted}
}