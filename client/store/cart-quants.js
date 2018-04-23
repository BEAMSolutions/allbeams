// Initial State
const quantityAddedById = {}

// action types
const ADD_TO_CART = 'ADD_TO_CART'

// action creators
const addToCart = product => ({ type: ADD_TO_CART, product })

// thunk creators
export const getProductForQuant = productId => async (dispatch, _, { axios }) => {
  try {
    const { data } = await axios.get(`api/products/${productId}`)
    if (data.inventory > 0) {
      dispatch(addToCart(data))
    } else {
      console.log('We ran out of juice...')
    }
  } catch (err) {
    console.error(err)
  }
}

// reducer
export default (state = quantityAddedById, action) => {
  const { product } = action
  switch (action.type) {
    case ADD_TO_CART:
      return {...state, [product.id]: (state[product.id] || 0) + 1 }
    default:
      return state
  }
}
