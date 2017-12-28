import React from 'react'
import {
  Link
} from 'react-router-dom'

const style = {
  container: {
    border: '3px solid #A8DBD1',
    backgroundColor: '#FEFEFE',
    padding: 20,
    margin: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'

  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Petit Formal Script'
  },
  link: {
    padding: 15
  }
}

const NavBar = () => {
  return (
    <nav style={style.container}>
      <h1 style={style.title}>LifeStyle Blog</h1>
      <div style={style.link}>
        <select>
          <option> <Link to='/'>Home</Link> </option>
          <option> <Link to='/'>About</Link> </option>
          <option> <Link to='/'>All Posts</Link> </option>
          <option> <Link to='/'>Create Post </Link> </option>
          <option> <Link to='/'>Food</Link> </option>
          <option> <Link to='/'>Style</Link> </option>
          <option> <Link to='/'>Travel</Link> </option>
          <option> <Link to='/'>WishList</Link> </option>
        </select>
      </div>
    </nav>
  )
}

export default NavBar
