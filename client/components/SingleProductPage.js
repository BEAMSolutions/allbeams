import React from 'react'
import { connect } from 'react-redux'
import { getSingleProduct } from '../store/product'
import { getUsers } from '../store/users'
import Review from './Review'
import { getAllReviews } from '../store/review'

const mapStateToProps = state => {
  console.log('mapping stateToProps', state)
  return {
    product: state.product,
    reviews: state.reviews,
    users: state.users
   }
}
const mapDispatchToProps = dispatch => {
  return {
    getSingleProduct: arg => dispatch(getSingleProduct(arg)),
    getAllReviews: arg => dispatch(getAllReviews(arg)),
    getUsers: arg => dispatch(getUsers(arg))
  }
}

class SingleProduct extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.productId
    this.props.getSingleProduct(id)
    this.props.getAllReviews(id)
    this.props.getUsers()
  }
  render() {
    const product = this.props.product
    const reviews = this.props.reviews
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
          {reviews.length ? (reviews.map(review => {
            return <Review review={review} key={review.id} user={review.userId} />
          })) : <h3>There are no reviews yet, be the first!</h3>}
          <div />
        </div>
      </div>
    )
  }
}
//I want to make it so that if the array is empty(aka no reviews for a product), then it would render a message that says "there are no reviews, be the first to review!"
//If the array is empty, the reviews.map won't event run, so this console log 'hello' doesn't show
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
