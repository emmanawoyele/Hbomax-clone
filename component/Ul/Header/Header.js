import Account from "../Account/Account";
import SearchModal from "../searchModal/searchModal";
import { useStateContext } from "../../HboProvider/hboprovider";
import Link from "next/link";

function Header(props) {
    const globalState = useStateContext()
    return (<header className={`top-header ${globalState.accountOpen || globalState.sideNavOpen ? 'top-header__menu-bg' : ''}`}>
        <div className="top-header__left-side">
            <div className="top-header__menu-btn" onClick={() => globalState.setSideNavOpen((prev) => !prev)}>
                <i className="fas fa-bars" />
            </div>
            <div className="top-header__search-btn" onClick={() => globalState.setsearchOpenAction((prev) => !prev)}>
                <i className="fas fa-search" />
            </div>
        </div>
        <Link href="/">
       <a>
       <div className="top-header__logo"></div>
           </a> 

        </Link>
        <div className="top-header__account" onClick={() => globalState.setAccountOpen((prev) => !prev)}>
            <img className="top-header__user-img" src="https://randomuser.me/api/portraits/men/91.jpg" />
            <div className="top-header__user-name">{globalState.user}</div>
        </div>
        <Account />
        <SearchModal />
    </header>

    )
}
export default Header