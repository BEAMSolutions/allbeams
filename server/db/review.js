const Sequelize = require('sequelize')
const db = require('./database')

const Review = db.define('reviews', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: { args: 10, msg: 'Name must be at-least 10 characters in length' }
    }
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      len: { args: 20, msg: 'Review must be at-least 20 characters in length' }
    }
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      len: [0, 5]
    }
  }
})

module.exports = Review
