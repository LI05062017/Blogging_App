import React from 'react'
import BlogPostCard from './BlogPostCard'
import PropTypes from 'prop-types'

const BlogPosts = ({posts, deletePost, showUniquePost}) => {
  return (
    <div>
      <h1> Blog Posts! </h1>
      {
        posts.map((post) => {
          return (
            <BlogPostCard
              post={post}
              deletePost={deletePost}
              showUniquePost={showUniquePost}
            />
          )
        })
      }
    </div>
  )
}

BlogPosts.propTypes = {
  posts: PropTypes.array.isRequired,
  deletePost: PropTypes.func.isRequired,
  showUniquePost: PropTypes.func.isRequired

}

export default BlogPosts
