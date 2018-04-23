import React from 'react'

const CartItem = () => (
  <div className="cart-item">
    <div className="main">
      <div className="cart-img-disp col-md-6">
        <img src="./product_placeholder.png" alt="" />
        <h5 className="col-md-8">Sausage Bean Curd</h5>
      </div>
      <div className="cart-item-price col-md-3">
        <p>$Free.99</p>
      </div>
      <div className="cart-item-quantity col-md-3">
        <form action="">
          <select name="quantity" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="4">4</option>
            <option value="4">4</option>
            <option value="4">4</option>
            <option value="4">4</option>
          </select>
        </form>
      </div>
    </div>
    <div className="delete">
      <button type="submit">Delete</button>
    </div>
  </div>
)

export default CartItem
