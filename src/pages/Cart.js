import React from 'react';

// Import local files
import '../styles/Cart.css'

function Cart({ cart, handCartRemove, HandleCartAdd }) {

    const totalPrice = cart.reduce((price, item) => price + item.quantity * item.price, 0);
    const shipping = totalPrice < 20 ? 0 : 20;
    const discount = totalPrice > 50 ? totalPrice * .20 : 0;
    const total = totalPrice + shipping + discount;

    return (
        <div className="cartCon">



            <div className="cartContainer">
                <h1 className="cartTitle">
                    Shopping Cart
                </h1>
                <hr style={{ width: "45%", marginLeft: "43px", height: '5px', backgroundColor: 'black' }} />
                <div className="productTitle" >
                    <p className="para">Product</p>
                    <p className="para">Quantity</p>
                    <p className="para">Price</p>
                </div>
                {cart.length === 0 && (
                    <div className="emptyCart">
                        Your Shopping cart is empty
                    </div>
                )}
                {cart.map((item) => {
                    return (
                        <div key={item.id} className="cartList">
                            <div className="cart">
                                <div className="cartImage" style={{ background: `url(${item.image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} >
                                </div>
                                <div className="des">
                                    <h4>{item.name}</h4>
                                    <div style={{ display: 'flex', flexDirection: 'row' }} className="btn">
                                        <button className="cartItemAdd" onClick={() => HandleCartAdd(item)}> + </button>
                                        <p> {item.quantity} </p>
                                        <button className="cartItemRemove" onClick={() => handCartRemove(item)} > - </button>
                                    </div>
                                    <p className="pricePar">${item.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="subDiv">
                    <div className="pricing">
                        <div className="costing"> Sub Price:       ${totalPrice.toFixed(2)} </div>
                        <div className="costing"> Shipping Cost:        ${shipping.toFixed(2)} </div>
                        <div className="costing"> Discount:         ${discount.toFixed(2)} </div>
                    </div>
                    <div className="btnDiv">
                        <div className="costing"> Total Price:         ${total.toFixed(2)} </div>
                        <button className="checkBtn">CHECKOUT</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart
