const router = require('express').Router()
const { Product, Category } = require('../../db')
//I added .op to the end of require sequelize
const Op = require('sequelize').Op
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (error) {
    next(error)
  }
})

router.get('/search', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      where: {
        name: {
          [Op.iLike]: `%${req.query.name}%`
        }
      }
    })
    console.log(products)
    res.json(products)
  } catch (error) { 
    next(error)
  }
})

router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.find({
      where: { id: req.params.productId },
      include: { all: true }
    })
    //we are returning product[0] so that we only get a single object, instead of an array
    res.json(product)
  } catch (error) {
    next(error)
  }
})

router.get('/category/:categoryId', async (req, res, next) => {
  try {
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
