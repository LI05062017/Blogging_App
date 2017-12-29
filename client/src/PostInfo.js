import React from 'react'
import PropTypes from 'prop-types'

const PostInfo = ({post}) => {
  return (
    <div>
      <p> {post.title} </p>
      <p> {post.description} </p>
      <img src={post.img} />
    </div>
  )
}

PostInfo.propTypes = {
  post: PropTypes.func.isRequired
}

export default PostInfo
