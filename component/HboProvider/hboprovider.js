
import React,{useContext,useState} from 'react';

  
  export const StateContext = React.createContext() 

export function useStateContext(){
    return useContext(StateContext)
}
export function HBOProvider({children}){
const[user,setUser]=useState('')

const defaultImage='https://randomuser.me/api/portraits/men/91.jpg' 

const createUserAction=(e)=>{
setUser(e.target.value)
console.log(user)
}


const[sideNavOpen,setSideNavOpen]=useState(false)
const[accountOpen,setAccountOpen]=useState(false)
const[headerbackground,setheaderbackground]=useState(false)
const[searchOpenAction,setsearchOpenAction]=useState(false)
const[searchMovie,setsearchMovieAction]=useState(null)
    return(
    
        <StateContext.Provider value={{
           user,createUserAction,defaultImage,sideNavOpen,
           setSideNavOpen,accountOpen,setAccountOpen,
           searchOpenAction,setsearchOpenAction,
           searchMovie,setsearchMovieAction
        }}>
        
        {children}
        </StateContext.Provider>
    )
}