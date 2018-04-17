const Sequelize = require('sequelize')
const db = require('./database')

const Category = db.define('category', {
  name: Sequelize.STRING
})

module.exports = Category
