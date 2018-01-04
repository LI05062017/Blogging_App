import React from 'react'
import PropTypes from 'prop-types'

const CommentCard = ({text}) => {
  return (
    <p> {text} </p>
  )
}

CommentCard.propTypes = {
  text: PropTypes.string.isRequired
}

export default CommentCard
