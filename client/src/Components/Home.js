import React from 'react'

const style = {
  container: {

  },
  imgOne: {
    border: '1px solid black',
    maxWidth: '30%',
    maxHeight: '15%',
    padding: 0,
    margin: 5,
  },
  imgTwo: {
    border: '1px solid black',
    maxWidth: '26.5%',
    maxHeight: '15%',
    padding: 0,
    margin: 5,
  },
  imgThree: {
    border: '1px solid black',
    Width: '160%',
    Height: '160%',
    padding: 0,
    margin: 5,
  },
  h1: {
    fontFamily: 'Poiret One',
    textAlign: 'center',
    fontSize: 50
  },
  p: {
    fontFamily: 'Open Sans Condensed',
    fontSize: 25,
    textDecoration: 'overline',
    textAlign: 'center',
    padding: 19,
    letterSpacing: 4
  },
  imgcontainer: {
    padding: 5,
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const Home = () => {
  return (
    <div style={style.container}>
      <h1 style={style.h1}> LifeStyle Home </h1>
      <p style={style.p}> Trending Now </p>
      <div style={style.imgcontainer}>
        <img style={style.imgOne} src={'http://omandthecityblog.com/wp-content/uploads/2017/06/cover-photo.jpg'} />
        <img style={style.imgTwo} src={'https://pbs.twimg.com/profile_images/885612085509582849/GO3cGtir.jpg'} />
        <img style={style.imgOne} src={'http://omandthecityblog.com/wp-content/uploads/2017/06/cover-photo.jpg'} />
       


      </div>
    </div>
  )
}

export default Home
