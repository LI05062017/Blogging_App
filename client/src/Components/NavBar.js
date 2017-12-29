import React from 'react'
import {
  Link
} from 'react-router-dom'
import PropTypes from 'prop-types'

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
    padding: 20
  }
}

const NavBar = ({DropdownButton, MenuItem}) => {
  return (
    <nav style={style.container}>
      <h1 style={style.title}>LifeStyle Blog</h1>
      <div style={style.link}>

        <Link to='/'>Home</Link>
        <Link to='/'>About</Link>
        <Link to='/'>All Posts</Link>
        <Link to='/'>Create Post </Link>
        <Link to='/'>Food</Link>
        <Link to='/'>Style</Link>
        <Link to='/'>Travel</Link>
        <Link to='/'>WishList</Link>

      </div>
    </nav>
  )
}

NavBar.propTypes = {
  DropdownButton: PropTypes.func.isRequired,
  MenuItem: PropTypes.func.isRequired

}

export default NavBar
