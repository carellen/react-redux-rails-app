import React from 'react';
import { Field, reduxForm } from 'redux-form'

let AddForm = ({handleSubmit}) => (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <Field name="title" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )

AddForm = reduxForm({
  form: 'add'
})(AddForm)

export default AddForm;
