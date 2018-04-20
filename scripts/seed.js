#!/usr/bin/env node

// import { promisify } from 'util';

const { db, User, Product, Category, Order, Review, ProductCategory, ProductOrder} = require('../server/db')
const data = require('./seedFile')


const seed = async () => {
  await db.sync({ force: true })

  console.log('db synced!')

  let createsArray = await (() => {
    let arr = []
    data.userArray.forEach((user) => {
      arr.push(User.create(user))
    })
    
    data.productArray.forEach((product) => {
      arr.push(Product.create(product))
    })

    data.orderArray.forEach((order) => {
      arr.push(Order.create(order))
    })
    
    data.categoryArray.forEach((category) => {
      arr.push(Category.create(category))
    })
    data.reviewArray.forEach((review) => {
      arr.push(Review.create(review))
    })
  
    data.productCategoriesArray.forEach((productCategories) => {
      arr.push(ProductCategory.create(productCategories))
    })

    data.productOrdersArray.forEach((productOrders) => {
      arr.push(ProductOrder.create(productOrders))
    })
    return arr
  })()

  try {
    await Promise.all(createsArray)
  } catch (err) {
    console.error(err)
  }
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

console.log('seeding...')
