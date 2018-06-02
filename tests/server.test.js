const server = require('../server')
const cheerio = require('cheerio')
const request = require('supertest')

test('test suite is running', () => {
  expect(true).toBeTruthy()
})

test('test index route', (done) => {
  request(server)
    .get('/')
    .expect(200)
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      const h1 = $('h1').text()
      expect(h1).toMatch('Simple Contact Form')
      done(err)
    })
})

test('/contact.html route should lead to contact form', (done) => {
  request(server)
    .get('/contact.html')
    .expect(200)
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      const label = $('label').text()
      expect(label).toMatch('name')
      done(err)
    })
})

test('post should send data', (done) => {
  // const testFirstName = 'Jenny'
  // const testLastName = 'Assana'
  const testEmail = 'jennyA@gmail.com'
  request(server)
    .post('/display')
    .send(`email=${testEmail}`)
    .expect(200)
    .end((err, res) => {
      expect(res.text).toMatch(testEmail)
      done(err)
    })
})
