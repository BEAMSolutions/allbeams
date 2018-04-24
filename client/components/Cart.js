import React from 'react'
import CartBody from './CartBody'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  cart: state.cart
})

class Cart extends React.Component {
  render() {
    const { cart } = this.props
    return (
      <div className="cart">
        <div className="title-head">
          <h1 className="cart-head col-md-6">My Cart</h1>
          <p className="cart-head col-md-3">Price</p>
          <p className="cart-head col-md-3">Quantity</p>
        </div>
        <CartBody cart={cart} />
      </div>
    )
  }
}

export default connect(mapStateToProps)(Cart)
