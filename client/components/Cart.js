import React from 'react'
import CartBody from './CartBody'

const Cart = () => (
    <div className="cart">
      <div className="title-head">
        <h1 className="cart-head col-md-6">My Cart</h1>
        <p className="cart-head col-md-3">Price</p>
        <p className="cart-head col-md-3">Quantity</p>
      </div>
      <CartBody />
    </div>
)

export default Cart
