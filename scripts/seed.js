#!/usr/bin/env node

const { db, User, Product, Category } = require('../server/db')

const seed = async () => {
  await db.sync({ force: true })
  console.log('db synced!')
  const users = await Promise.all([
    User.create({ email: 'cody@email.com', password: '123' }),
    User.create({ email: 'grace@hopper.com', password: '123' })
  ])
  const categories = await Promise.all([
    Category.create({
      id: 1,
      name: 'Beam-Type1'
    }),
    Category.create({
      id: 2,
      name: 'Beam-Type2'
    })
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
    }),
    Product.create({
      id: 3,
      name: 'Beam3',
      price: 2998,
      description: 'longtext',
      inventory: 1089,
      imageUrl:
        'https://www.cornerstone-hw.com/wp-content/uploads/2018/02/example-1prdct1.png'
    }),
    Product.create({
      id: 4,
      name: 'Beam4',
      price: 2931,
      description: 'longtext',
      inventory: 103,
      imageUrl:
        'https://www.cornerstone-hw.com/wp-content/uploads/2018/02/example-1prdct1.png'
    }),
    Product.create({
      id: 5,
      name: 'Beam5',
      price: 2777,
      description: 'longtext',
      inventory: 120,
      imageUrl:
        'https://www.cornerstone-hw.com/wp-content/uploads/2018/02/example-1prdct1.png'
    })
  ])
  // const beamType1 = Category.findById(1)
  // const beamType2 = Category.findById(2)
  // const catProd = await Promise.all([
  //   beamType1.addProduct('Beam1'),
  //   beamType1.addProduct('Beam2'),
  //   beamType1.addProduct('Beam3'),
  //   beamType2.addProduct('Beam4'),
  //   beamType2.addProduct('Beam5')
  // ])
  console.log(`
    seeded ${users.length} users
    seeded ${categories.length} categories
    seeded ${products.length} products
    `)
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
