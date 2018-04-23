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
import cart from './cart'

const reducer = combineReducers({users, user, products, reviews, product, categories, cart})

const store = createStore(
  reducer,
  applyMiddleware(thunks.withExtraArgument({ axios, history }), logger)
)

export default store
