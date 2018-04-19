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
<<<<<<< HEAD
=======

//TODO fix later
router.get('/:categoryId', async (req, res, next) => {
  try {
    const categories = await ProductCategory.findAll({
      where: { categoryId: req.params.categoryId }
    })
    res.json(categories)
  } catch (error) {
    next(error)
  }
})
>>>>>>> master
