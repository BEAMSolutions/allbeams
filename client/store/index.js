import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunks from 'redux-thunk'
import axios from 'axios'
import history from '../history'
import user from './user'
<<<<<<< HEAD
import products from './products'
import categories from './categories'

const reducer = combineReducers({ user, products, categories })
=======
import product from './product'
import products from './products'
import reviews from './review'
import users from './users'
import categories from './categories'

const reducer = combineReducers({users, user, products, reviews, product, categories})
>>>>>>> 8cc284584502288a8be4b50dc4ffaa50c8d78e5b

const store = createStore(
  reducer,
  applyMiddleware(thunks.withExtraArgument({ axios, history }), logger)
)

export default store
export * from './user'
export * from './products'
