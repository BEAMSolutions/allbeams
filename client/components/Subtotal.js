import React from 'react'

const Subtotal = props => {
  const { cart } = props
  const itemsInCart = Object.values(cart)
  const round = (value, decimals) => {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
  }
  return (
    <h5>Subtotal for ({itemsInCart.length} item(s)): ${round(itemsInCart.map(item => item.product.price * item.quantity).reduce((sum, curr) => sum + curr), 2)}</h5>
  )
}

export default Subtotal
