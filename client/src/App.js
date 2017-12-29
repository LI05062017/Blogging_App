import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import $ from 'jquery'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import CreateBlogPost from './CreateBlogPost'
import BlogPostContainer from './BlogPostContainer'
import BlogPosts from './BlogPosts'
import EditPostContainer from './EditPostContainer'

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
    this.setState({posts: response.blogPost})
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
    console.log(response)
  })
}

deleteHero = (blog) => {
  $.ajax({
    url: `/api/blog/${blog._id}`,
    method: 'DELETE'
  }).done((response) => {
    console.log(response)
    this.loadBlogPostsFromServer()
  })
}

showUniquePost = (blog) => {
  $.ajax({
    url: `/api/blog/${blog._id}`,
    method: 'GET'
  }).done((response) => {
    console.log(response)
  })
}

render () {
  return (
    <div>

      <Router>
        <div>
          <NavBar />
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/' component={About} />
          {
            this.state.posts
              ? <Route path='/create-blog' render={() => <CreateBlogPost posts={this.state.posts} loadBlogPostsFromServer={this.loadBlogPostsFromServer} />} />
              : 'No Posts'
          }

          {
            this.state.posts
              ? <Route path='/blog' render={() => <BlogPosts showUniqueHero={this.showUniqueHero} deleteHero={this.deleteHero} heroes={this.state.heroes} />} />
              : 'Error!'
          }
          <Route path='/blog/:blogId' render={() => <BlogPostContainer />} />
          {
            this.state.posts
              ? <Route path='/edit-blog/:blogId' render={() => <EditPostContainer posts={this.state.posts} />} />
              : 'no posts'
          }
        </div>
      </Router>

    </div>
  )
}
}

export default App
