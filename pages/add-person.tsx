import Head from 'next/head'
import React, { ReactElement } from 'react'
import Layout from '../components/layout'
import { SITE_NAME } from '../lib/constants'

export default function CreatePerson(): ReactElement {
  return (
    <div>
      <Head>
        <title>Add Person | {SITE_NAME}</title>
        <meta name="description" content="You can add new person record here. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout title="Add Person Record"></Layout>
    </div>
  )
}
