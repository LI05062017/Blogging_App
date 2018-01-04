import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const style = {
  container: {
    // border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
    marginRight: 100,
    marginLeft: 100,
    marginTop: 5
  },
  h3: {
    fontFamily: 'Open Sans Condensed',
    fontSize: 25,
    textAlign: 'center',
    padding: 15,
    letterSpacing: 4,
    textDecoration: 'underline'
  },
  button: {

  },
  p: {
    textAlign: 'center',
  },
  cards: {
    border: '1px solid #BFC0C0',
    borderRadius: 1,
    // backgroundColor: 'white',
    // display: 'flex',
    // flexDirection: 'column',
    // flexWrap: 'wrap',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingBottom: 10,
  },
  img: {
    width: '80%',
  }
}

const BlogPostCard = ({deletePost, showUniquePost, blog, post}) => {
  console.log(blog, '****')
  return (
    <div style={style.container}>
      <div style={style.cards}>
        <h3 style={style.h3} > {post.title}</h3>
        <img style={style.img}img src={post.img} />
        {/* <p style={style.p}> {post.description} </p> */}
        <Link to={`/blog/${post._id}`}> View Post </Link>
        {/* <Link to={`/edit-blog/${post._id}`}> Edit Post </Link> */}
        <button onClick={() => deletePost(post)}> Delete Post </button>
        <button onClick={() => showUniquePost(post)}> More Info </button>
      </div>
    </div>

  )
}

BlogPostCard.propTypes = {
  deletePost: PropTypes.func.isRequired,
  showUniquePost: PropTypes.func.isRequired,
  blog: PropTypes.func.isRequired,
  post: PropTypes.func.isRequired
}

export default BlogPostCard
