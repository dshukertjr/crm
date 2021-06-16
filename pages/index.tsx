import { Session } from '@supabase/supabase-js'
import Head from 'next/head'
import React, { ReactElement, useEffect, useState } from 'react'
import Layout from '../components/layout'
import Table from '../components/table'
import { supabase } from '../lib/api'

export default function Home(): ReactElement {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => setSession(session))
  }, [])

  if (!session) {
    return <div>login</div>
  }

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
        <div className="text-center">Loading...</div>
        <Table data={data}></Table>
      </Layout>
    </div>
  )
}
