// Initial State
const selectedItemsAndQuantity = {}

// action types
const ADD_TO_CART = 'ADD_TO_CART'
const GET_CART = 'GET_CART'

// action creators
export const addToCart = (product, quantity) => ({
  type: ADD_TO_CART,
  product,
  quantity
})

// reducer
export default (state = selectedItemsAndQuantity, action) => {
  const { product, quantity } = action
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, [product.id]: {
          product,
          quantity: (state[product.id] === undefined ? 0 : state[product.id].quantity) + +quantity
        }}
    case GET_CART:
      return { ...state }
    default:
      return state
  }
}
