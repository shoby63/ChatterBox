import React from 'react';
import { Formik ,Form,useFormikContext} from 'formik';
import '../public/styles/Form.css'
const FormNested = (
  handleSubmit1,
) => (
  <div className='form-div'>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
          handleSubmit1(values,setSubmitting)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
         <>
        <form onSubmit={handleSubmit1}>
          <div className='input-wrapper'>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="Enter your email address"
          />
          <span>{errors.email && touched.email && errors.email}</span>
          </div>
          <div className='input-wrapper'>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder='Enter your password'
          />
          <span>{errors.password && touched.password && errors.password}</span>
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
        <div className='auth'>
        <div className='separator'><div className='line'/>or continue with<div className='line1'/>
      </div>  </div>
        </>
      )}
    </Formik>
  </div>
);

export default FormNested;