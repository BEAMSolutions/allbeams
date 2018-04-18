//action types
const GET_PRODUCTS = 'GET_PRODUCTS'
//initial state
const initialProducts = []
//action creators
export const getProducts = products => ({ type: GET_PRODUCTS, products })
//thunk creators
export const getAllProducts = () => {
  return async (dispatch, _, { axios }) => {
    try {
      const { data } = await axios.get('api/products/')
      dispatch(getProducts(data))
    } catch (error) {
      console.error(error)
    }
  }
}
//reducer
export default (products = initialProducts, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return [...products, ...action.products]
    default:
      return products
  }
}
