const router = require('express').Router()
const { Review } = require('../../db')
module.exports = router

router.get('/:productId', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      where: { id: req.params.productId }
    })
    res.json(reviews)
  } catch (error) {
    next(error)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.Id)
    res.json(review)
  } catch (error) {
    next(error)
  }
})

router.post('/:productId', (req, res, next) => {
  //this is going to be used to actually write the review
  try {
    res.send('posted test replace soon')
  } catch (error) {
    next(error)
  }
})
