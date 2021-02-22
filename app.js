const express = require('express')
const logger = require('morgan');
const router = require('./server/router/router')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 4000


app.use(logger('dev'));
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(router)

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})