const {expect} = require('chai')
const request = require('supertest')
const {db, Product} = require('../../db')
const app = require('../../app')

describe('Product Routes', () => {
  beforeEach(async () => {
    await db.sync({force: true})
  })
  describe('/api/products/', () => {
    const testName = 'testProduct'
    const testPrice = 100
    const testDescription = 'longstring'
    const testInventory = 10
    beforeEach(async () => {
      await Product.create({
        name: testName,
        price: testPrice,
        description: testDescription,
        inventory: testInventory
      })
    })
    it('GET /api/products', async () => {
      await request(app)
      .get('/api/products')
      .expect(200)
      .then(res => {
        expect(res.body).to.be.an('array')
        expect(res.body[0].name).to.be.equal(testName)
      })
    })
  })
})
