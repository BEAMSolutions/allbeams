import React from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import Subtotal from './Subtotal'

const Cartbody = props => {
  const { cart } = props
  const itemsInCart = Object.values(cart)
  console.log(Object.values(cart))
  return (
    <div className="cart-body">
      {!itemsInCart.length ? <h5>No items in cart. <Link to='/'> Get back to shopping...</Link></h5> : itemsInCart.map(item => <CartItem item={item} key={item.product.id} />) }
      {itemsInCart.length ? <Subtotal cart={cart} /> : <p />}
    </div>
  )
}

export default Cartbody
