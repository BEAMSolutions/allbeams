import React from 'react'

const Review = props => {
  const review = props.review
  return (
    <div className="review">
      <div className="review-title">
        <div>
          <p>{review.title}</p>
          <p>Rating: {review.rating}</p>
        </div>
        <p>By: {review.user.email}</p>
      </div>
      <p>{review.body}</p>
    </div>
  )
}

export default Review
