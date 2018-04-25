import React from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import Subtotal from './Subtotal'
import { connect } from 'react-redux'
import { deleteFromCart } from '../store/cart'

const mapDispatchToProps = dispatch => ({
  deleteFromCart: productId => dispatch(deleteFromCart(productId))
})

class CartBody extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    console.log('you just deleted... and didnt refresh')
    console.log('Props: ', this.props)
    this.props.deleteFromCart(Object.keys(this.props.cart)[0])
  }

  render () {
    const { cart } = this.props
    const itemsInCart = Object.values(cart)
    return (
      <div className="cart-body">
        {!itemsInCart.length ? <h5>No items in cart. <Link to='/'> Get back to shopping...</Link></h5> : itemsInCart.map(item => <CartItem item={item} handleSubmit={this.handleSubmit} key={item.product.id} />) }
        {itemsInCart.length ? <Subtotal cart={cart} /> : <p />}
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(CartBody)
