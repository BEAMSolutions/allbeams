import React from 'react'
import { connect } from 'react-redux'
import Review from './Review'
import AddToCart from './AddToCart'
import { getSingleProduct } from '../store/product'
// import { getUsers } from '../store/users'
import { getAllReviews } from '../store/review'
import { addToCart } from '../store/cart'

const mapStateToProps = state => {
  return {
    product: state.product,
    reviews: state.reviews,
    users: state.users,
    quantityAddedById: state.quantityAddedById
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSingleProduct: arg => dispatch(getSingleProduct(arg)),
    getAllReviews: arg => dispatch(getAllReviews(arg)),

    // FIXME: what is dispatching GET_USERS?
    // getUsers: arg => dispatch(getUsers(arg)),

    addToCart: (product, quantity) => dispatch(addToCart(product, quantity))
  }
}

class SingleProduct extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedQuant: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const id = this.props.match.params.productId
    this.props.getSingleProduct(id)
    this.props.getAllReviews(id)
    // this.props.getUsers()
  }

  handleSubmit(event) {
    const { product } = this.props
    const { selectedQuant } = this.state
    event.preventDefault()
    this.props.addToCart(product, selectedQuant)
  }

  handleChange(event) {
    this.setState({
      selectedQuant: event.target.value
    })
  }

  render() {
    const { product, reviews } = this.props

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
              <h5>${product.price}</h5>
              <AddToCart
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
              />
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
          {reviews.length ? (
            reviews.map(review => {
              return (
                <Review review={review} key={review.id} user={review.userId} />
              )
            })
          ) : (
            <h3>There are no reviews yet, be the first!</h3>
          )}
          <div />
        </div>
      </div>
    )
  }
}
//I want to make it so that if the array is empty(aka no reviews for a product), then it would render a message that says "there are no reviews, be the first to review!"
//If the array is empty, the reviews.map won't event run, so this console log 'hello' doesn't show
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
