//action types

const GET_PRODUCT = 'GET_PRODUCT'

const initialState = {}

const getProduct = product => ({ type: GET_PRODUCT, product })

//thunk creators

export const getSingleProduct = productId => {
  return async (dispatch, _, { axios }) => {
    // console.log(productId)
    const { data } = await axios.get(`api/products/${productId}`)
    dispatch(getProduct(data))
  }
}

//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return { ...state, ...action.product }
    default:
      return state
  }
}
