// ACTION TYPES
const FIND_USERS = 'FIND_USERS'

// INITIAL STATE
const initialState = []

// ACTION CREATORS
const gotUsers = users => ({
  type: FIND_USERS,
  users
})

// THUNK CREATORS
export const getUsers = () =>
  async (dispatch, _, {axios}) => {
    try {
      const { data } = await axios.get('/api/users')
      dispatch(gotUsers(data))
    } catch (err) {
      console.error(err)
    }
  }

export default (state = initialState, action) => {
  switch (action.type) {
    case FIND_USERS:
      return [...state, ...action.users]
    default:
      return state
  }
}
