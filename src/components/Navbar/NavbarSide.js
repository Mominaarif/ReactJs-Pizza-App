import React from 'react'
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

// Import Local Files
import './NavbarSide.css';
// import Logo from '../../assests/pizzaLogo.png';
import './NavbarStyle.css';

const NavbarSide = ({ openLink, toggle }) => {
    return (
        <div className="hiddenLinks" id={openLink ? "open" : "close"}>
            <aside className="SidebarContainer">
                <div className="hiddenMenuLogo">
                    <div className="Icon">
                        <CloseIcon className="closeicon" onClick={toggle} />
                    </div>
                </div>

                <div className="SidebarMenu">
                    <Link to="/" className="SidebarLink">
                        Home
                    </Link>
                    <Link to="/menu" className="SidebarLink">
                        Menu
                    </Link>
                    <Link to="/about" className="SidebarLink">
                        About
                    </Link>
                    <Link to="/contact" className="SidebarLink">
                        Contact
                    </Link>
                </div>
                <Link to="/" className="orderLink">
                    <div className="hideOrderBtn">
                        <p>Order Now</p>
                    </div>
                </Link>
            </aside>
        </div>
    )
}

export default NavbarSide
