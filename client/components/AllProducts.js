import React from 'react'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'
import { getAllProducts } from '../store/product'
import { getCategories } from '../store/categories'

const mapStateToProps = state => {
  return { products: state.products, categories: state.categories }
}
const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
    getCategories: () => dispatch(getCategories())
  }
}

class AllProducts extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.props.getAllProducts()
    this.props.getCategories()
  }
  render() {
    const products = this.props.products.products
    const categories = this.props.categories
    return (
      <div className="all-products container-fluid">
        <div className="product-title-bar">
          <h3>All Products</h3>
          <form className="form-category">
            <label className="dropdown-category">
              <span>Pick your favorite beam category: </span>
              <select>
                <option value="--">--</option>
                {categories.map(category => (
                  <option value={category.name} key={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </label>
          </form>
        </div>
        <div className="all-products-items container-fluid">
          {products.map(product => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
