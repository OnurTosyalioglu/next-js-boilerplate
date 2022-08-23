import { useEffect, Fragment } from 'react'
import { auth } from '../../application/service/auth.service'
import useAuth from '../../presentation/context/use.auth'
import cookies from 'nookies'

const AuthStateChanged = ({ children }) => {
  const { user, setUser, loading, setLoading } = useAuth()

  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      }
    })
  }, [])

  return children
}

export default AuthStateChanged
