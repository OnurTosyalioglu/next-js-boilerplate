import { Fragment, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import props from './props'
import defaultProps from './props.default'
import styles from './styles.module.css'

const LoginButton = props => {
  const { t } = useTranslation('auth')
  const router = useRouter()

  useEffect(() => {})

	return <Fragment>
			<div>
				{t('login')}
			</div>
		</Fragment>
}

LoginButton.props = props
LoginButton.defaultProps = defaultProps

export default LoginButton
