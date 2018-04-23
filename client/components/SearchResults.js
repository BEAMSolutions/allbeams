import React from 'react'
import { connect } from 'react-redux'
import {
  getCategoryProducts,
} from '../store/products'
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
    getCategoryProducts: categoryId => dispatch(getCategoryProducts(categoryId))
  }
}

class SearchResults extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.props.getCategoryProducts(event.target.value)
  }
  render() {
    return (
      <RenderProducts
        handleChange={this.handleChange}
        products={this.props.products}
        categories={this.props.categories}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
