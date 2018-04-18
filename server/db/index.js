const db = require('./database')
const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const Review = require('./review')
const Category = require('./category')
const Sequelize = require('sequelize')

const ProductOrder = db.define('productOrder', {
  currentPrice: Sequelize.INTEGER
})
const ProductCategory = db.define('productCategory', {})
// associations go here!
Order.belongsToMany(Product, { through: ProductOrder })
Product.belongsToMany(Order, { through: ProductOrder })
Order.belongsTo(User)
Product.hasMany(Review)
Category.belongsToMany(Product, {through: ProductCategory})
Product.belongsToMany(Category, {through: ProductCategory})
Review.belongsTo(User)

module.exports = {
  db,
  User,
  Product,
  Category,
  Order,
  Review,
  ProductOrder,
  ProductCategory
}
