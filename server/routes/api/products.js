const router = require('express').Router()
const { Product } = require('../../db')
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
    const product = await Product.findAll({where: {id: req.params.productId}, include: {all: true}})
    if (product) {
      res.json(product)
    } else {
      res.status(404)
    }
  } catch (error) {
    next(error)
  }
})
//eager loading
//what if there is no product. what do we send back? new res.json if there is no product found?
