// api.js
const express = require('express')
const router = express.Router()
const Pusher = require('pusher')

const pusher = new Pusher({
  appId: '1359988',
  key: 'b9de8040a1df13b9b9f5',
  secret: 'c4ac2e0da34c72427b8f',
  cluster: 'us2',
  useTLS: true,
})

router.get('/', (req, res) => {
  res.send('all good')
})

router.post('/pusher/auth', (req, res) => {
  const push = pusher.trigger('salata-Chat-1', 'message', {
    message: 'hello world',
  })
  console.log(push)
  //res.send(auth)
})

module.exports = router
