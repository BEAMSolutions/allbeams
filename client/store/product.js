//action types
const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_PRODUCT = 'GET_PRODUCT'
//initial state
const initialProducts = {
  products: [],
  product: {}
}

const getProducts = products => ({ type: GET_PRODUCTS, products })
const getProduct = product => ({ type: GET_PRODUCT, product })
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
export const getSingleProduct = (productId) => {
  return async (dispatch, _, { axios }) => {
    // console.log(productId)
    const { data } = await axios.get(`api/products/${productId}`)
    dispatch(getProduct(data))
  }
}

//reducer
export default (products = initialProducts, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return [...products.products, ...action.products]
    case GET_PRODUCT:
      return {...products, product: action.product}
    default:
      return products
  }
}
