//action types
const GET_PRODUCTS = 'GET_PRODUCTS'
//initial state
const initialState = {
  products: []
}
//action creators
export const getProducts = products => ({ type: GET_PRODUCTS, products })
//thunk creators
export const getAllProducts = () => {
  return async (dispatch, _, {axios}) => {
    const { data } = await axios.get('api/products/')
    dispatch(getProducts(data))
  }
}
//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.products }
    default:
      return { ...state }
  }
}