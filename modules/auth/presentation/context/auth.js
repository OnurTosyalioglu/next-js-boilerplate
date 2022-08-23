import { useState } from 'react'
import { AuthService } from '../../application/service/auth.service'

const Auth = prop => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState()
  const [error, setError] = useState()

  const createUserWithEmailAndPassword = ({
    email,
    password,
  }) => {
    setLoading(true)
    AuthService.createUserWithEmailAndPassword({
      email,
      password,
    })
      .then(user => {
        setLoading(false)
        setUser(user)
      })
      .catch(err => {
        setLoading(false)
        setUser()
        setError(err)
      })
  }

  const signInWithEmailAndPassword = ({
    email,
    password,
  }) => {
    setLoading(true)
    AuthService.signInWithEmailAndPassword({
      email,
      password,
    })
      .then(user => {
        setLoading(false)
        setUser(user)
      })
      .catch(err => {
        setLoading(false)
        setUser()
        setError(err)
      })
  }

  const signInWithGoogle = () => {
    setLoading(true)
    AuthService.signInWithGoogle({
      email,
      password,
    })
      .then(user => {
        setLoading(false)
        setUser(user)
      })
      .catch(err => {
        setLoading(false)
        setUser()
        setError(err)
      })
  }

  const signInWithFacebook = () => {
    setLoading(true)
    AuthService.signInWithFacebook({
      email,
      password,
    })
      .then(user => {
        setLoading(false)
        setUser(user)
      })
      .catch(err => {
        setLoading(false)
        setUser()
        setError(err)
      })
  }

  const confirmPasswordReset = ({ oobCode, password }) => {
    setLoading(true)
    AuthService.confirmPasswordReset({ oobCode, password })
      .then(res => {
        setLoading(false)
      })
      .catch(err => setError(err))
  }

  const sendPasswordResetEmail = ({ email }) => {
    setLoading(true)
    AuthService.sendPasswordResetEmail({ email })
      .then(res => {
        setLoading(false)
      })
      .catch(err => setError(err))
  }

  const logout = () => {
    setLoading(true)
    AuthService.logout({
      email,
      password,
    })
      .then(res => {
        setLoading(false)
        setUser()
      })
      .catch(err => {
        setLoading(false)
        setUser()
        setError(err)
      })
  }

  return {
    user,
    setUser,
    loading,
    setLoading,
    error,
    setError,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithGoogle,
    signInWithFacebook,
    sendPasswordResetEmail,
    confirmPasswordReset,
    logout,
  }
}

export default Auth
