import React from 'react'
import PropTypes from 'prop-types'

const CreatePostForm = ({onTitleChange, onDescriptionChange, onImageChange, handleSubmit}) => {
  return (
    <div>
      <form>
        <div>
          <label> Title </label>
          <input type='text' onChange={onTitleChange} />
        </div>

        <div>
          <label> Description </label>
          <input type='text' onChange={onDescriptionChange} />
        </div>

        <div>
          <label> Image </label>
          <input type='text' onChange={onImageChange} />
        </div>

        <button onClick={this.handleSubmit} > Submit Post </button>

      </form>
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
