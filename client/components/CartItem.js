import React from 'react'

const CartItem = props => {
  const { item, handleSubmit } = props
  return (
  <div className="cart-item">
    <div className="main">
      <div className="cart-img-disp col-md-6">
        <img className="cart-img col-md-6" src={item.product.imageUrl} alt="" />
        <h5 className="cart-product-name col-md-6">{item.product.name}</h5>
      </div>
      <div className="cart-item-price col-md-3">
        <p>${item.product.price}</p>
      </div>
      <div className="cart-item-quantity col-md-3">
        <form action="">
          <select
            name="quantity"
            defaultValue = {item.quantity}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </form>
      </div>
    </div>
    <form onSubmit={(evt) => handleSubmit(evt)} className="delete">
      <button type="submit">Delete</button>
    </form>
  </div>
  )
}
export default CartItem
