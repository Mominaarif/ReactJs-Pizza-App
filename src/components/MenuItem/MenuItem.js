import React from 'react';

function MenuItem({ image, price, name, cart, AddHandleCart }) {
    return (
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1> {name} </h1>
            <div style={{display: 'flex', flexDirection: 'row', height: '45px'}}>
                <p style={{fontWeight: 800, color: '#ff9800'}}> ${price} </p>
                <button type="submit" onClick={() => AddHandleCart(cart)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default MenuItem