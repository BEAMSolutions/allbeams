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
Order.belongsTo(User)
Product.hasMany(Review)
Review.belongsTo(User)

Order.belongsToMany(Product, { through: ProductOrder })
Product.belongsToMany(Order, { through: ProductOrder })

Category.belongsToMany(Product, {through: ProductCategory})
Product.belongsToMany(Category, {through: ProductCategory})

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
