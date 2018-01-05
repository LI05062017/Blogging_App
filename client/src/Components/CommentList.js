import React from 'react'
import PropTypes from 'prop-types'
import CommentCard from './CommentCard'

const style = {
  container: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  p: {
    fontSize: 20,
    textDecoration: 'underline',
    fontFamily: 'Pavanam', 
  },
  comments: {
  }
}

const CommentList = ({comments}) => {
  return (
    <div style={style.container}>
      <p style={style.p}> Comments  </p>
      <div style={style.comments}>
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
    </div>
  )
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentList
