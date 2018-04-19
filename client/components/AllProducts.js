import React from 'react'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'
import { getAllProducts } from '../store/product'
import { getCategories } from '../store/categories'
import SelectCategoryForm from './SelectCategoryForm'
import { getCategoryProducts } from '../store/categoryProducts'

const mapStateToProps = state => {
  return { products: state.products, categories: state.categories, categoryProducts: state.categoryProducts}
}
const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
    getCategories: () => dispatch(getCategories()),
    getCategoryProducts: (categoryId) => dispatch(getCategoryProducts(categoryId))
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
    console.log(event.target)
    this.setState({
      category: event.target.value
    })
    //loop over this.state.categories
    this.props.getCategoryProducts()
  }
  render() {
    const products = this.props.products.products // TODO: fix this
    const categories = this.props.categories
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
