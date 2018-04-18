import React from 'react'

const ProductItem = props => {
  const product = props.product
  return (
    <div className="product-item col-md-3">
      <div id="img-container">
        <img src={product.imageUrl} alt="" />
      </div>
      <div id="product-item-info">
        <h5>
          <strong>{product.name}</strong>
        </h5>
        <p>${product.price}</p>
        <p>{product.rating}</p>
      </div>
    </div>
  )
}

export default ProductItem
