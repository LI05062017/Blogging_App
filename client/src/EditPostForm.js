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
    border: '3px solid grey',
    borderRadius: 2,
    padding: 40,
    margin: 0,
    fontFamily: 'Open Sans'

  },
  fields: {
    padding: 10,
    margin: 15
  },
  label: {
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
    color: 'grey',
    marginRight: 300,
    marginLeft: 300,
    fontSize: 50,
    borderBottomStyle: 'solid',
    fontFamily: 'Poiret One',
    textAlign: 'center',
    paddingTop: 17
  },
  background: {
    backgroundColor: '#ffbaea',
  }
}

const EditPostForm = ({
  title, description, img, onTitleChange,
  onDescriptionChange, onImageChange, submitPostToServer
}) =>
  <div style={style.background}>
    <h1 style={style.title}> Edit A Post Here </h1>
    <div style={style.container} >
      <form style={style.form}>

        <div style={style.field}>
          <label style={style.label}> Title </label>
          <input style={style.input} value={title} onChange={onTitleChange} />
        </div>

        <div>
          <label style={style.label}> Description </label>
          <input style={style.input} value={description} onChange={onDescriptionChange} />
        </div>

        <div>
          <label style={style.label}> Image </label>
          <input style={style.input} value={img} onChange={onImageChange} />
        </div>

        <div style={style.buttonContainer}>
          <button style={style.button} onClick={submitPostToServer}> Submit </button>
        </div>

      </form>
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
