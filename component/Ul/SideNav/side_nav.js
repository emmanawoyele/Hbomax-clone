import Link from 'next/link'
import { useStateContext } from '../../HboProvider/hboprovider'
import { useEffect } from 'react'

 function SideNav(props) {
     const globalState =useStateContext()
     useEffect(() => {
         if(globalState.sideNavOpen){
             document.body.style.overflowY="hidden"

         }else{
            document.body.style.overflowY="auto" 
         }
     }, [globalState.sideNavOpen])
    return (<div className={`side-nav ${globalState.sideNavOpen?'side-nav--active':''}`}>
<div className="side-nav__close-btn" onClick={()=>globalState.setSideNavOpen((prev)=>!prev
       )}>
    <i className="fas fa-times"  />
</div>
        <ul className="side-nav__main">

       
            <li onClick={()=>globalState.setSideNavOpen((prev)=>!prev
       )}>
                <Link href="/">
                    <a  className="active">Home</a>
                </Link>
            </li>
            <li onClick={()=>globalState.setSideNavOpen((prev)=>!prev
       )}>
                <Link href="/tv">
                    <a className="">Tv</a>
                </Link>
            </li>
            <li onClick={()=>globalState.setSideNavOpen((prev)=>!prev
       )}>
                <Link href="/movie">
                    <a className="">Movies</a>
                </Link>
            </li>
          
        </ul>
      
    </div>
        
    )
}
export default SideNav