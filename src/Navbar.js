import { NavLink } from "react-router-dom";
import './MainPage.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to='/' className='button-56'>Home</NavLink>
            <NavLink to='/memories' className='button-56'>Memories</NavLink>
            <NavLink to='/clips' className='button-56'>Clips</NavLink>
        </div>
    )
}

export default Navbar;