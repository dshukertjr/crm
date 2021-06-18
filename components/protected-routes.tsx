import { useRouter } from 'next/dist/client/router'
import { useContext } from 'react'
import { ReactElement } from 'react'
import { AuthContext } from '../contexts/auth-context'

const ProtectedRoutes: React.FC = ({ children }): ReactElement => {
  const { user } = useContext(AuthContext)
  const router = useRouter()
  const isAuthenticated = user !== null

  const unprotectedRoutes = ['/login', '/register']
  console.log('router', router)

  const isPathProtected = unprotectedRoutes.indexOf(router.pathname) === -1

  if (typeof window !== 'undefined' && !isAuthenticated && isPathProtected) {
    router.push('/login')
  }
  return <div>{children}</div>
}

export default ProtectedRoutes
