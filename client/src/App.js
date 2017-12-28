import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import $ from 'jquery'
import NavBar from './NavBar'
import Header from './Header'
import Home from './Home'
import About from './About'
import CreateBlogPost from './CreateBlogPost'

class App extends Component {
state = {
  blogPost: undefined
}

componentDidMount () {
  this.loadBlogPostsFromServer()
}

loadBlogPostsFromServer = () => {
  $.ajax({
    url: '/api/blog',
    method: 'GET'
  }).done((response) => {
    this.setState({blogPost: response.blogPost})
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
    method: 'Post',
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
    const post = response.post
  })
}

render () {
  return (
    <div>

      <Router>
        <div>
          <NavBar />
          <Header />
          <div> Hello World </div>
          <Route exact path='/' component={Home} />
          {
            this.state.blogPost
              ? <Route path='/create-blog' render={() => <CreateBlogPost loadBlogPostsFromServer={this.loadBlogPostsFromServer} />} />
              : 'Error'
          }
          <Route path='/' component={About} />
        </div>
      </Router>

    </div>
  )
}
}

export default App
