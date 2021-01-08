const express = require('express')
const { queue } = require('../services/resque');

const router = new express.Router()

router.get('/users', async (req, res) => {
  await queue.enqueue("math", "add", [1, 2])

  res.status(201).send([{
    id: 1,
    name: 'ethan'
  }])
})

module.exports = router