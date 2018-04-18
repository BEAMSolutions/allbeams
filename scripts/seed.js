#!/usr/bin/env node

const {db, User, Product} = require('../server/db')

const seed = async () => {
  await db.sync({force: true})
  console.log('db synced!')
  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'grace@hopper.com', password: '123'})
  ])
  const products = await Promise.all([
    Product.create({
      id: 1,
      name: 'Beam1',
      price: 2000,
      description: 'longtext',
      inventory: 1000,
      imageUrl:
        'https://www.cornerstone-hw.com/wp-content/uploads/2018/02/example-1prdct1.png'
    }),
    Product.create({
      id: 2,
      name: 'Beam2',
      price: 299,
      description: 'longtext',
      inventory: 10,
      imageUrl:
        'https://www.cornerstone-hw.com/wp-content/uploads/2018/02/example-1prdct1.png'
    })
  ])
  console.log(`seeded ${users.length} users`)
  console.log('email: ', users[0].email, ' password: 123')
  console.log('email: ', users[1].email, ' password: 123')
  console.log(`seeded successfully`)
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

