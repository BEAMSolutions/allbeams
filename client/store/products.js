<<<<<<< HEAD
//action types
const GET_PRODUCTS = 'GET_PRODUCTS'
const GOT_CATEGORY_PRODUCTS = 'GOT_CATEGORY_PRODUCTS'

//initial state
const initialState = {
  products: []
}

//action creators
const getProducts = products => ({ type: GET_PRODUCTS, products })

const gotCategoryProducts = categoryProducts => ({
  type: GOT_CATEGORY_PRODUCTS,
  categoryProducts
})

//thunk creators
export const getAllProducts = () => {
  return async (dispatch, _, { axios }) => {
    // TODO: improve the error handling here
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
=======
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
>>>>>>> master
    }
  }
}

<<<<<<< HEAD
//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.products }
    case GOT_CATEGORY_PRODUCTS:
      return { ...state, products: action.categoryProducts }
=======
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return [...state, ...action.products]
>>>>>>> master
    default:
      return state
  }
}
