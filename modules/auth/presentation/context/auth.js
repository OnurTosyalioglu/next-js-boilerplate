import { useState } from 'react'
import { AuthService, } from '../../application/service/auth.service'

const Auth = (prop) => {  
	const [user, setUser] = useState()
	const [loading, setLoading] = useState()
	const [error, setError] = useState()

	const createUserWithEmailAndPassword = ({ email, password }) => {  }
	const signInWithEmailAndPassword = ({ email, password }) => {  }
	const signInWithGoogle = () => {  }
	const signInWithFacebook = () => {  }
	const reset = ({ oobCode, password}) => {  }
	const recover = ({ email }) => {  }
	const logout = () => {  }

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
		reset,
		recover,
		logout,
	}
}

export default Auth
