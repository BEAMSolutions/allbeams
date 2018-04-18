import React from 'react'
import { connect } from 'react-redux'
import { getSingleProduct } from '../store/product'
import { review } from './review'
import { getAllReviews } from '../store/review'

const mapStateToProps = state => {
  console.log('mapping stateToProps', state)
  return { product: state.products.product, reviews: state.reviews }
}
const mapDispatchToProps = dispatch => {
  return {
    getSingleProduct: arg => dispatch(getSingleProduct(arg)),
    getAllReviews: arg => dispatch(getAllReviews(arg))
  }
}

class SingleProduct extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.productId
    // console.log(this.props.match.params.productId)
    this.props.getSingleProduct(id)
    this.props.getAllReviews(id)
  }
  render() {
    const product = this.props.product
    const reviews = this.props.reviews
    console.log(reviews)
    return (
      <div>
        <div className="horizontal-flex" id="single-item">
          <div className="img-container">
            <img src={product.imageUrl} />
          </div>
          <div id="item-info">
            <h2>{product.name}</h2>
            <div id="item-reviews">
              <p>Reviews (stars)</p>
              <div />
            </div>
            <div id="price-cart" className="horizontal-flex">
              <p>{product.price}</p>
              <p>Add to cart</p>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <p>{product.description}</p>
          </div>
        </div>

        <div className="reviews-container">
          <h4>Reviews for this product</h4>
          <p>
            <a href="#">Write a review</a>
          </p>
          <div id="reviews-list" />
          <div />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
