import { useLocation , useNavigate } from 'react-router-dom'
import {ReactComponent as OffereIcon } from '../assets/svg/localOfferIcon.svg'
import {ReactComponent as ExploreIcon} from '../assets/svg/exploreIcon.svg'
import {ReactComponent as PersonOutlineIcon} from '../assets/svg/personOutlineIcon.svg'

function Navbar() {

    const navigate = useNavigate()

    const routeMatch = (route) => {
        if(route === window.location.pathname)return (true)
    }

// asdf

  return (
    <footer className='navbar'>
        <nav className='navbarNav'>
            <ul className="navbarListItems">
                <li className="navbarListItem"  onClick={() => navigate('/')}>
                    <ExploreIcon fill={(routeMatch('/'))?'#2c2c2c':'#8f8f8f'} width='36px' height='36px' />
                    <p className={routeMatch('/')?"navbarListItemNameActive":"navbarListItemName"}>Explore</p>
                </li>
                <li className="navbarListItem"  onClick={() =>navigate('/offers')}>
                    <OffereIcon fill={(routeMatch('/offers'))?'#2c2c2c':'#8f8f8f'} width='36px' height='36px' />
                    <p className={routeMatch('/offers')?"navbarListItemNameActive":"navbarListItemName"}>Offers</p>
                </li>
                <li className="navbarListItem"  onClick={() => {navigate('/profile')}}>
                    <PersonOutlineIcon fill={(routeMatch('/profile'))?'#2c2c2c':'#8f8f8f'} width='36px' height='36px' />
                    <p className={routeMatch('/profile')?"navbarListItemNameActive":"navbarListItemName"}>profile</p>
                </li>
            </ul>
        </nav>
    </footer>
  )
}

export default Navbar
