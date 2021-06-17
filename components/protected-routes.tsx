import { useRouter } from 'next/dist/client/router'
import { ReactElement } from 'react'

const ProtectedRoutes: React.FC = ({ children }): ReactElement => {
  // const {user} = useAuthContext()
  const router = useRouter()
  const isAuthenticated = false

  const unprotectedRoutes = ['/login']
  console.log('router', router)

  const isPathProtected = unprotectedRoutes.indexOf(router.pathname) === -1

  if (typeof window !== 'undefined' && !isAuthenticated && isPathProtected) {
    router.push('/login')
  }
  return <div>{children}</div>
}

export default ProtectedRoutes
