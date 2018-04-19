const GET_PRODUCTS = 'GET_PRODUCTS'

const initialState = []

const getProducts = products => ({ type: GET_PRODUCTS, products })

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

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return [...state, ...action.products]
    default:
      return state
  }
}
