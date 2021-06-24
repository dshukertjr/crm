import React from 'react'
import { ReactElement } from 'react'
import { ErrorMessage, Field } from 'formik'

export default function FormField({
  label,
  name,
  type = 'text',
}: {
  label: string
  name: string
  type?: string
}): ReactElement {
  return (
    <div>
      <label htmlFor={name} className=" text-xs">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
        type={type}
      />
      <ErrorMessage className="text-red-500 text-xs" name={name} component="div"></ErrorMessage>
    </div>
  )
}
