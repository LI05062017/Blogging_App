import React from 'react'
import PropTypes from 'prop-types'
import CommentList from './Components/CommentList'
import CommentForm from './Components/CommentForm'

const PostInfo = ({post, comments, submitComment, handleOnTextChange, text}) => {
  return (
    <div>
      <p> {post.title} </p>
      <p> {post.description} </p>
      <img src={post.img} />
      <CommentList
        comments={comments} />
      <CommentForm
        handleOnTextChange={handleOnTextChange}
        submitComment={submitComment}
        text={text}
      />

    </div>
  )
}

PostInfo.propTypes = {
  post: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  submitComment: PropTypes.func.isRequired,
  handleOnTextChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired

}

export default PostInfo
