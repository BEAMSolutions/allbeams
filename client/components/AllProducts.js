import React from 'react'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'
import { getAllProducts, getCategoryProducts} from '../store/products'
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
    if (Number.isInteger(event.target.value)) {
      this.props.getCategoryProducts(event.target.value)
    }
  }
  render() {
    const {products, categories} = this.props
      const getCategoryTitle = (id) => {
          let numId = id
        if (numId === 'all-products') {
          return 'All Products'
        } else {
          numId = +id
          return this.props.categories.filter(category => category.id === numId).map(category => category.name)
        }
      }
    let filteredProductsId = this.state.filteredProductsId
    const categoryTitle = getCategoryTitle(this.state.filteredProductsId)
    console.log(this.props)
    return (
      <div className="all-products container-fluid">
        <div className="product-title-bar">
          <h1>{filteredProductsId ? categoryTitle : 'All Products'}</h1>
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
