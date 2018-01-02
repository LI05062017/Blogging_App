const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const BlogPost = require('./models/BlogPost')
const blogRoutes = require('./routes/blog')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/Blogging-App')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

// app.use('/', BlogPost)
app.use('/', blogRoutes)

const server = app.listen(port, () => console.log(`⚡️Running on port: ${port}⚡️`))

module.exports = server
