import React from 'react'
import PropTypes from 'prop-types'

const CommentForm = ({ handleOnTextChange, submitComment, text }) => {
  return (
    <form>
      <textarea rows='4' placeholder='Please Comment Here' onChange={handleOnTextChange} value={text} />
      <button type='button' onClick={submitComment}> Comment </button>
    </form>
  )
}

CommentForm.propTypes = {
  handleOnTextChange: PropTypes.func.isRequired,
  submitComment: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default CommentForm
