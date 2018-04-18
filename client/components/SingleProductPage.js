import React from 'react'
import { connect } from 'react-redux'
import { getSingleProduct } from '../store/product'

const mapStateToProps = state => {
  return { product: state.product }
}
const mapDispatchToProps = dispatch => {
  return { getSingleProduct: (arg) => dispatch(getSingleProduct(arg)) }
}

class SingleProduct extends React.Component {
  componentDidMount() {
    // const id = Number(this.props.match.params.productId)
    // console.log(this.props.match.params.productId)
    this.props.getSingleProduct(this.props.match.params.productId)
  }
  render() {
    const product = this.props.product
    console.log(product)
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
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)

// {/* <div className="review">
//               <div className="horizontal-flex review-title">
//                 <p>Title</p>
//                 <div>Rating Stars</div>
//                 <p>User</p>
//               </div>
//               <p>Review text</p>
// </div> */}
