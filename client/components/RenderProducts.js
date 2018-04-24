import React from 'react'
import ProductItem from './ProductItem'
import SelectCategoryForm from './SelectCategoryForm'

const RenderProducts = (props) => {
  const products = props.products
  const categories = props.categories
    return (
      <div className="all-products container-fluid">
        <div className="form-bar">
          <SelectCategoryForm
            className="filter-by-cat-dropdown"
            categories={categories}
            handleChange={props.handleChange}
          />
        </div>
        <div>
          <div className="all-products-items container-fluid">
            {products.map(product => (
              <ProductItem product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    )
}

export default RenderProducts
