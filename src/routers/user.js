const express = require('express')
const { Queue } = require('node-resque');

const connectionDetails = {
  pkg: "ioredis",
  host: "127.0.0.1",
  password: null,
  port: 6379,
  database: 0,
  // namespace: 'resque',
  // looping: true,
  // options: {password: 'abc'},
};

const router = new express.Router()

const queue = new Queue({ connection: connectionDetails });

router.get('/users', async (req, res) => {
  await queue.connect();
  await queue.enqueue("math", "add", [1, 2]);

  res.status(201).send([{
    id: 1,
    name: 'ethan'
  }])
})

module.exports = router