import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import PostInfo from './PostInfo'
import $ from 'jquery'
import PropTypes from 'prop-types'

class BlogPostContainer extends Component {
  state = {
    post: undefined
    // comments: undefined,
    // text: undefined
  }

  static propTypes = {
    match: PropTypes.object.isRequired
  }
  componentDidMount () {
    const blogId = this.props.match.params.blogId
    this.loadBlog(blogId)
  }

  loadBlog = (id) => {
    $.ajax({
      url: `/api/blog/${id}`,
      method: 'GET'
    }).done((response) => {
      console.log(response)
      this.setState({post: response.blog})
    })
  }

  // submitComment = (e) => {
  //   e.preventDefault()
  //   const newComment = {text: this.state.text}
  //   $.ajax({
  //     url: `/api/blog/${this.props.match.params.blogId}/comments`,
  //     method: 'POST',
  //     data: newComment
  //   }).done((response) => {
  //     this.loadPost(this.props.match.params.blogId)
  //     this.setState({text: ''})
  //   })
  // }

  // handleOnTextChange = (e) => this.setState({ text: e.target.value })

  render () {
    return (
      <div>
      Hello From Hero BlogPostContainer!!!!!
        {
          this.state.post
            ? <PostInfo
              post={this.state.post}
              comments={this.state.comments}
              submitComment={this.submitComment}
              handleOnTextChange={this.handleOnTextChange}
              text={this.state.text}
            />
            : 'Error'
        }
      </div>
    )
  }
}

export default withRouter(BlogPostContainer)
