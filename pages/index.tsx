import Head from 'next/head'
import React, { ReactElement } from 'react'
import Layout from '../components/layout'
import Table from '../components/table'

export default function Home(): ReactElement {
  const data = [
    {
      Name: 'Cheryl Obrien',
      Email: 'g.griffin@yahoo.com',
      Phone: '(775) 252-2843',
    },
    {
      Name: 'Amber Watts',
      Email: 'diana.carlson@aol.com',
      Phone: '(174) 460-8335',
    },
  ]
  return (
    <div>
      <Head>
        <title>People | Simple CRM</title>
        <meta name="description" content="You can see your people here. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout title="People">
        <Table data={data}></Table>
      </Layout>
    </div>
  )
}
