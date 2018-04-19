const router = require('express').Router()
const { ProductCategory, Category, Product } = require('../../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll()
    res.json(categories)
  } catch (error) {
    next(error)
  }
})

router.get('/:categoryId/products', async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.categoryId)
    const products = await category.getProducts()
    res.json(products)
  } catch (error) {
    next(error)
  }
})
