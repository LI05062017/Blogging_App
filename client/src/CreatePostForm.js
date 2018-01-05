import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    paddingTop: 2,
    // padding: 30,
    display: 'flex',
    justifyContent: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  form: {
    backgroundColor: 'white',
    border: '3px solid grey',
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
    paddingTop: 17,
  }
}

const CreatePostForm = ({onTitleChange, onDescriptionChange, onImageChange, handleSubmit}) => {
  return (
    <div className='creatPostForm'>
      <h3 style={style.title}> Create A Post</h3>
      <div style={style.container}>
        <form style={style.form}>
          <div style={style.field}>
            <label style={style.label}> Title </label>
            <input style={style.input}type='text' placeholder={'Enter Title'} onChange={onTitleChange} />
          </div>

          <div style={style.field}>
            <label style={style.label}> Description </label>
            <input style={style.input} type='text' placeholder={'Enter Description'}onChange={onDescriptionChange} />
          </div>

          <div style={style.field}>
            <label style={style.label}> Image </label>
            <input style={style.input} type='text' placeholder={'Type Url Image '} onChange={onImageChange} />
          </div>

          <div style={style.buttonContainer}>
            <button style={style.button} onClick={handleSubmit} > Submit Post </button>
          </div>
        </form>
      </div>
    </div>
  )
}

CreatePostForm.propTypes = {
  onTitleChange: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired

}

export default CreatePostForm
