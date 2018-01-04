import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import $ from 'jquery'
import BlogPosts from './BlogPosts'
import CreateBlogPost from './CreateBlogPost'
import BlogPostContainer from './BlogPostContainer'
import EditPostContainer from './EditPostContainer'
import NavBar from './Components/NavBar'
// import Header from './Components/Header'
import Home from './Components/Home'
import './Components/style.css'

class App extends Component {
state = {
  posts: undefined
}

componentDidMount () {
  this.loadBlogPostsFromServer()
}

loadBlogPostsFromServer = () => {
  $.ajax({
    url: '/api/blog',
    method: 'GET'
  }).done((response) => {
    // console.log('**********', response)
    this.setState({posts: response.blog})
  })
}

submitBlogPost = (e) => {
  e.preventDefault()
  const newPost = {
    title: this.state.title,
    description: this.state.description,
    img: this.state.img
  }
  $.ajax({
    url: '/api/blog',
    method: 'POST',
    data: newPost
  }).done((response) => {
    console.log(response, '*******')
  })
}

deletePost = (blog) => {
  $.ajax({
    url: `/api/blog/${blog._id}`,
    method: 'DELETE'
  }).done((response) => {
  // console.log('**********', response)
    this.loadBlogPostsFromServer()
  })
}

showUniquePost = (blog) => {
  $.ajax({
    url: `/api/blog/${blog._id}`,
    method: 'GET'
  }).done((response) => {
    console.log(response)
    const post = response.blog
    alert(`${post.title}`)
  })
}

render () {
  return (
    <div>

      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
          {
            this.state.posts
              ? <Route path='/create-blog' render={() => <CreateBlogPost loadBlogPostsFromServer={this.loadBlogPostsFromServer} />} />
              : 'No Posts'
          }

          <Route exact path='/blog/:blogId' render={() => <BlogPostContainer />} />

          {
            this.state.posts
              ? <Route exact path='/blog' render={() => <BlogPosts showUniquePost={this.showUniquePost} deletePost={this.deletePost} posts={this.state.posts} />} />
              : 'Error!'
          }

          {
            this.state.posts
              ? <Route path='/edit-blog/:blogId' render={() => <EditPostContainer posts={this.state.posts} />} />
              : 'no posts'}

        </div>
      </Router>
    </div>
  )
}
}

export default App
