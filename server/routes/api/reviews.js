const router = require('express').Router()
const { Review, User } = require('../../db')
module.exports = router

router.get('/:productId', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      where: { productId: req.params.productId },
      include: [
        {model: User}
      ]
    })
    res.json(reviews)
  } catch (error) {
    next(error)
  }
})

router.post('/:productId', (req, res, next) => {
  //TODO this is going to be used to actually write the review
  try {
    res.send('posted test replace soon')
  } catch (error) {
    next(error)
  }
})
