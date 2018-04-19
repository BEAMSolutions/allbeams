const db = require('./database')
const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const Review = require('./review')
const Category = require('./category')
const Sequelize = require('sequelize')

const ProductOrder = db.define('productOrders', {
  currentPrice: Sequelize.INTEGER
})
const ProductCategory = db.define('productCategories', {})
// associations go here!
Order.belongsTo(User, {constraints: false})
Product.hasMany(Review, {constraints: false})
Review.belongsTo(User, {constraints: false})

Order.belongsToMany(Product, { through: ProductOrder, constraints: false })
Product.belongsToMany(Order, { through: ProductOrder, constraints: false })

Category.belongsToMany(Product, {through: ProductCategory, constraints: false})
Product.belongsToMany(Category, {through: ProductCategory, constraints: false})

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
