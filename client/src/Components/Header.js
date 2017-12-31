import React from 'react'

const style = {
  container: {
    border: '1px solid black'
  }
}
const Header = () => {
  return (
    <div style={style.container}>
      <i className='fa fa-facebook-official' aria-hidden='true' />
    </div>
  )
}

export default Header
