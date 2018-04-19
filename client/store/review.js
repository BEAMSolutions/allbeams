const GET_REVIEWS = 'GET_REVIEWS'

const initialState = []

const getReviews = reviews => ({ type: GET_REVIEWS, reviews })

export const getAllReviews = (productId) => {
  return async (dispatch, _, { axios }) => {
    try {
      const { data } = await axios.get(`api/reviews/${productId}`)
      dispatch(getReviews(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return [...state, ...action.reviews]
    default:
      return state
  }
}
