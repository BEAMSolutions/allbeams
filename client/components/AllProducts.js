import React from 'react'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'
import { getAllProducts, getCategoryProducts } from '../store/product'
import { getCategories } from '../store/categories'
import SelectCategoryForm from './SelectCategoryForm'

const mapStateToProps = state => {
  return {
    products: state.products,
    categories: state.categories,
    categoryProducts: state.categoryProducts
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
    this.state = {
      category: 'All Products'
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    this.props.getAllProducts()
    this.props.getCategories()
    // this.props.getCategoryProducts()
  }

  handleChange(event) {
    this.setState(
      {
        category: event.target.value
      },
      () => {
        this.props.getCategoryProducts(this.state.category)
      }
    )
    //loop over this.state.categories
  }
  render() {
    const products = this.props.products.products // TODO: fix this
    const categories = this.props.categories
    console.log(this.state.category)
    console.log(categories)
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
