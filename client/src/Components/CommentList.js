import React from 'react'
import PropTypes from 'prop-types'
import CommentCard from './CommentCard'

const CommentList = ({comments}) => {
  return (
    <div>
      <h2> Comments </h2>
      {
        comments && comments.length > 0
          ? comments.map(comment => {
            return <CommentCard
              key={comment._id}
              text={comment.text}
            />
          })
          : <p> No Comments </p>
      }
    </div>
  )
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentList
