import Head from 'next/head'
import React from 'react'
import { ReactElement } from 'react'
import Link from 'next/link'
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik'
import { supabase } from '../lib/api'
import { SITE_NAME } from '../lib/constants'

interface FormValue {
  email?: string
  password?: string
}

export default function LoginPage(): ReactElement {
  return (
    <div>
      <Head>
        <title>Login | {SITE_NAME}</title>
        <meta name="description" content="Log into your simple CRM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <Formik<FormValue>
            initialValues={{
              email: '',
              password: '',
            }}
            validate={(values: FormValue) => {
              const errors: FormValue = {}
              if (!values.email) {
                errors.email = 'Please enter an Email address'
              }
              if (!values.password) {
                errors.password = 'Please enter a password'
              }
              return errors
            }}
            onSubmit={async (values: FormValue, { setSubmitting }: FormikHelpers<FormValue>) => {
              const res = await supabase.auth.signIn({
                email: values.email,
                password: values.password,
              })
              console.log(res)
              setSubmitting(false)
            }}
          >
            {({ isSubmitting }) => (
              <Form className="mt-8 space-y-6">
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <Field
                      id="email"
                      name="email"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email"
                      type="email"
                    />
                    <ErrorMessage
                      className="text-red-500"
                      name="email"
                      component="div"
                    ></ErrorMessage>
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <Field
                      id="password"
                      name="password"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                      type="password"
                    />{' '}
                    <ErrorMessage
                      className="text-red-500"
                      name="password"
                      component="div"
                    ></ErrorMessage>
                  </div>
                </div>

                <div className="text-sm">
                  <Link href="/forgot-password">
                    <a className="font-medium text-indigo-600 hover:text-indigo-500">
                      Forgot your password?
                    </a>
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md transition-colors text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
                <Link href="/register">
                  <a
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md transition-colors text-indigo-600 hover:bg-indigo-200 border-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Don&apos;t have an account yet?
                  </a>
                </Link>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
