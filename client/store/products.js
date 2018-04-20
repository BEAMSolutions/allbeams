//action types
const GET_PRODUCTS = 'GET_PRODUCTS'
const GOT_CATEGORY_PRODUCTS = 'GOT_CATEGORY_PRODUCTS'
const GET_QUERY = 'GET_QUERY'
//initial state
const initialState = []

//action creators
const getProducts = products => ({ type: GET_PRODUCTS, products })

const gotCategoryProducts = categoryProducts => ({
  type: GOT_CATEGORY_PRODUCTS,
  categoryProducts
})

const getQuery = query => ({ type: GET_QUERY, query })
//TODO get query is exactly the same as gotcategoryproducts
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
export const getQueryProducts = query => {
  //TODO make an api request, and filter the products to return an array of products whose names match the query
  return async (dispatch, _, { axios }) => {
    try {
      const { data } = await axios.get(`api/products/`, {params: {name: query}})
      dispatch(getQuery(data))
    } catch (err) {
      console.error(err)
    }
  }
}
//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return [...state, ...action.products]
    case GOT_CATEGORY_PRODUCTS:
      return [...action.categoryProducts]
    default:
      return state
  }
}
