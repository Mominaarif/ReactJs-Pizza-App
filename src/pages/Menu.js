import React from 'react';

// Import local files
import MenuItem from '../components/MenuItem/MenuItem';
import '../styles/Menu.css';


const Menu = ({ menuItems, AddHandleCart }) => {
    return (
        <div className="menu">
            <h1 className="menuTitle">Our Menu</h1>
            <div className="menuList">
                {menuItems.map((menuItem) => {
                    return <div>
                        <MenuItem 
                        key={menuItems.id} 
                        image={menuItem.image} 
                        name={menuItem.name} 
                        price={menuItem.price} 
                        AddHandleCart={() => AddHandleCart(menuItem)}
                        />
                    </div>; 
                    })}
            </div>

        </div>
    )
}

export default Menu
