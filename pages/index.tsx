import Head from 'next/head'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import Layout from '../components/layout'
import Table from '../components/table'
import { SITE_NAME } from '../lib/constants'

export default function Home(): ReactElement {
  const data = [
    {
      name: 'Cheryl Obrien',
      email: 'g.griffin@yahoo.com',
      phone: '(775) 252-2843',
    },
    {
      name: 'Amber Watts',
      email: 'diana.carlson@aol.com',
      phone: '(174) 460-8335',
    },
  ]

  const header = [
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'email',
      label: 'Email',
    },
    {
      key: 'phone',
      label: 'Phone',
    },
  ]
  const cta = (
    <Link href="/add-person">
      <a className="bg-indigo-700 text-white font-bold px-4 py-2 rounded">Add</a>
    </Link>
  )
  return (
    <div>
      <Head>
        <title>People | {SITE_NAME}</title>
        <meta name="description" content="You can see your people here. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout title="People" cta={cta}>
        <Table header={header} data={data}></Table>
      </Layout>
    </div>
  )
}
