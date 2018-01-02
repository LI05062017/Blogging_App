import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
import {
  withRouter
} from 'react-router-dom'
import CreatePostForm from './CreatePostForm'

class CreateBlogPost extends Component {
  state = {
    title: undefined,
    description: undefined,
    img: undefined
  }

  static propTypes = {
    loadBlogPostsFromServer: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }

  onTitleChange = (e) => this.setState({ title: e.target.value })
  onDescriptionChange = (e) => this.setState({ description: e.target.value })
  onImageChange = (e) => this.setState({ img: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault()
    const {title, description, img} = this.state
    const post = {title, description, img}
    $.ajax({
      url: '/api/blog',
      method: 'POST',
      data: post
    }).done((response) => {
      this.props.loadBlogPostsFromServer()
      this.props.history.push('/blog')
    })
  }

  render () {
    // console.log(this.props)
    return (
      <div>
        <h3> Create Post </h3>
        <CreatePostForm
          title={this.state.title}
          description={this.state.description}
          img={this.state.img}
          onTitleChange={this.onTitleChange}
          onDescriptionChange={this.onDescriptionChange}
          onImageChange={this.onImageChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default withRouter(CreateBlogPost)
