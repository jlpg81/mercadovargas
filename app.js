const express = require('express')
const logger = require('morgan');
const router = require('./server/router/router')
const bodyParser = require('body-parser')
const cors = require('cors')

const sequelize = require('./server/config/database')


// Database
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('error', err))
const inputDummyData = require('./dummydata')
inputDummyData()

// for authentication, use passport.js

const app = express()
const PORT = (process.env.PORT || 4000)




app.use(logger('dev'));
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(router)

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})
