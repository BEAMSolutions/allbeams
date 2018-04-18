const Sequelize = require('sequelize')
const db = require('./database')

const Category = db.define('categories', {
  name: Sequelize.STRING
})

module.exports = Category
