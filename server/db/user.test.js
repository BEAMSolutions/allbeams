/* eslint-env mocha,chai */

const  chai = require('chai')
const expect = chai.expect
const { db, Product } = require('./index')
// const chaiProperties = require('chai-properties')
// const chaiThings = require('chai-things')
// chai.use(chaiProperties)
// chai.use(chaiThings)

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  describe('instanceMethods', () => {
    describe('Model structure', () => {
      let testProduct

      beforeEach(async () => {
        testProduct = await Product.create({
          name: 'testName',
          price: 100,
          description: 'testDescription',
          inventory: 33
        })
      })

      it('returns true if name is correct', () => {
        expect(testProduct.name).to.be.equal('testName')
      })

      it('return true if the price is correct', () => {
        expect(testProduct.price).to.be.equal(100)
      })
      it('return true if the description is correct', () => {
        expect(testProduct.description).to.be.equal('testDescription')
      })
      it('return true if the inventory is correct', () => {
        expect(testProduct.inventory).to.be.equal(33)
      })
    }) // end describe('correctPassword')
    // describe('Testing for validation', () => {
    //   it('requires a name', () => {
    //     const product = Product.build()
    //     return product
    //       .validate()
    //       .then(() => {
    //         throw new Error('Promise should have rejected')
    //       })
    //       .catch(err => {
    //         expect(err).to.be.an('error')
    //         expect(err.errors).to.contain.a.thing.with.properties({
    //           path: 'body',
    //           type: 'notNull Violation'
    //         })
    //       })
    //   })
    // })
  }) // end describe('instanceMethods')
}) // end describe('User model')
