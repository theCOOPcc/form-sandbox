import React from 'react';
import {Formik, Form, Field} from 'formik'
import './MentorForm.css'

// const helpOptions =  {
//   '1:1 Mentoring'
//   'Group Presentations'
//   'Spring Planning',
//   'Design Review',
//   'Lightning Talks(Presenter)',
//   'Lightning Talks(Audience)',
//   'Interview Prep',
//   'Portfolio Development'
// };

const initialValues = {
  helpWith: '',
  availDates: '',
  workProfile: ''
}

// const onSubmit = values => {
//   console.log('form values', values)
// }

// const validate = values


export const MentorForm = () => {
  return (
  <Formik
    // initialValues={initialValues}
    // validationSchema={validationSchema}
    // onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control required">
          <label htmlFor="helpWith">I'd love to help with:</label>
          <Field 
            type='text' 
            id='helpWith' 
            name="helpWith"
            />
        </div>

        <div className="form-control required">
          <label htmlFor="availDates">I'm avalilable to help out: </label>
          <Field
            type='date'
            id='availDates'
            name='availDates'
            />
        </div>

        <div className="form-control required">
          <label htmlFor="workProfile">Linkedin Profile: </label>
          <Field 
            type='text'
            id='workProfile'
            name='workProfile'
          />
        </div>
      </Form>

    </Formik>
)}