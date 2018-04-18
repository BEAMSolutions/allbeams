const Sequelize = require('sequelize')
const db = require('./database')

const Order = db.define('orders', {
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Created'
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
})

module.exports = Order
