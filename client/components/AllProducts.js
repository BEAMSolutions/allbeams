import React from 'react'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'
import { getAllProducts, getCategoryProducts } from '../store/product'
import { getCategories } from '../store/categories'
import SelectCategoryForm from './SelectCategoryForm'

const mapStateToProps = state => {
  return {
    products: state.products,
    categories: state.categories
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
    getCategories: () => dispatch(getCategories()),
    getCategoryProducts: categoryId => dispatch(getCategoryProducts(categoryId))
  }
}

class AllProducts extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    this.props.getAllProducts()
    this.props.getCategories()
  }

  handleChange(event) {
    this.props.getCategoryProducts(event.target.value)
  }
  render() {
    const products = this.props.products.products
    const categories = this.props.categories
    return (
      <div className="all-products container-fluid">
        <div className="product-title-bar">
          <SelectCategoryForm
            categories={categories}
            handleChange={this.handleChange}
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
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
