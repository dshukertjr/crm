import Head from 'next/head'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Layout from '../components/layout'
import Table from '../components/table'
import { supabase } from '../lib/api'
import { SITE_NAME } from '../lib/constants'
import { Person } from '../models/person'

export default function Home(): ReactElement {
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

  const [people, setPeople] = useState<Person[]>()
  useEffect(() => {
    const getData = async (): Promise<void> => {
      const { data, error } = await supabase.from('people').select()
      if (error) {
        console.error('error', error)
        return
      }
      if (data) {
        const people = data.map<Person>((row) => {
          return {
            name: `${row.first_name} ${row.last_name}`,
            ...row,
          }
        })
        setPeople(people)
      }
    }
    getData()
  }, [])

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
        <Table header={header} data={people}></Table>
      </Layout>
    </div>
  )
}
