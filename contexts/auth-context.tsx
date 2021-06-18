import { AuthUser } from '@supabase/supabase-js'
import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { useEffect } from 'react'
import { ReactElement } from 'react'
import { supabase } from '../lib/api'

const AuthProvider: React.FC = ({ children }): ReactElement => {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [isStatusKnown, setIsStatusKnown] = useState(false)

  useEffect(() => {
    const user = supabase.auth.user()
    console.log(user)
    setUser(user)
    setIsStatusKnown(true)
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser(session?.user)
      } else {
        setUser(null)
      }
    })
    return function cleanup() {
      data?.unsubscribe()
    }
  }, [])
  if (isStatusKnown) {
    return (
      <AuthContext.Provider value={{ user, setUser, isStatusKnown }}>
        {children}
      </AuthContext.Provider>
    )
  } else {
    return <div>Loading User Info...</div>
  }
}

export default AuthProvider

export const AuthContext = createContext<{
  user: AuthUser | null
  setUser: Dispatch<SetStateAction<AuthUser | null>> | null
  isStatusKnown: boolean
}>({ user: null, setUser: null, isStatusKnown: false })
