import React from 'react'
import {
  Link
} from 'react-router-dom'
import PropTypes from 'prop-types'
import './style.css'

const style = {
  container: {
    borderBottomStyle: 'solid',
    backgroundColor: '#FEFEFE',
    padding: 12,
    margin: 10

  },
  link: {
    fontSize: 20,
    padding: 5,
    marginTop: 20,
    fontFamily: 'Open Sans Condensed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FEEAF0',
    borderRadius: 1
  },

  title: {
    padding: 17,
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'Petit Formal Script',
    color: '#9B9B9B'

  },
  p: {
    textAlign: 'center',
    fontFamily: 'Open Sans Condensed',
    fontSize: 19,
    letterSpacing: 2
  }

}

const NavBar = ({DropdownButton, MenuItem}) => {
  return (
    <nav style={style.container}>
      <h1 style={style.title}>LifeStyle Blog</h1>
      <p style={style.p}> Everyday life and interests </p>
      <div style={style.link}>

        <Link to='/'>HOME</Link>
        <Link to='/blog'>ALL POSTS</Link>
        <Link to='/create-blog'>CREATE POST</Link>
        <Link to='/'>FOOD</Link>
        <Link to='/'>STLYE</Link>
        <Link to='/'>TRAVEL</Link>
        <Link to='/'>WISHLIST</Link>

      </div>
    </nav>
  )
}

NavBar.propTypes = {
  DropdownButton: PropTypes.func.isRequired,
  MenuItem: PropTypes.func.isRequired

}

export default NavBar
