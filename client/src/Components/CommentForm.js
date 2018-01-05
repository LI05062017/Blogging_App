import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    borderRadius: 2,
    padding: 3,
    margin: 3,
    backgroundColor: '#FEDCDC'
  },
  title: {
    fontSize: 20,
    fontFamily: 'Dancing Script',
    textAlign: 'center',
    letterSpacing: '1px',
  }
}

const CommentForm = ({ handleOnTextChange, submitComment, text }) => {
  return (
    <div>
      <h5 style={style.title}> Leave a Comment! </h5>
      <form style={style.container}>
        <textarea rows='4' cols='40' onChange={handleOnTextChange} value={text} />
        <button style={style.button} type='button' onClick={submitComment}> Submit Comment! </button>
      </form>
    </div>
  )
}

CommentForm.propTypes = {
  handleOnTextChange: PropTypes.func.isRequired,
  submitComment: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default CommentForm
