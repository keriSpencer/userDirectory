const express = require('express')
const data = require('./data')
const mustacheExpress = require('mustache-express')

const app = express()

app.get('/', (res, req) => {})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
