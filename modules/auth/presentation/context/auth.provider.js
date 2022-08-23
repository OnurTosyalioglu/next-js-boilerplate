import AuthContext from './auth.context'
import useAuth from './auth'

const AuthProvider = ({ children }) => {
  const auth = useAuth()

  return (
    <AuthContext.Provider>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
