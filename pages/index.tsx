import Head from 'next/head'
import React, { ReactElement } from 'react'
import Layout from '../components/layout'

export default function Home(): ReactElement {
  return (
    <div>
      <Head>
        <title>People | Simple CRM</title>
        <meta name="description" content="You can see your people here. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout title="People">
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </Layout>
    </div>
  )
}
