const express = require('express')
const server = express()
const path = require('path')

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

server.post('/display', (req, res) => {
  console.log(res)
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const email = req.body.email
  res.send(`<p>First name: ${firstName}</p><p>Last name: ${lastName}</p><p>Email: ${email}</p>`)
})

module.exports = server
