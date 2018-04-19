const router = require('express').Router()
const { Product, Category } = require('../../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (error) {
    next(error)
  }
})

router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId)
    res.json(product)
  } catch (error) {
    next(error)
  }
})

router.get('/category/:categoryId', async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.categoryId)
    const products = await category.getProducts()
    res.json(products)
  } catch (err) {
    next(err)
  }
})
