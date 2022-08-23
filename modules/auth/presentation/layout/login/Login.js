import { Fragment, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import props from './props'
import defaultProps from './props.default'
import styles from './styles.module.css'

import ContinueWithFacebook from '../../component/continueWithFacebook/ContinueWithFacebook'
import ContinueWithGoogle from '../../component/continueWithGoogle/ContinueWithGoogle'
import Divider from '../../component/divider/Divider'
import LoginButton from '../../component/loginButton/LoginButton'
import Email from '../../component/email/Email'
import Password from '../../component/password/Password'
import ForgotPassword from '../../component/forgotPassword/ForgotPassword'
import RememberMe from '../../component/rememberMe/RememberMe'
import Options from '../../component/options/Options'

const Login = props => {
  const { t } = useTranslation('auth')
  const router = useRouter()

  useEffect(() => {})

	return <Fragment>
			<div>
			</div>
		</Fragment>
}

Login.props = props
Login.defaultProps = defaultProps

export default Login
