import Head from 'next/head'
import { ReactElement } from 'react'

export default function LoginPage(): ReactElement {
  return (
    <div>
      <Head>
        <title>Login | Simple CRM</title>
        <meta name="description" content="Log into your simple CRM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>login page</div>
    </div>
  )
}
