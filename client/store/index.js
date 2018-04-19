import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunks from 'redux-thunk'
import axios from 'axios'
import history from '../history'
import user from './user'
import products from './product'
import categories from './categories'
import categoryProducts from './categoryProducts'

const reducer = combineReducers({ user, products, categories, categoryProducts })

const store = createStore(
  reducer,
  applyMiddleware(thunks.withExtraArgument({ axios, history }), logger)
)

export default store
export * from './user'
export * from './product'
