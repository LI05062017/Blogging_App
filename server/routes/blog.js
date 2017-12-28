const express = require('express')
const Router = express.Router()
const BlogPost = require('../models/BlogPost')

Router.route('/api/blog')
  .get((req, res) => {
    BlogPost.find((err, blog) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: 'SUCCESS', blog })
      }
    })
  })

Router.route('/api/blog')
  .post((req, res) => {
    const {title, description, img} = req.body
    const newPost = {title, description, img}

    BlogPost(newPost).save((err, savedPost) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: 'Your post was successfully created!🌟', data: savedPost })
      }
    })
  })

Router.route('/api/blog/:blogId')
  .get((req, res) => {
    const blogId = req.params.blogId
    BlogPost.findById({_id: blogId}, (err, blog) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: 'SUCCESS', blog })
      }
    })
  })

Router.route('/api/blog/:blogId')
  .delete((req, res) => {
    const deleteId = req.params.blogId
    BlogPost.remove({_id: deleteId}, (err, blog) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: 'Your Post was deleted', blog })
      }
    })
  })
module.exports = Router
