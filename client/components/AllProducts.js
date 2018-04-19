import React from 'react'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'
import { getAllProducts } from '../store/product'
import { getCategories } from '../store/categories'
import SelectCategoryForm from './SelectCategoryForm'

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
    this.state = {
      category: 'All Products'
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    this.props.getAllProducts()
    this.props.getCategories()
  }

  handleChange(event) {
    this.setState({
      category: event.target.value
    })
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
            // {...this.state}
          />
        </div>
        {this.state.category === 'All Products' ? (
          <div>
            <h3>All Products</h3>
            <div className="all-products-items container-fluid">
              {products.map(product => (
                <ProductItem product={product} key={product.id} />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h3>{this.state.category}</h3>
            <div>Products under this category</div>
          </div>
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
