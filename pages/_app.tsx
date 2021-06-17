import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import React, { ReactElement } from 'react'
import ProtectedRoutes from '../components/protected-routes'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ProtectedRoutes>
      <Component {...pageProps} />
    </ProtectedRoutes>
  )
}
export default MyApp
