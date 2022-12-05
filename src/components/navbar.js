import logo from '../images/ironhack-logo-xs.png'
import nav from '../images/menu-top-xs.png'

function NavBar() {
    return (
        <div className='header'>
        <div className='navbar'>
            <img src={logo} className='logo'/>
            <img src={nav} className='nav'/>
        </div>
        </div>
    )
}


export default NavBar