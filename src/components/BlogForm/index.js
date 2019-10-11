import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validateForm = (values) => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Required'
  }

  if (!values.author) {
    errors.author = 'Required'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.content) {
    errors.content = 'Required'
  } else if (values.content.length > 500) {
    errors.content = 'Sorry, there is a 500 word limit.'
  }
  return errors;
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && 
        ((error && <span>{error}</span>) ||
         (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const BlogForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      {/* <label>title:</label>
      <Field>
        name="title"
        type="text"
        component="input"
      </Field> */}

      <Field
        name="title"
        type="text"
        component={renderField}
        label="Title: "
      />

      <Field
        name="author"
        type="text"
        component={renderField}
        label="Author: "
      />

      <Field
        name="email"
        type="text"
        component={renderField}
        label="Email: "
      />

      <Field
        name="content"
        component={renderField}
        label="Blog: "
        />

      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: 'newBlog',
  validate: validateForm,
})(BlogForm);

