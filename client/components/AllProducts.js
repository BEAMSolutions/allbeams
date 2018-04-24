import React from 'react'
import { connect } from 'react-redux'
import { getAllProducts, getCategoryProducts } from '../store/products'
import { getCategories } from '../store/categories'
import RenderProducts from './RenderProducts'

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
    this.state = {
      filteredProductsId: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    this.props.getAllProducts()
    this.props.getCategories()
  }

  handleChange(event) {
    this.setState({
      filteredProductsId: event.target.value
    })
    if (event.target.value !== 'all-products') {
      this.props.getCategoryProducts(event.target.value)
    } else {
      this.props.getAllProducts()
    }
  }
  render() {
    const { products, categories } = this.props
    const getCategoryTitle = id => {
      let numId = id
      if (numId === 'all-products') {
        return 'All Products'
      } else {
        numId = +id
        return this.props.categories
          .filter(category => category.id === numId)
          .map(category => category.name)
      }
    }
    let filteredProductsId = this.state.filteredProductsId
    const categoryTitle = getCategoryTitle(this.state.filteredProductsId)
    return (
      <div className="all-products container-fluid">
        <div className="product-title-bar">
          <h1>{filteredProductsId ? categoryTitle : 'All Products'}</h1>
        </div>
        <RenderProducts
          handleChange={this.handleChange}
          products={this.props.products}
          categories={this.props.categories}
        />
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
