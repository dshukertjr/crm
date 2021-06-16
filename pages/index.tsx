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
        <table className=" w-full">
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cheryl Obrien</td>
              <td>g.griffin@yahoo.com</td>
              <td>(775) 252-2843</td>
            </tr>
          </tbody>
        </table>
      </Layout>
    </div>
  )
}
