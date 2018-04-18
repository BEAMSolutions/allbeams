const router = require('express').Router()
const { Order } = require('../../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll()
    res.json(orders)
  } catch (error) {
    next(error)
  }
})

router.get('/:orderId', async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.orderId)
    res.json(order)
  } catch (error) {
    next(error)
  }
})

router.put('/:orderId', (req, res, next) => {
  //used to change the status of an order
  try {
    const status = res.status
    res.json(status)
  } catch (error) {
    next(error)
  }
})
