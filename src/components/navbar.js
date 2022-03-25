import { Icon } from '@iconify/react';
import Logo from "../assets/rivoPog.png";
import './navbar.css';

function NavbarSearch() {
    return (
        <input id="nav-search" type="search" placeholder="Search Hotels"></input>
    )
}

function NavbarUser() {
    return (
        <div id="nav-member">
            <div id="nav-icon">
                <Icon icon="bxs:car" height="24" />
                <Icon icon="fa6-brands:instagram" height="24" />
            </div>
            <div id="nav-user">
                <img src={Logo} id="user-icon" alt="User Icon"></img>
                <p id="user-name">Rivo</p>
            </div>
        </div>
    )
}

function Navbar() {
    return (
        <nav id="navbar">
            <img src={Logo} alt="Web Logo"></img>
            <NavbarSearch />
            <NavbarUser />
        </nav>
    )    
}

export default Navbar;