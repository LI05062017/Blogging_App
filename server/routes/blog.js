const express = require('express')
const Router = express.Router()
const BlogPost = require('../models/BlogPost')
const Comment = require('../models/Comment')

// delete route for comments
Router.route('/api/comments/:commentId')
  .delete((req, res) => {
    const commentId = req.params.commentId
    Comment.remove({ _id: commentId }, (err, comment) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({msg: `Deleted: ${comment}`})
      }
    })
  })

Router.route('/api/blog')
  .get((req, res) => {
    BlogPost.find()
      .populate('comments')
      .exec((err, blog) => {
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

Router.route('/api/blog/:blogId/comments')
  .post((req, res) => {
    const {text} = req.body
    const newComment = {text}

    Comment(newComment).save((err, savedComment) => {
      if (err) {
        res.json({error: err})
      } else {
        BlogPost.findById({ _id: req.params.blogId }, (err, blog) => {
          if (err) {
            res.json({ error: err })
          } else {
            blog.comments.push(savedComment._id)
            blog.save((err, updatedBlog) => {
              if (err) {
                res.json({ error: err })
              } else {
                res.json({ msg: 'Success', data: updatedBlog })
              }
            })
          }
        })
      }
    })
  })

Router.route('/api/blog/:blogId')
  .get((req, res) => {
    const blogId = req.params.blogId
    BlogPost.findById({_id: blogId})
      .populate('comments')
      .exec((err, blog) => {
        if (err) {
          res.json({ error: err })
        } else {
          res.json({ msg: 'SUCCESS', data: blog })
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

Router.route('/api/blog/:blogId')
  .put((req, res) => {
    const editPostId = req.params.blogId
    BlogPost.findById({ _id: editPostId }, (err, blog) => {
      if (err) {
        console.log('ERROR GETTING HERE', err)
        res.json({ error: err })
      } else {
        blog.title = req.body.title ? req.body.title : blog.title
        blog.description = req.body.description ? req.body.description : blog.description
        blog.img = req.body.img ? req.body.img : blog.img

        blog.save((err, updatedBlog) => {
          if (err) {
            console.log('ERRORRRR', err)
            res.json({ error: err })
          } else {
            res.json({msg: 'Successfully updated', blog: updatedBlog})
          }
        })
      }
    })
  })

module.exports = Router
