import React from 'react'
import PropTypes from 'prop-types'

const EditPostForm = ({
  title, description, img, onTitleChange,
  onDescriptionChange, onImageChange, submitPostToServer
}) =>

  <form>

    <div>
      <label> Title </label>
      <input value={title} onChange={onTitleChange} />
    </div>

    <div>
      <label> Description </label>
      <input value={description} onChange={onDescriptionChange} />
    </div>

    <div>
      <label />
      <input value={img} onChange={onImageChange} />
    </div>

    <div>
      <button onClick={submitPostToServer}> Submit </button>
    </div>

  </form>

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
