const db = require('./database')
const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const Review = require('./review')
const Category = require('./category')
const Sequelize = require('sequelize')

const ProductOrder = db.define('ProductOrder', {
  currentPrice: Sequelize.INTEGER
})

// associations go here!
Order.belongsToMany(Product, { through: ProductOrder })
Product.belongsToMany(Order, { through: ProductOrder })
Order.belongsTo(User)
Product.hasMany(Review)
Product.belongsTo(Category)
Review.belongsTo(User)

module.exports = {
  db,
  User,
  Product,
  Order,
  Review
}
