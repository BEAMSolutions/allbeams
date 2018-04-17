const db = require('./database')
const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const Review = require('./review')

// associations go here!

module.exports = {
  db,
  User,
  Product,
  Order,
  Review
}
