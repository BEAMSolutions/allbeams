//action types
const GET_PRODUCTS = 'GET_PRODUCTS'
const GOT_CATEGORY_PRODUCTS = 'GOT_CATEGORY_PRODUCTS'

//initial state
// TODO: could be a hash table of products
const initialState = []

//action creators
const getProducts = products => ({ type: GET_PRODUCTS, products })

const gotCategoryProducts = categoryProducts => ({
  type: GOT_CATEGORY_PRODUCTS,
  categoryProducts
})

//thunk creators
export const getAllProducts = () => {
  return async (dispatch, _, { axios }) => {
    try {
      const { data } = await axios.get('api/products/')
      dispatch(getProducts(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const getCategoryProducts = categoryId => {
  return async (dispatch, _, { axios }) => {
    try {
      const { data } = await axios.get(`api/products/category/${categoryId}`)
      dispatch(gotCategoryProducts(data))
    } catch (err) {
      console.error(err)
    }
  }
}

//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    case GOT_CATEGORY_PRODUCTS:
      return action.categoryProducts
    default:
      return state
  }
}
