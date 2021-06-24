import React from 'react'
import { ReactElement } from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { supabase } from '../lib/api'
import FormField from './form-field'

interface FormValue {
  first_name?: string
  last_name?: string
  email?: string
  phone?: string
}

export default function PersonForm(): ReactElement {
  return (
    <Formik<FormValue>
      initialValues={{
        last_name: '',
        first_name: '',
        email: '',
        phone: '',
      }}
      validate={(values: FormValue) => {
        const errors: FormValue = {}
        if (!values.first_name) {
          errors.first_name = 'Please enter a first name'
        }
        if (!values.last_name) {
          errors.last_name = 'Please enter a last name'
        }
        if (!values.email) {
          errors.email = 'Please enter an email address'
        }
        if (!values.phone) {
          errors.phone = 'Please enter a phone number'
        }
        return errors
      }}
      onSubmit={async (values: FormValue, { setSubmitting }: FormikHelpers<FormValue>) => {
        setSubmitting(true)
        const { data, error } = await supabase.from('people').upsert(values)
        console.log(data, error)
        setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <Form className="mt-8 space-y-4">
          <div className="flex space-x-2">
            <FormField label="Last Name" name="last_name"></FormField>
            <FormField label="First Name" name="first_name"></FormField>
          </div>
          <FormField label="Email" name="email"></FormField>
          <FormField label="Phone Number" name="phone"></FormField>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md transition-colors text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </Form>
      )}
    </Formik>
  )
}