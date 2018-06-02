const express = require('express')
const server = express()
const path = require('path')
const bodyParser = require('body-parser')

server.use(bodyParser({extended: false}))
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

server.post('/display', (req, res) => {
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const email = req.body.email
  res.send(`<p>First name: ${firstName}</p><p>Last name: ${lastName}</p><p>Email: ${email}</p>`)
})

server.post('/endpoint', function (req, res) {
  // console.log('body: ' + JSON.stringify(req.body))
  res.send(req.body)
})

module.exports = server
