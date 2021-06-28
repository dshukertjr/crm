import { GetStaticProps } from 'next'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import Layout from '../../components/layout'
import PersonForm from '../../components/person-form'
import { supabase } from '../../lib/api'
import { SITE_NAME } from '../../lib/constants'
import { Person } from '../../models/person'

export default function EditPerson({ person }: { person: Person }): ReactElement {
  return (
    <div>
      <Head>
        <title>Edit Person | {SITE_NAME}</title>
        <meta name="description" content="You can add new person record here. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout title="Add Person Record">
        <PersonForm originalPerson={person}></PersonForm>
      </Layout>
    </div>
  )
}

export const getServerSideProps: GetStaticProps = async (context) => {
  const personId = context.params?.id
  if (!personId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const { data } = await supabase.from('people').select().eq('id', personId)
  if (!data) {
    return {
      props: {},
    }
  }
  const person = data[0] as Person

  return {
    props: {
      person,
    },
  }
}
