import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import React, { ReactElement } from 'react'
import ProtectedRoutes from '../components/protected-routes'
import AuthProvider from '../contexts/auth-context'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <AuthProvider>
      <ProtectedRoutes>
        <Component {...pageProps} />
      </ProtectedRoutes>
    </AuthProvider>
  )
}
export default MyApp
