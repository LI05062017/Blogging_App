import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import PostInfo from './PostInfo'
import $ from 'jquery'
import PropTypes from 'prop-types'

class BlogPostContainer extends Component {
  state = {
    post: undefined
  }

  static propTypes = {
    match: PropTypes.object.isRequired
  }
  componentDidMount () {
    const postId = this.props.match.params.postId
    this.loadPost(postId)
  }

  loadPost = (id) => {
    $.ajax({
      url: `/api/blog/${id}`,
      method: 'GET'
    }).done((response) => {
      console.log(response)
      this.setState({post: response.post})
    })
  }

  render () {
    return (
      <div>
      Hello From Hero BlogPostContainer
        {
          this.state.post
            ? <PostInfo post={this.state.post} />
            : 'Error'
        }
      </div>
    )
  }
}

export default withRouter(BlogPostContainer)
