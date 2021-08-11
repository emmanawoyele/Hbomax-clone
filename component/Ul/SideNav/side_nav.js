import Link from 'next/link'
import { useStateContext } from '../../HboProvider/hboprovider'


 function SideNav(props) {
     const globalState =useStateContext()
    return (<div className={`side-nav ${globalState.sideNavOpen?'side-nav--active':''}`}>
<div className="side-nav__close-btn" onClick={()=>globalState.setSideNavOpen((prev)=>!prev
       )}>
    <i className="fas fa-times"  />
</div>
        <ul className="side-nav__main">

          
            <li>
                <Link href="/">
                    <a className="">Home</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className="">Series</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className="">Originals</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className="">Jusdt Added</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className="">Last Chance</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className="">Coming Soon</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className="">Trending Now</a>
                </Link>
            </li>
        </ul>
        <div className="side-nav__divider" />
        <ul className="side-nav__main">

            <li>
                <Link href="/">
                    <a className="">Action</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className="">Animation</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className="">Comedy</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className="">Crime</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className="">Documentaries</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className="">Drama</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className="">Fantasy & Sci-fi </a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className="">Horror</a>
                </Link>
            </li>
        </ul>
    </div>
        
    )
}
export default SideNav