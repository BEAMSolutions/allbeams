const router = require('express').Router()
const { Category } = require('../../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    console.log('categories is being called through api'    )
    const categories = await Category.findAll()
    res.json(categories)
  } catch (error) {
    next(error)
  }
})
