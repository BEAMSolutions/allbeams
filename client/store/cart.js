// Initial State
const selectedItemsAndQuantity = {}

// action types
const ADD_TO_CART = 'ADD_TO_CART'
const GET_CART = 'GET_CART'
const DELETE_FROM_CART = 'DELETE_FROM_CART'

// action creators
export const addToCart = (product, quantity) => ({
  type: ADD_TO_CART,
  product,
  quantity
})

export const deleteFromCart = productId => ({
  type: DELETE_FROM_CART,
  productId
})

// reducer
export default (state = selectedItemsAndQuantity, action) => {
  const { product, quantity, productId } = action
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [product.id]: {
          product,
          quantity:
            (state[product.id] === undefined ? 0 : state[product.id].quantity) +
            +quantity
        }
      }
    case GET_CART:
      return { ...state }
    case DELETE_FROM_CART:
      const copyObj = { ...state }
      console.log(copyObj)
      delete copyObj[productId]
      console.log(copyObj)
      return copyObj
    default:
      return state
  }
}
