import React from 'react'
import BlogPostCard from './BlogPostCard'
import PropTypes from 'prop-types'

const style = {
  container: {
  },
  h1: {
    fontFamily: 'Poiret One',
    textAlign: 'center',
    fontSize: 50,
    paddingTop: 20
  }
}

const BlogPosts = ({ posts, deletePost, showUniquePost, blog }) => {
  return (
    <div className='blogPost'>
      <h1 style={style.h1}> All Blog Posts </h1>
      {
        posts.map(post => {
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
  blog: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired,
  deletePost: PropTypes.func.isRequired,
  showUniquePost: PropTypes.func.isRequired

}

export default BlogPosts
