import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
import {
  withRouter
} from 'react-router-dom'

class CreateBlogPost extends Component {
  state = {
    title: undefined,
    description: undefined,
    img: undefined
  }

  staticpropTypes = {
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
      date: post
    }).done((response) => {
      this.props.loadBlogPostsFromServer()
      this.props.history.push('/blog')
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h3> Create Post </h3>
      </div>
    )
  }
}

export default CreateBlogPost