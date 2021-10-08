import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import ReorderIcon from '@material-ui/icons/Reorder';
import CartIcon from '@material-ui/icons/ShoppingCart';

// Import local files
import './NavbarStyle.css';
import './NavbarSide.css';
import Logo from '../../assests/pizzaLogo.png';

const Navbar = ({cart}) => {

    const [openLink, setOpenLink] = useState(false);

    function toggle() {
        setOpenLink(!openLink);
    }

    return (
        <div className="navbar">
            <div className="leftSide" >
                
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
{/* Hidden div for mobile device */}
                <div className="hiddenLinks" id={openLink ? "open" : "close"}>
                    <aside className="SidebarContainer">
                        <div className="hiddenMenuLogo">
                            <div className="Icon">
                                <CloseIcon className="closeicon" onClick={toggle} />
                            </div>
                        </div>
                        <div className="SidebarMenu">
                            
                            <Link to="/" className="SidebarLink" onClick={toggle} >
                                Home
                            </Link>
                            <Link to="/menu" className="SidebarLink" onClick={toggle} >
                                Menu
                            </Link>
                            <Link to="/about" className="SidebarLink" onClick={toggle} >
                                About
                            </Link>
                            <Link to="/contact" className="SidebarLink" onClick={toggle} >
                                Contact
                            </Link>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Link to="/cart" className="cartIcon" onClick={toggle} >
                               {cart.length} <CartIcon className="cart" style={{fontSize: '25px', marginTop: '1px'}} />
                               
                            </Link>
                            <Link to="/cart" style={{marginLeft: 0}} onClick={toggle}>Cart</Link>
                            </div>
                        </div>
                        <Link to="/menu" className="orderLink" onClick={toggle} >
                            <div className="hideOrderBtn">
                                <p>ORDER NOW</p>
                            </div>
                        </Link>
                    </aside>
                </div>
{/* END Hidden div for mobile device */}
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cart"  onClick={toggle}>
                    <CartIcon className="cart" style={{ fontSize: '28px', marginTop: '7px' }} />{cart.length}
                </Link>
                <button onClick={toggle} >
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}

export default Navbar
