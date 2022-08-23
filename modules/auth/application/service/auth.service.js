import { initializeApp, getApps } from 'firebase/app'
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  confirmPasswordReset,
  onAuthStateChanged,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  FacebookAuthProvider,
} from 'firebase/auth'
import config from '../../../../config/firebase'

const app = initializeApp(config)
const auth = getAuth(app)

class Service {
  constructor(args = {}) {}

  signInWithEmailAndPassword({ email, password }) {
    return new Promise((resolve, reject) => {
      try {
        createUserWithEmailAndPassword(email, password)
          .then(user => resolve(user))
          .catch(err => reject(err))
      } catch (e) {
        reject(e)
      }
    })
  }

  loginWithEmailAndPassword({ email, password }) {
    return new Promise((resolve, reject) => {
      try {
        signInWithEmailAndPassword(email, password)
          .then(user => resolve(user))
          .catch(err => reject(err))
      } catch (e) {
        reject(e)
      }
    })
  }

  confirmPasswordReset({ oobCode, password }) {
    return new Promise((resolve, reject) => {
      try {
        confirmPasswordReset(auth, oobCode, password)
          .then(res => resolve(res))
          .catch(err => reject(err))
      } catch (e) {
        reject(e)
      }
    })
  }

  sendPasswordResetEmail({ email }) {
    return new Promise((resolve, reject) => {
      try {
        sendPasswordResetEmail(auth, email)
          .then(res => resolve(res))
          .catch(err => reject(err))
      } catch (e) {
        reject(e)
      }
    })
  }

  signInWithFacebook() {
    return new Promise((resolve, reject) => {
      try {
        signInWithPopup(auth, new FacebookAuthProvider())
          .then(user => resolve(user))
          .catch(err => reject(err))
      } catch (e) {
        reject(e)
      }
    })
  }

  signInWithGoogle() {
    return new Promise((resolve, reject) => {
      try {
        signInWithPopup(auth, new GoogleAuthProvider())
          .then(user => resolve(user))
          .catch(err => reject(err))
      } catch (e) {
        reject(e)
      }
    })
  }

  signOut() {
    return new Promise((resolve, reject) => {
      try {
        signOut()
          .then(res => resolve(res))
          .catch(err => reject(err))
      } catch (e) {
        reject(e)
      }
    })
  }
}

export default {
  AuthService: new Service(),
  auth,
  onAuthStateChanged,
}
