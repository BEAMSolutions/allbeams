// Initial State
const quantityAddedById = {}

// action types
const ADD_TO_CART = 'ADD_TO_CART'
const GET_CART = 'GET_CART'

// action creators
export const addToCart = (product, quantity) => ({
  type: ADD_TO_CART,
  product,
  quantity
})

// const getCart = cart => ({
//   type: GET_CART,
//   cart
// })

// thunk creators
// export const gotCart = () => (dispatch, getState) => {
//   const { cart } = getState()
//   dispatch(getCart(cart))
// }

// export const getProductAndQuant = productId => async (dispatch, _, { axios }) => {
//   try {
//     const { data } = await axios.get(`api/products/${productId}`)
//     if (data.inventory > 0) {
//       dispatch(addToCart(data))
//     } else {
//       console.log('We ran out of juice...')
//     }
//   } catch (err) {
//     console.error(err)
//   }
// }

// reducer
export default (state = quantityAddedById, action) => {
  const { product, quantity } = action
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, [product.id]: (state[product.id] || 0) + +quantity }
    case GET_CART:
      return { ...state }
    default:
      return state
  }
}
