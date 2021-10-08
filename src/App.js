import React, { useState } from 'react';

// Import local files
import Routes from './Routes';
import MenuList from './helpers/MenuList';


function App() {

  const [cart, setCart] = useState([]);
  const menuItems = MenuList;        // Array of objects 

  // Add shopping cart
  const AddHandleCart = (product) => {
    const existProuct = cart.find(item => item.id === product.id);
    if (existProuct) {
      setCart(cart.map((item) => item.id === product.id ?
        { ...product, quantity: existProuct.quantity + 1 } : item));
    }
    else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  // Remove and decrease shopping cart quantity  
  const handCartRemove = (product) => {
    const existProuct = cart.find(item => item.id === product.id);
    if (existProuct.quantity === 1) {
      setCart(cart.filter(item => item.id !== product.id));
    }
    else {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...product, quantity: existProuct.quantity - 1 } : item
      ));
    }
  }

  // Increasing shopping cart quantity
  const HandleCartAdd = (product) => {
    const existProuct = cart.find(item => item.id === product.id);
    if (existProuct) {
      setCart(cart.map((item) => item.id === product.id ?
        { ...product, quantity: existProuct.quantity + 1 } : item));
    }
    else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  return (
    <div>
      <Routes
        menuItems={menuItems}
        cart={cart}
        AddHandleCart={AddHandleCart}
        handCartRemove={handCartRemove}
        HandleCartAdd={HandleCartAdd}
      />
    </div>
  )
}

export default App
