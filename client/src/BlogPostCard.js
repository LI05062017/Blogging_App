import React from 'react'
// import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const BlogPostCard = ({posts, deletePost, showUniquePost}) => {
  return (
    <div>
      <p> this is your blog post card </p>
      <h3> {posts.title}</h3>

    </div>

  )
}

BlogPostCard.propTypes = {
  posts: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  showUniquePost: PropTypes.func.isRequired
}

export default BlogPostCard
