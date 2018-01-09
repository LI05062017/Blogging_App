import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    paddingTop: 2,
    // padding: 30,
    display: 'flex',
    justifyContent: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center'

  },
  form: {
    backgroundColor: 'white',
    // border: '3px solid grey',
    borderRadius: 2,
    padding: 40,
    margin: 0,
    fontFamily: 'Open Sans',

  },
  fields: {
    padding: 10,
    margin: 15
  },
  label: {
    fontFamily: 'Poiret One',
    letterSpacing: 3,
  
    padding: 3,
    marginRight: 15
  },
  input: {
    width: '100%',
    padding: 17
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginTop: 10,
    borderRadius: 3
  },
  title: {
    color: 'black',
    color: '#a36570',
    paddingTop: 70,
    marginRight: 150,
    marginLeft: 150,
    fontSize: 50,
    //fontFamily: 'Poiret One',
    fontFamily: 'Dancing Script',
    textAlign: 'center',
    paddingTop: 17
  },
  background: {
    border: '1px solid #c6baad',
    backgroundColor: '#c6baad',
  },
  img: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

  },
  allContainer: {
    borderRadius: 3,
    backgroundColor: 'white',
    marginRight: 150,
    marginLeft: 150,
    marginBottom: 10,
  }
}

const EditPostForm = ({
  title, description, img, onTitleChange,
  onDescriptionChange, onImageChange, submitPostToServer
}) =>
  <div style={style.background}>
    <div style={style.allContainer}>
      <h1 style={style.title}> Edit A Post Here </h1>

      <div style={style.img}>
        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpVyQuqrE3LFo7rLctF2VKLZk4uOB6wVvSG7hAjHTNkodCsvuKg'} />
      </div>

      <div style={style.container} >
        <form style={style.form}>

          <div style={style.field}>
            <label style={style.label}> - Title - </label>
            <input style={style.input} value={title} onChange={onTitleChange} />
          </div>

          <div>
            <label style={style.label}>- Description -</label>
            <input style={style.input} value={description} onChange={onDescriptionChange} />
          </div>

          <div>
            <label style={style.label}>- Image -</label>
            <input style={style.input} value={img} onChange={onImageChange} />
          </div>

          <div style={style.buttonContainer}>
            <button style={style.button} onClick={submitPostToServer}> Submit </button>
          </div>

        </form>
      </div>
    </div>
  </div>
EditPostForm.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  submitPostToServer: PropTypes.func.isRequired

}

export default EditPostForm
