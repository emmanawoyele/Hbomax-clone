import Link from "next/link"
import { useStateContext } from "../../HboProvider/hboprovider"

 function Account(props) {
    const globalState =useStateContext()
    const loopComp=(comp,digit)=>{
        let thumbNails=[]
        for(let index =1; index<=digit;index++){
            thumbNails.push(comp)
        }
  return thumbNails
      }
      if(globalState.sideNavOpen){

      }
    return (<div className={`account ${globalState.accountOpen?'account--active':''}`}>
        <div className="account__details">
        <div className="account__title"> My list</div>
            <div className="account__watch-list"> 
            {loopComp(   <div className="account__watch-video"> 
            <img src="https://cdn.shopify.com/s/files/1/2812/6076/products/Gof_1200x.jpg?v=1619730460"/>
            <div className="account__watch-overlay">
            <div className="account__watch-buttons">
            <div className="account__watch-circle">
                <i className="fas fa-play"/>
            </div>
            <div className="account__watch-circle" >
                <i className="fas fa-times"/>
            </div>
            </div>
            </div>
            </div>,6)}
         
            </div>
        </div>
       <div className="account__menu">
       <ul className="account__main">
           <li>
           <Link href="/">
           <a  className="active">My List</a>
        </Link>
              
           </li>
           </ul>  
           <div className="side-nav__divider"/>
           <ul className="account__main">
               <li>
               <Link href="/">
          <a>Account</a>
        </Link>
               </li>
               <li>
               <Link href="/">
          <a>Sign Out</a>
        </Link>
               </li>
           </ul>
       </div>
    </div>
        
    )
}
export default Account