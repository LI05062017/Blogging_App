import React from 'react'
import BlogPostCard from './BlogPostCard'
import PropTypes from 'prop-types'

const style = {
  container: {
    width: `calc(25% - 20%')`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: 10,
    paddingBottom: 40,
  },
  h1: {
    backgroundColor: '#FEDCDC',
    fontFamily: 'Poiret One',
    textAlign: 'center',
    fontSize: 50,
    paddingTop: 15,
    paddingBottom: 15,
    margin: 30,
  }, 
  background: {
   backgroundColor: '#A9A4A8',
   padding: 2
  }
}

const BlogPosts = ({ posts, deletePost, showUniquePost, blog }) => {
  return (
    <div style={style.background}>
      <h1 style={style.h1}> All Blog Posts </h1>
      <div style={style.container}>
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
