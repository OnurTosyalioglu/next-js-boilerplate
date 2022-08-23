import { createContext } from 'react'

const AuthContext = createContext({
  user: null,
  loading: null,
  error: null,
})

export default AuthContext
