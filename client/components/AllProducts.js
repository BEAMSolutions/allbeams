import React from 'react'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'
import { getAllProducts } from '../store/products' //import from product file later

const mapStateToProps = state => {
  console.log('mapping state to props', state)
  return { products: state.products }
}
const mapDispatchToProps = dispatch => {
  return { getAllProducts: () => dispatch(getAllProducts()) }
}

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getAllProducts()
  }
  render() {
    const products = this.props.products
    return (
      <div className="all-products container-fluid">
        <h3>All Products</h3>
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
