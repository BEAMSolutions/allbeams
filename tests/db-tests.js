import db from '../server/db/test-db'
const User = db.model('user')

import chai from 'chai'
import chaiProperties from 'chai-properties'
import chaiThings from 'chai-things'
chai.use(chaiProperties)
chai.use(chaiThings)
const expect = chai.expect

describe('---Database Testing---', () => {
  beforeEach('Synchronize and clear database', () => db.sync({ force: true }))

  after('Synchronize and clear db', () => db.sync({ force: true }))

  describe('User Model', () => {
    // *Assertion translation*:
    // This assertion expects that the User model will
    // put an `email` column in the users table.
    it('has the expected schema definition', () => {
      expect(User.attributes.email).to.be.an('object')
    })

    describe('validations', () => {
      // *Assertion translation*:
      // The `email` column should be a required field.
      it('require email', () => {
        const user = User.build()
        return user
          .validate()
          .then(() => {
            throw new Error('Promise should have rejected')
          })
          .catch(err => {
            // expect(err).to.exist
            expect(err).to.be.an('error')
            expect(err.errors).to.contain.a.thing.with.properties({
              path: 'email',
              type: 'notNull Violation'
            })
          })
      })
    })
  })
})
