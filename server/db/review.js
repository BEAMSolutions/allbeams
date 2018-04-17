const Sequelize = require('sequelize')
const db = require('./database')

const Review = db.define('review', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [10]
    }
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      len: [20]
    }
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Review
