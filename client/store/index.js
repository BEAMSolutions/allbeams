import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunks from 'redux-thunk'
import axios from 'axios'
import history from '../history'
import user from './user'
import product from './product'
import products from './products'
import reviews from './review'
import users from './users'
import categories from './categories'
import cartIds from './cart-ids'
import cartQuants from './cart-quants'

const reducer = combineReducers({users, user, products, reviews, product, categories, cartIds, cartQuants})

const store = createStore(
  reducer,
  applyMiddleware(thunks.withExtraArgument({ axios, history }), logger)
)

export default store
export * from './user'
export * from './products'
