const router = require('express').Router()
const { Product, Category } = require('../../db')
const Op = require('sequelize')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    //TODO filter the products database and return an array with the proper filter
    if (req.query) {
      console.log(req.query.name)
      const products = await Product.findAll({
        where: {
          name: 'Licensed Soft Chips'
          // {
          //   [Op.like]: `%${req.query.name}`
          // }
        }
      })
      console.log(products)
      res.json(products)
    } else {
      const products = await Product.findAll()
      res.json(products)
    }
  } catch (error) {
    next(error)
  }
})

router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findAll({
      where: { id: req.params.productId },
      include: { all: true }
    })
    if (product) {
      //we are returning product[0] so that we only get a single object, instead of an array
      res.json(product[0])
    } else {
      res.status(404)
    }
  } catch (error) {
    next(error)
  }
})

router.get('/category/:categoryId', async (req, res, next) => {
  try {
    console.log(req.params.categoryId)
    if (req.params.categoryId === 'All Products') {
      const products = await Product.findAll()
      res.json(products)
    } else {
      const category = await Category.findById(req.params.categoryId)
      const products = await category.getProducts()
      res.json(products)
    }
  } catch (err) {
    next(err)
  }
})
