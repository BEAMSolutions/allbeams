import React from 'react'
import { Link } from 'react-router-dom'
const ProductItem = props => {
  const product = props.product
  return (
    <Link
      to={`${product.id}`}
      className="product-item col-xs-6 col-sm-12 col-md-4 col-lg-3"
    >
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
    </Link>
  )
}

export default ProductItem
