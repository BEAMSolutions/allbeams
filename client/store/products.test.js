import { expect } from 'chai'
import { getSingleProduct } from './product'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunks from 'redux-thunk'
import { createMemoryHistory } from 'history'

const history = createMemoryHistory()
const mockAxios = new MockAdapter(axios)
const middlewares = [thunks.withExtraArgument({ axios, history })]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  const initialState = { product: {} }

  beforeEach(() => {
    mockAxios.reset()
    store = mockStore(initialState)
  })

  describe('getSingleProduct', () => {
    it('dispatches the GET_PRODUCT action', async () => {
      const fakeProduct = {id: 1}
      mockAxios.onGet('/products/1').replyOnce(200, fakeProduct)
      await store.dispatch(getSingleProduct(fakeProduct))
      const getProductAction = store.getActions()
      expect(getProductAction.type).to.be.equal('GET_PRODUCT')
      expect(getProductAction.id).to.be.deep.equal(fakeProduct)
    })
  })
})
