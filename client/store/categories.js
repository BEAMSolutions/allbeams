//action type
const GOT_CATEGORIES = 'GOT_CATEGORIES'

// initial state
const initialState = []
// action creator
const gotCategories = categories => ({
  type: GOT_CATEGORIES,
  categories
})

// thunk creator
export const getCategories = () => {
  return async (dispatch, _, { axios }) => {
    try {
      const { data } = await axios.get('/api/categories/')
      dispatch(gotCategories(data))
    } catch (err) {
      console.error(err)
    }
  }
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_CATEGORIES:
      return [...action.categories]
    default:
      return state
  }
}
