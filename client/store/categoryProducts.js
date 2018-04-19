//action type
const GOT_CATEGORY_PRODUCTS = 'GOT_CATEGORY_PRODUCTS'

//initial state
const initialState = []

const gotCategoryProducts = categoryProducts => ({
  type: GOT_CATEGORY_PRODUCTS,
  categoryProducts
})

//thunk creator
export const getCategoryProducts = categoryId => {
  return async (dispatch, _, { axios }) => {
    try {
      const { data } = await axios.get(`api/categories/${categoryId}/products`)
      console.log(data)
      dispatch(gotCategoryProducts(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_CATEGORY_PRODUCTS:
      return [...state, action.categoryProducts]
    default:
      return state
  }
}
