const express = require('express')
const router = new express.Router()

router.get('/users', async (req, res) => {
  res.status(201).send([{
    id: 1,
    name: 'ethan'
  }])
})

module.exports = router