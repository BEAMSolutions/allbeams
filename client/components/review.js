import React from 'react'

const Review = props => {
  const review = props.review
  return (
    <div className="review">
      <div className="horizontal-flex review-title">
        <p>{review.title}</p>
        <div>{review.rating}</div>
        <p>User</p>
      </div>
      <p>{review.body}</p>
    </div>
  )
}

export default Review
