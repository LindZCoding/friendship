import { NavLink } from "react-router-dom";
import './MainPage.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to='/' className='button-56'>Home</NavLink>
            <NavLink to='/about' className='button-56'>About us</NavLink>
        </div>
    )
}

export default Navbar;