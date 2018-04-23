import Sequelize from 'sequelize'
import User from './user'

const db = new Sequelize('postgres://localhost:5432/shopper-test', {
  logging: false
})

export default { db, User }
