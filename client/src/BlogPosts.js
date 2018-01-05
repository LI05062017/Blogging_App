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
    paddingBottom: 40
  },
  h1: {
    backgroundColor: 'white',
    // borderBottom: '2px solid grey',
    color: 'black',
    // bottomBorderStyle: 'solid',
    borderRadius: 2,
    fontFamily: 'Poiret One',
    textAlign: 'center',
    fontSize: 50,
    paddingTop: 15,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 0,
    marginLeft: 70,
    marginRight: 70
  },
  p: {
    backgroundColor: 'white',
    fontFamily: 'Open Sans Condensed',
    fontSize: 25,
    textDecoration: 'overline',
    textAlign: 'center',
    padding: 19,
    letterSpacing: 4,
    marginLeft: 70,
    marginRight: 70
  },
  background: {
    backgroundColor: '#FFEAEB',
    padding: 2
  }
}

const BlogPosts = ({ posts, deletePost, showUniquePost, blog }) => {
  return (
    <div style={style.background}>
      <h1 style={style.h1}> Trending Blog Posts </h1>
      <p style={style.p}> All Blog Posts </p>
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
