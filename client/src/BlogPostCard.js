import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const style = {
  container: {
    padding: 5,
    marginRight: 5,
    marginLeft: 5,
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
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  button: {
    margin: 2,
  },
  p: {
    textAlign: 'center'
  },
  cards: {
    border: '3px solid #FEDCDC',
    backgroundColor: 'white',
    borderRadius: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
  },
  img: {
    width: '50%'
  }
}

const BlogPostCard = ({deletePost, showUniquePost, blog, post}) => {
  console.log(post, '****')
  return (
    <div style={style.container}>
      <div style={style.cards}>
        <h3 style={style.h3} > {post.title}</h3>
        <img style={style.img}img src={post.img} />
        <p style={style.p}> {post.description} </p>
        <Link to={`/blog/${post._id}`}> View Post </Link>
        <Link to={`/edit-blog/${post._id}`}> Edit Post </Link>
        <div style={style.buttonContainer}>
          <button style={style.button} onClick={() => deletePost(post)}> Delete Post </button>
          <button style={style.button} onClick={() => showUniquePost(post)}> More Info </button>
        </div>
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
