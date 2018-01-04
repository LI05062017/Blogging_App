import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import $ from 'jquery'
import EditPostForm from './EditPostForm'
import PropTypes from 'prop-types'

class EditPostContainer extends Component {
  state = {
    title: undefined,
    img: undefined,
    description: undefined,
    loading: true
  }

static propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

componentDidMount () {
  this.loadBlogPostsFromServer()
}

onTitleChange = (e) => this.setState({ title: e.target.value })
onDescriptionChange = (e) => this.setState({ description: e.target.value })
onImageChange = (e) => this.setState({ img: e.target.value })

loadBlogPostsFromServer = () => {
  $.ajax({
    url: `/api/blog/${this.props.match.params.blogId}`,
    method: 'GET'
  }).done((response) => {
    console.log(response, '*****Y')
    const {title, description, img} = response.data
    this.setState({
      title,
      description,
      img,
      loading: false
    })
  })
}

submitPostToServer = (e) => {
  e.preventDefault()
  const {title, description, img} = this.state
  const blog = {title, description, img}
  console.log('POST TO EDIT', blog)
  $.ajax({
    url: `/api/blog/${this.props.match.params.blogId}`,
    method: 'PUT'
  }).done((response) => {
    console.log('RES FROM PUT', response)
    alert(`${response.blog.title} updated`)
    this.props.history.push(`/blog/${response.blog._id}`)
  })
}

render () {
  const {title, description, img} = this.state
  return (
    <div>
      {
        !this.state.loading
          ? <EditPostForm
            title={title}
            description={description}
            img={img}
            onTitleChange={this.onTitleChange}
            onDescriptionChange={this.onDescriptionChange}
            onImageChange={this.onImageChange}
            submitPostToServer={this.submitPostToServer}
          />
          : <h1> Loading ... </h1>
      }
    </div>
  )
}
}

export default withRouter(EditPostContainer)
