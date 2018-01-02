import React from 'react'
import BlogPostCard from './BlogPostCard'
import PropTypes from 'prop-types'

const BlogPosts = ({ posts }) => {
  return (
    <div>
      <h1> Blog Posts! </h1>
      {
        posts.map(post => {
          return (
            <p>{post.title}</p>
          )
        })
      }
    </div>
  )
}

export default BlogPosts
