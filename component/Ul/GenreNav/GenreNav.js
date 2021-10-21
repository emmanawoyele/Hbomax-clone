import Link from 'next/link'
import { useStateContext } from '../../HboProvider/hboprovider'
import React,{useState} from 'react';




 function GenreNav(props) {
    
     const globalState =useStateContext()
     const[activeNav,setActiveNav]=useState(false)
     setTimeout(()=>setActiveNav(true)
     ,100)
    return (<div>
<div className="side-nav__close-btn" onClick={()=>globalState.setSideNavOpen((prev)=>!prev
       )}>
    <i className="fas fa-times"  />
</div>
        <ul  className={`genre-nav ${activeNav ? 'genre-nav--active':''}`}>

       
             
            <GenreList genresData={props.genresData} mediaType={props.mediaType}/>
          
        </ul>
        
    </div>
        
    )
}
const GenreList=(props)=>{
    
return props.genresData.map((list)=>{

    return ( 
         <li key={list.id} >   
       <Link  href={`/${props.mediaType}/genre/${list.id}`}>
            <a>{list.name}</a>
            </Link>
       
    </li>)
})
}
export default GenreNav