import React from 'react'
import PropTypes from 'prop-types'
import CommentList from './Components/CommentList'
import CommentForm from './Components/CommentForm'

const style = {
  container: {
    backgroundColor: '#E0E3FA',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    borderBottomStyle: 'solid',
    fontFamily: 'Poiret One',
    textAlign: 'center',
    fontSize: 50,
    padding: 10
  },
  img: {
    alignItems: 'center',
    width: '70%',
    border: '3px solid grey'
  },
  p: {
    fontSize: 18,
    fontFamily: 'Open Sans Condensed',
    padding: 10,
    margin: 5
  },
  commentForm: {

  },
  commentList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  card: {
    border: '6px solid #FEDCDC',
    borderRadius: 3,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    padding: 5,
  }
}

const PostInfo = ({post, comments, submitComment, handleOnTextChange, text}) => {
  return (
    <div style={style.container}>
      <div style={style.card}>
        <h1 style={style.title}> {post.title} </h1>
        <img style={style.img}src={post.img} />
        <p style={style.p}> {post.description} </p>
        <div style={style.commentForm}>
          <CommentForm
            handleOnTextChange={handleOnTextChange}
            submitComment={submitComment}
            text={text}
          />
        </div>
        <div style={style.commentList}>
          <CommentList
            comments={comments} />
        </div>
      </div>
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
